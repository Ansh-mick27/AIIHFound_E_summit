"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema, EventFormData } from "@/lib/validations/event";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewEventPage() {
    const router = useRouter();
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EventFormData>({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            status: "OPEN",
        },
    });

    const onSubmit = async (data: EventFormData) => {
        try {
            const res = await fetch("/api/admin/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                router.push("/admin/events");
                router.refresh();
            } else {
                setError("Failed to create event");
            }
        } catch (err) {
            setError("An error occurred");
        }
    };

    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-6 text-2xl font-bold text-gray-800">Create New Drive</h1>

            {error && (
                <div className="mb-4 rounded bg-red-100 p-3 text-red-700">{error}</div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-lg bg-white p-6 shadow">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input
                        {...register("companyName")}
                        className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    />
                    {errors.companyName && <p className="text-sm text-red-600">{errors.companyName.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                        {...register("title")}
                        className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    />
                    {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        {...register("description")}
                        rows={4}
                        className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    />
                    {errors.description && <p className="text-sm text-red-600">{errors.description.message}</p>}
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="datetime-local"
                            {...register("date")}
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                        />
                        {errors.date && <p className="text-sm text-red-600">{errors.date.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            {...register("location")}
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                        />
                        {errors.location && <p className="text-sm text-red-600">{errors.location.message}</p>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        {...register("status")}
                        className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    >
                        <option value="OPEN">Open</option>
                        <option value="CLOSED">Closed</option>
                    </select>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        Create Event
                    </button>
                </div>
            </form>
        </div>
    );
}
