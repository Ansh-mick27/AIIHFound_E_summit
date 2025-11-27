"use client";

import { useState, useEffect } from "react";

interface Event {
    id: string;
    companyName: string;
    title: string;
    description: string;
    date: string;
    location: string;
    hasApplied: boolean;
    applicationStatus?: string;
}

export default function StudentEventsPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("/api/student/events")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
                setIsLoading(false);
            });
    }, []);

    const handleApply = async (eventId: string) => {
        try {
            const res = await fetch(`/api/student/events/${eventId}/apply`, {
                method: "POST",
            });

            if (res.ok) {
                alert("Applied successfully!");
                // Update local state
                setEvents(events.map(e =>
                    e.id === eventId ? { ...e, hasApplied: true, applicationStatus: "APPLIED" } : e
                ));
            } else {
                alert("Failed to apply.");
            }
        } catch (error) {
            alert("An error occurred.");
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Upcoming Drives</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <div key={event.id} className="flex flex-col rounded-lg bg-white p-6 shadow">
                        <h2 className="text-lg font-bold text-gray-900">{event.companyName}</h2>
                        <h3 className="text-md font-medium text-gray-700">{event.title}</h3>
                        <p className="mt-2 flex-grow text-sm text-gray-500">{event.description}</p>

                        <div className="mt-4 space-y-2 text-sm text-gray-600">
                            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                            <p><strong>Location:</strong> {event.location || "TBD"}</p>
                        </div>

                        <div className="mt-6">
                            {event.hasApplied ? (
                                <button
                                    disabled
                                    className="w-full rounded-md bg-green-100 px-4 py-2 text-green-800"
                                >
                                    {event.applicationStatus || "Applied"}
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleApply(event.id)}
                                    className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                >
                                    Apply Now
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
