"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cafSchema, CafFormData } from "@/lib/validations/caf";
import { useRouter } from "next/navigation";

export default function CafPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isLocked, setIsLocked] = useState(false);
    const [message, setMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CafFormData>({
        resolver: zodResolver(cafSchema),
    });

    useEffect(() => {
        // Fetch current student data
        fetch("/api/student/caf")
            .then((res) => res.json())
            .then((data) => {
                if (data.student) {
                    reset(data.student);
                    setIsLocked(data.student.isCafLocked);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch CAF data", err);
                setIsLoading(false);
            });
    }, [reset]);

    const onSubmit = async (data: CafFormData) => {
        setMessage("");
        try {
            const res = await fetch("/api/student/caf", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setMessage("CAF submitted successfully!");
                const updatedData = await res.json();
                setIsLocked(updatedData.isCafLocked);
                router.refresh();
            } else {
                setMessage("Failed to submit CAF.");
            }
        } catch (error) {
            setMessage("An error occurred.");
        }
    };

    if (isLoading) return <div className="p-8">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow">
                <h1 className="mb-6 text-2xl font-bold text-gray-800">Campus Application Form (CAF)</h1>

                {message && (
                    <div className={`mb-4 rounded p-3 ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {message}
                    </div>
                )}

                {isLocked && (
                    <div className="mb-6 rounded bg-yellow-50 p-4 text-yellow-800 border-l-4 border-yellow-400">
                        <strong>Note:</strong> Your CAF is locked. You can only edit Current CGPA and Backlogs.
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Personal Details */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                {...register("name")}
                                disabled={isLocked}
                                className="mt-1 block w-full rounded-md border border-gray-300 p-2 disabled:bg-gray-100"
                            />
                            {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Roll No</label>
                            <input
                                {...register("rollNo")}
                                disabled={isLocked}
                                className="mt-1 block w-full rounded-md border border-gray-300 p-2 disabled:bg-gray-100"
                            />
                            {errors.rollNo && <p className="text-sm text-red-600">{errors.rollNo.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                {...register("phone")}
                                disabled={isLocked}
                                className="mt-1 block w-full rounded-md border border-gray-300 p-2 disabled:bg-gray-100"
                            />
                            {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
                        </div>

                        {/* Academic Details */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">10th Marks (%)</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register("tenthMarks")}
                                disabled={isLocked}
                                className="mt-1 block w-full rounded-md border border-gray-300 p-2 disabled:bg-gray-100"
                            />
                            {errors.tenthMarks && <p className="text-sm text-red-600">{errors.tenthMarks.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">12th Marks (%)</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register("twelfthMarks")}
                                disabled={isLocked}
                                className="mt-1 block w-full rounded-md border border-gray-300 p-2 disabled:bg-gray-100"
                            />
                            {errors.twelfthMarks && <p className="text-sm text-red-600">{errors.twelfthMarks.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Diploma Marks (%)</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register("diplomaMarks")}
                                disabled={isLocked}
                                className="mt-1 block w-full rounded-md border border-gray-300 p-2 disabled:bg-gray-100"
                            />
                            {errors.diplomaMarks && <p className="text-sm text-red-600">{errors.diplomaMarks.message}</p>}
                        </div>

                        {/* Editable Fields even when locked */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Current CGPA</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register("currentCGPA")}
                                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                            />
                            {errors.currentCGPA && <p className="text-sm text-red-600">{errors.currentCGPA.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Backlogs</label>
                            <input
                                type="number"
                                {...register("backlogs")}
                                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                            />
                            {errors.backlogs && <p className="text-sm text-red-600">{errors.backlogs.message}</p>}
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            {isLocked ? "Update CGPA/Backlogs" : "Save & Lock CAF"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
