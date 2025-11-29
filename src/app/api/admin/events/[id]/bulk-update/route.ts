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

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { data } = body; // Array of { "Roll No": "...", "Status": "..." }

    if (!Array.isArray(data)) {
        return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
    }

    const updates = [];
    const errors = [];

    for (const row of data) {
        const rollNo = row["Roll No"];
        const status = row["Status"];

        if (!rollNo || !status) continue;

        // Find student by Roll No
        const student = await db.student.findUnique({
            where: { rollNo: String(rollNo) },
        });

        if (!student) {
            errors.push(`Student with Roll No ${rollNo} not found`);
            continue;
        }

        // Update application status
        try {
            const update = await db.companyEventApplication.updateMany({
                where: {
                    eventId: params.id,
                    studentId: student.id,
                },
                data: {
                    status: status.toUpperCase(), // Ensure uppercase enum match
                },
            });
            updates.push(update);

            // Send email notification
            const user = await db.user.findUnique({
                where: { id: student.userId },
                select: { email: true },
            });

            if (user?.email) {
                const event = await db.companyEvent.findUnique({
                    where: { id: params.id },
                    select: { title: true },
                });

                if (event) {
                    import("@/lib/email").then(({ sendStatusUpdateEmail }) => {
                        sendStatusUpdateEmail(user.email!, event.title, status.toUpperCase());
                    });
                }
            }
        } catch (e) {
            errors.push(`Failed to update ${rollNo}`);
        }
    }

    return NextResponse.json({ message: "Bulk update processed", updates, errors });
}
