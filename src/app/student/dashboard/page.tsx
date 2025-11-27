import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

export default async function StudentDashboard() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "STUDENT") {
        redirect("/login");
    }

    const student = await db.student.findUnique({
        where: { userId: session.user.id },
        include: {
            applications: {
                include: {
                    event: true,
                },
            },
            internships: true,
        },
    });

    if (!student) {
        return (
            <div>
                <h1 className="text-2xl font-bold">Welcome!</h1>
                <p className="mt-4">Please complete your CAF to get started.</p>
            </div>
        );
    }

    return <DashboardClient student={student} />;
}
