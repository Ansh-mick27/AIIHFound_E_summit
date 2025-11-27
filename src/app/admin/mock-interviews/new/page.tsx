"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface MockInterviewFormData {
    title: string;
    date: string;
}

export default function NewMockInterviewPage() {
    const router = useRouter();
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<MockInterviewFormData>();

    const onSubmit = async (data: MockInterviewFormData) => {
        try {
            const res = await fetch("/api/admin/mock-interviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                router.push("/admin/mock-interviews");
                router.refresh();
            } else {
                setError("Failed to schedule interview");
            }
        } catch (err) {
            setError("An error occurred");
        }
    };

    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-6 text-2xl font-bold text-gray-800">Schedule Mock Interview</h1>

            {error && (
                <div className="mb-4 rounded bg-red-100 p-3 text-red-700">{error}</div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-lg bg-white p-6 shadow">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        {...register("title", { required: "Title is required" })}
                        className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    />
                    {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                        type="datetime-local"
                        {...register("date", { required: "Date is required" })}
                        className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    />
                    {errors.date && <p className="text-sm text-red-600">{errors.date.message}</p>}
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        Schedule
                    </button>
                </div>
            </form>
        </div>
    );
}
