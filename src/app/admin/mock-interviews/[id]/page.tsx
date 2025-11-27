"use client";

import { useState, useEffect } from "react";
import * as XLSX from "xlsx";

interface Result {
    id: string;
    score: number;
    grade: string;
    feedback: string;
    studentRollNo: string;
}

interface InterviewDetails {
    id: string;
    title: string;
    date: string;
    results: Result[];
}

export default function InterviewDetailsPage({ params }: { params: { id: string } }) {
    const [interview, setInterview] = useState<InterviewDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetch(`/api/admin/mock-interviews/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setInterview(data);
                setIsLoading(false);
            });
    }, [params.id]);

    const handleExport = () => {
        if (!interview) return;

        const data = interview.results.map((res) => ({
            "Roll No": res.studentRollNo,
            "Score": res.score,
            "Grade": res.grade,
            "Feedback": res.feedback,
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Results");
        XLSX.writeFile(wb, `${interview.title}_Results.xlsx`);
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
                const res = await fetch(`/api/admin/mock-interviews/${params.id}/results`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ data }),
                });

                if (res.ok) {
                    alert("Results uploaded successfully!");
                    window.location.reload();
                } else {
                    alert("Failed to upload results.");
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
    if (!interview) return <div>Interview not found</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{interview.title}</h1>
                    <p className="text-gray-500">{new Date(interview.date).toLocaleDateString()}</p>
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={handleExport}
                        className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                    >
                        Export Results
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
                            {uploading ? "Uploading..." : "Upload Results"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Roll No</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Score</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Grade</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Feedback</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {interview.results.map((res) => (
                            <tr key={res.id}>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{res.studentRollNo}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{res.score}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{res.grade}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{res.feedback}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
