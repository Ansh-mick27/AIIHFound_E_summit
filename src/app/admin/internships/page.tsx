"use client";

import { useState, useEffect } from "react";

interface Internship {
    id: string;
    companyName: string;
    role: string;
    startDate: string;
    status: string;
    student: {
        name: string;
        rollNo: string;
    };
}

export default function AdminInternshipsPage() {
    const [activeTab, setActiveTab] = useState<"PENDING" | "HISTORY">("PENDING");
    const [internships, setInternships] = useState<Internship[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchInternships = (status: string) => {
        setIsLoading(true);
        const query = status === "PENDING" ? "status=PENDING" : "history=true";
        fetch(`/api/admin/internships?${query}`)
            .then((res) => res.json())
            .then((data) => {
                setInternships(data);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchInternships(activeTab);
    }, [activeTab]);

    const handleAction = async (id: string, action: "APPROVED" | "REJECTED", reason?: string) => {
        if (action === "REJECTED" && !reason) {
            reason = prompt("Enter rejection reason:") || "";
            if (!reason) return;
        }

        try {
            const res = await fetch(`/api/admin/internships/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: action, rejectionReason: reason }),
            });

            if (res.ok) {
                fetchInternships(activeTab);
            } else {
                alert("Failed to update status");
            }
        } catch (error) {
            alert("An error occurred");
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Internship Verification</h1>

            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    <button
                        onClick={() => setActiveTab("PENDING")}
                        className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${activeTab === "PENDING"
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            }`}
                    >
                        Pending Verification
                    </button>
                    <button
                        onClick={() => setActiveTab("HISTORY")}
                        className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${activeTab === "HISTORY"
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            }`}
                    >
                        History
                    </button>
                </nav>
            </div>

            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Student</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Company</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Start Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                                {activeTab === "PENDING" && (
                                    <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {internships.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">No internships found.</td>
                                </tr>
                            ) : (
                                internships.map((internship) => (
                                    <tr key={internship.id}>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900">{internship.student.name}</div>
                                            <div className="text-sm text-gray-500">{internship.student.rollNo}</div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{internship.companyName}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{internship.role}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{new Date(internship.startDate).toLocaleDateString()}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm">
                                            <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${internship.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                                                    internship.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {internship.status}
                                            </span>
                                        </td>
                                        {activeTab === "PENDING" && (
                                            <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                <button
                                                    onClick={() => handleAction(internship.id, "APPROVED")}
                                                    className="mr-4 text-green-600 hover:text-green-900"
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() => handleAction(internship.id, "REJECTED")}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Reject
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
