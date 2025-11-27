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

    const events = await db.companyEvent.findMany({
        where: { status: "OPEN" },
        orderBy: { date: "asc" },
        include: {
            applications: {
                where: { studentId: student.id },
            },
        },
    });

    const formattedEvents = events.map((event) => ({
        id: event.id,
        companyName: event.companyName,
        title: event.title,
        description: event.description,
        date: event.date,
        location: event.location,
        hasApplied: event.applications.length > 0,
        applicationStatus: event.applications[0]?.status,
    }));

    return NextResponse.json(formattedEvents);
}
