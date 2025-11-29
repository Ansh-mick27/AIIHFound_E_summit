import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "STUDENT") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const student = await db.student.findUnique({
        where: { userId: session.user.id },
    });

    if (!student) {
        return NextResponse.json({ error: "Student profile not found" }, { status: 404 });
    }

    // Check if already applied
    const existingApplication = await db.companyEventApplication.findUnique({
        where: {
            eventId_studentId: {
                eventId: params.id,
                studentId: student.id,
            },
        },
    });

    if (existingApplication) {
        return NextResponse.json({ error: "Already applied" }, { status: 400 });
    }

    // Create application
    const application = await db.companyEventApplication.create({
        data: {
            eventId: params.id,
            studentId: student.id,
            status: "APPLIED",
        },
    });

    return NextResponse.json(application);
}
