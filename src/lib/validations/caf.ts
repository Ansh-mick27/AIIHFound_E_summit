import { z } from "zod";

export const cafSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    rollNo: z.string().min(1, "Roll No is required"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    tenthMarks: z.coerce.number().min(0).max(100),
    twelfthMarks: z.coerce.number().min(0).max(100),
    diplomaMarks: z.coerce.number().min(0).max(100).optional(),
    currentCGPA: z.coerce.number().min(0).max(10),
    backlogs: z.coerce.number().int().min(0),
});

export type CafFormData = z.infer<typeof cafSchema>;
