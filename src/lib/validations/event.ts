import { z } from "zod";

export const eventSchema = z.object({
    title: z.string().min(2, "Title is required"),
    companyName: z.string().min(2, "Company Name is required"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date",
    }),
    location: z.string().optional(),
    status: z.enum(["OPEN", "CLOSED"]).default("OPEN"),
});

export type EventFormData = z.infer<typeof eventSchema>;
