"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import * as XLSX from "xlsx";

interface Applicant {
    id: string;
    status: string;
    student: {
        name: string;
        rollNo: string;
        email: string;
        phone: string;
        currentCGPA: number;
        resumeUrl?: string;
    };
}

interface EventDetails {
    id: string;
    title: string;
    companyName: string;
    applications: Applicant[];
}

export default function EventDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const [event, setEvent] = useState<EventDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [uploading, setUploading] = useState(false);



    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`/api/admin/events/${params.id}`, {
            credentials: "include",
        })
            .then((res) => {
                if (!res.ok) {
                    // If 401/404, the body might still be JSON
                    return res.json().then(data => {
                        throw new Error(data.error || "Failed to fetch event");
                    }).catch(() => {
                        throw new Error(`Request failed with status ${res.status}`);
                    });
                }
                return res.json();
            })
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setEvent(data);
                }
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [params.id]);

    const handleExport = () => {
        if (!event) return;

        const data = event.applications.map((app) => ({
            "Roll No": app.student.rollNo,
            "Name": app.student.name,
            "Email": app.student.email,
            "Phone": app.student.phone,
            "CGPA": app.student.currentCGPA,
            "Status": app.status,
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Applicants");
        XLSX.writeFile(wb, `${event.companyName}_${event.title}_Applicants.xlsx`);
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files[0]) return;

        setUploading(true);
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = async (evt) => {
            const bstr = evt.target?.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws);

            try {
                const res = await fetch(`/api/admin/events/${params.id}/bulk-update`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ data }),
                });

                if (res.ok) {
                    alert("Status updated successfully!");
                    window.location.reload();
                } else {
                    alert("Failed to update status.");
                }
            } catch (error) {
                alert("An error occurred.");
            } finally {
                setUploading(false);
            }
        };

        reader.readAsBinaryString(file);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div className="text-red-600">Error: {error}</div>;
    if (!event) return <div>Event not found</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{event.companyName} - {event.title}</h1>
                    <p className="text-gray-500">Total Applicants: {event.applications.length}</p>
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={handleExport}
                        className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                    >
                        Export to Excel
                    </button>
                    <div className="relative">
                        <input
                            type="file"
                            accept=".xlsx, .xls"
                            onChange={handleFileUpload}
                            className="absolute inset-0 cursor-pointer opacity-0"
                            disabled={uploading}
                        />
                        <button
                            className={`rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 ${uploading ? "opacity-50" : ""}`}
                        >
                            {uploading ? "Uploading..." : "Bulk Update Status"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Roll No</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">CGPA</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Resume</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {event.applications.map((app) => (
                            <tr key={app.id}>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{app.student.rollNo}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{app.student.name}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{app.student.currentCGPA}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                    {app.student.resumeUrl ? (
                                        <a
                                            href={app.student.resumeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            View
                                        </a>
                                    ) : (
                                        <span className="text-gray-400">N/A</span>
                                    )}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${app.status === 'SELECTED' ? 'bg-green-100 text-green-800' :
                                        app.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                                            'bg-blue-100 text-blue-800'
                                        }`}>
                                        {app.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
