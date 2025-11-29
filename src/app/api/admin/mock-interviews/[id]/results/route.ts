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
    const { data } = body; // Array of { "Roll No": "...", "Score": 10, "Grade": "A", "Feedback": "..." }

    if (!Array.isArray(data)) {
        return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
    }

    const updates = [];
    const errors = [];

    for (const row of data) {
        const rollNo = row["Roll No"];
        const score = row["Score"];
        const grade = row["Grade"];
        const feedback = row["Feedback"];

        if (!rollNo) continue;

        try {
            // Upsert result
            // Note: We are linking by Roll No directly in the MockInterviewResult model as per schema
            // But we might want to ensure the student exists? The schema has `studentRollNo String`.
            // It doesn't strictly enforce a foreign key to Student table, which is good for flexibility if student not yet registered,
            // but ideally it should link. The schema I defined earlier:
            // model MockInterviewResult { ... studentRollNo String ... }
            // So it's just a string.

            // We need to check if a result already exists for this student in this interview to update it,
            // but the schema doesn't have a unique constraint on [interviewId, studentRollNo].
            // I should probably have added that. For now, I'll delete existing and create new, or just create.
            // Better: Check if exists.

            const existing = await db.mockInterviewResult.findFirst({
                where: {
                    interviewId: params.id,
                    studentRollNo: String(rollNo),
                },
            });

            if (existing) {
                const update = await db.mockInterviewResult.update({
                    where: { id: existing.id },
                    data: {
                        score: Number(score),
                        grade: String(grade),
                        feedback: String(feedback),
                    },
                });
                updates.push(update);
            } else {
                const create = await db.mockInterviewResult.create({
                    data: {
                        interviewId: params.id,
                        studentRollNo: String(rollNo),
                        score: Number(score),
                        grade: String(grade),
                        feedback: String(feedback),
                    },
                });
                updates.push(create);
            }
        } catch (e) {
            errors.push(`Failed to update ${rollNo}`);
        }
    }

    return NextResponse.json({ message: "Bulk upload processed", updates, errors });
}
