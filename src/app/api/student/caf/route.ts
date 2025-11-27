import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import { cafSchema } from "@/lib/validations/caf";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "STUDENT") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const student = await db.student.findUnique({
        where: { userId: session.user.id },
    });

    return NextResponse.json({ student });
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "STUDENT") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const result = cafSchema.safeParse(body);

    if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const data = result.data;

    // Check if locked
    const currentStudent = await db.student.findUnique({
        where: { userId: session.user.id },
    });

    if (currentStudent?.isCafLocked) {
        // Only allow updating CGPA and Backlogs
        const updatedStudent = await db.student.update({
            where: { userId: session.user.id },
            data: {
                currentCGPA: data.currentCGPA,
                backlogs: data.backlogs,
            },
        });
        return NextResponse.json(updatedStudent);
    } else {
        // Update all fields and lock
        const updatedStudent = await db.student.upsert({
            where: { userId: session.user.id },
            update: {
                ...data,
                isCafLocked: true,
            },
            create: {
                userId: session.user.id,
                ...data,
                isCafLocked: true,
            },
        });
        return NextResponse.json(updatedStudent);
    }
}
