import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function MockInterviewsPage() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        redirect("/login");
    }

    const interviews = await db.mockInterview.findMany({
        orderBy: { date: "desc" },
        include: {
            _count: {
                select: { results: true },
            },
        },
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Mock Interviews</h1>
                <Link
                    href="/admin/mock-interviews/new"
                    className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Schedule Interview
                </Link>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Participants</th>
                            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {interviews.map((interview) => (
                            <tr key={interview.id}>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{interview.title}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{new Date(interview.date).toLocaleDateString()}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{interview._count.results}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                    <Link href={`/admin/mock-interviews/${interview.id}`} className="text-blue-600 hover:text-blue-900">
                                        Manage Results
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
