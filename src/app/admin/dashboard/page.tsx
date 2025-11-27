import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        redirect("/login");
    }

    const studentCount = await db.student.count();
    const eventCount = await db.companyEvent.count();
    const activeEvents = await db.companyEvent.count({
        where: { status: "OPEN" },
    });
    const pendingInternships = await db.internship.count({
        where: { status: "PENDING" },
    });

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                {/* Total Students */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
                    <p className="mt-2 text-3xl font-bold text-blue-600">{studentCount}</p>
                </div>

                {/* Total Events */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-sm font-medium text-gray-500">Total Drives</h3>
                    <p className="mt-2 text-3xl font-bold text-purple-600">{eventCount}</p>
                </div>

                {/* Active Events */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-sm font-medium text-gray-500">Active Drives</h3>
                    <p className="mt-2 text-3xl font-bold text-green-600">{activeEvents}</p>
                </div>

                {/* Pending Internships */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-sm font-medium text-gray-500">Pending Internships</h3>
                    <p className="mt-2 text-3xl font-bold text-yellow-600">{pendingInternships}</p>
                </div>
            </div>

            {/* Quick Actions or Recent Activity could go here */}
            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-lg font-medium text-gray-900">Welcome, Admin</h2>
                <p className="mt-2 text-gray-600">
                    Use the sidebar to manage events, mock interviews, and verify internships.
                </p>
            </div>
        </div>
    );
}
