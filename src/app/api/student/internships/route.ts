import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
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

    const internships = await db.internship.findMany({
        where: { studentId: student.id },
        orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(internships);
}

export async function POST(req: Request) {
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

    const body = await req.json();
    const { companyName, role, duration, stipend, startDate, endDate } = body;

    const internship = await db.internship.create({
        data: {
            studentId: student.id,
            companyName,
            role,
            duration,
            stipend,
            startDate: new Date(startDate),
            endDate: endDate ? new Date(endDate) : null,
            status: "PENDING",
        },
    });

    return NextResponse.json(internship);
}
