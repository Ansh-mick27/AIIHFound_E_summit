"use client";

import { useState } from "react";

interface DashboardClientProps {
    student: any;
}

export default function DashboardClient({ student }: DashboardClientProps) {
    const [uploading, setUploading] = useState(false);

    const handleFileUpload = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUploading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch("/api/student/profile", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                alert("Profile updated successfully!");
                window.location.reload();
            } else {
                alert("Failed to update profile.");
            }
        } catch (error) {
            alert("An error occurred.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

            {/* Profile Summary */}
            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-lg font-bold text-gray-900">Profile Summary</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="text-lg font-medium text-gray-900">{student?.name}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Roll No</p>
                        <p className="text-lg font-medium text-gray-900">{student?.rollNo}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Current CGPA</p>
                        <p className="text-lg font-medium text-gray-900">{student?.currentCGPA}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Backlogs</p>
                        <p className="text-lg font-medium text-red-600">{student?.backlogs}</p>
                    </div>
                </div>

                {/* File Uploads */}
                <div className="mt-8 border-t pt-6">
                    <h3 className="text-md font-bold text-gray-900">Documents</h3>

                    <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Profile Photo */}
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-700">Profile Photo</p>
                            {student?.profilePhoto ? (
                                <div className="mb-2">
                                    <img
                                        src={student.profilePhoto}
                                        alt="Profile"
                                        className="h-24 w-24 rounded-full object-cover border"
                                    />
                                    <p className="mt-1 text-xs text-green-600">Photo uploaded</p>
                                </div>
                            ) : (
                                <p className="mb-2 text-xs text-gray-500">No photo uploaded</p>
                            )}
                        </div>

                        {/* Resume */}
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-700">Resume</p>
                            {student?.resumeUrl ? (
                                <div className="mb-2">
                                    <a
                                        href={student.resumeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        View Current Resume
                                    </a>
                                </div>
                            ) : (
                                <p className="mb-2 text-xs text-gray-500">No resume uploaded</p>
                            )}
                        </div>
                    </div>

                    <form onSubmit={handleFileUpload} className="mt-6 space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Update Photo</label>
                                <input
                                    type="file"
                                    name="profilePhoto"
                                    accept="image/*"
                                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Update Resume (PDF)</label>
                                <input
                                    type="file"
                                    name="resume"
                                    accept=".pdf"
                                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={uploading}
                            className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-300"
                        >
                            {uploading ? "Uploading..." : "Upload Files"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Applications List */}
            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-lg font-bold text-gray-900">My Applications</h2>
                {student?.applications.length === 0 ? (
                    <p className="mt-4 text-gray-500">No applications yet.</p>
                ) : (
                    <ul className="mt-4 space-y-4">
                        {student?.applications.map((app: any) => (
                            <li key={app.id} className="flex justify-between border-b pb-2">
                                <div>
                                    <p className="font-medium text-gray-900">{app.event.companyName}</p>
                                    <p className="text-sm text-gray-500">{app.event.title}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${app.status === 'SELECTED' ? 'bg-green-100 text-green-800' :
                                        app.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                                            'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {app.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Internships List */}
            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-lg font-bold text-gray-900">Internships</h2>
                {student?.internships.length === 0 ? (
                    <p className="mt-4 text-gray-500">No internships submitted.</p>
                ) : (
                    <ul className="mt-4 space-y-4">
                        {student?.internships.map((internship: any) => (
                            <li key={internship.id} className="flex justify-between border-b pb-2">
                                <div>
                                    <p className="font-medium text-gray-900">{internship.companyName}</p>
                                    <p className="text-sm text-gray-500">{internship.role}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${internship.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                                        internship.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                                            'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {internship.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
