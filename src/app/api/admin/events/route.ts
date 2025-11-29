import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import { eventSchema } from "@/lib/validations/event";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const result = eventSchema.safeParse(body);

    if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const data = result.data;

    const event = await db.companyEvent.create({
        data: {
            title: data.title,
            companyName: data.companyName,
            description: data.description,
            date: new Date(data.date),
            location: data.location,
            status: data.status,
        },
    });

    // Notify all students
    const students = await db.user.findMany({
        where: { role: "STUDENT" },
        select: { email: true },
    });

    // Send emails in background (don't await loop)
    students.forEach((student) => {
        if (student.email) {
            import("@/lib/email").then(({ sendNewDriveEmail }) => {
                sendNewDriveEmail(student.email, event);
            });
        }
    });

    return NextResponse.json(event);
}
