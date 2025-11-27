"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface Internship {
    id: string;
    companyName: string;
    role: string;
    status: string;
    rejectionReason?: string;
}

interface InternshipFormData {
    companyName: string;
    role: string;
    duration: string;
    stipend?: string;
    startDate: string;
    endDate?: string;
}

export default function StudentInternshipsPage() {
    const router = useRouter();
    const [internships, setInternships] = useState<Internship[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState("");

    const { register, handleSubmit, reset } = useForm<InternshipFormData>();

    useEffect(() => {
        fetch("/api/student/internships")
            .then((res) => res.json())
            .then((data) => {
                setInternships(data);
                setIsLoading(false);
            });
    }, []);

    const onSubmit = async (data: InternshipFormData) => {
        try {
            const res = await fetch("/api/student/internships", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setMessage("Internship submitted successfully!");
                setShowForm(false);
                reset();
                // Refresh list
                const newInternship = await res.json();
                setInternships([...internships, newInternship]);
            } else {
                setMessage("Failed to submit internship.");
            }
        } catch (error) {
            setMessage("An error occurred.");
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">My Internships</h1>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    {showForm ? "Cancel" : "Add Internship"}
                </button>
            </div>

            {message && (
                <div className={`rounded p-3 ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {message}
                </div>
            )}

            {showForm && (
                <div className="rounded-lg bg-white p-6 shadow">
                    <h2 className="mb-4 text-lg font-medium">Submit New Internship</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                                <input {...register("companyName", { required: true })} className="mt-1 block w-full rounded-md border border-gray-300 p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <input {...register("role", { required: true })} className="mt-1 block w-full rounded-md border border-gray-300 p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Duration</label>
                                <input {...register("duration", { required: true })} className="mt-1 block w-full rounded-md border border-gray-300 p-2" placeholder="e.g. 6 months" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Stipend</label>
                                <input {...register("stipend")} className="mt-1 block w-full rounded-md border border-gray-300 p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                <input type="date" {...register("startDate", { required: true })} className="mt-1 block w-full rounded-md border border-gray-300 p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">End Date</label>
                                <input type="date" {...register("endDate")} className="mt-1 block w-full rounded-md border border-gray-300 p-2" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Submit</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="overflow-hidden rounded-lg bg-white shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Company</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Remarks</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {internships.map((internship) => (
                            <tr key={internship.id}>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{internship.companyName}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{internship.role}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${internship.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                                            internship.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                                                'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {internship.status}
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{internship.rejectionReason || "-"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
