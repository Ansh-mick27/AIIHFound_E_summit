import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const event = await db.companyEvent.findUnique({
            where: { id: params.id },
            include: {
                applications: {
                    include: {
                        student: {
                            include: {
                                user: {
                                    select: { email: true },
                                },
                            },
                        },
                    },
                },
            },
        });

        if (!event) {
            return NextResponse.json({ error: "Event not found" }, { status: 404 });
        }

        // Flatten structure for easier consumption
        const formattedEvent = {
            ...event,
            applications: event.applications.map((app) => ({
                id: app.id,
                status: app.status,
                student: {
                    name: app.student.name,
                    rollNo: app.student.rollNo,
                    phone: app.student.phone,
                    currentCGPA: app.student.currentCGPA,
                    email: app.student.user.email,
                    resumeUrl: app.student.resumeUrl,
                },
            })),
        };

        return NextResponse.json(formattedEvent);
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}
