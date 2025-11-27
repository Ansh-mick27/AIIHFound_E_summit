import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

export async function saveFile(file: File, folder: "photos" | "resumes"): Promise<string | null> {
    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create unique filename
        const extension = file.name.split(".").pop();
        const filename = `${uuidv4()}.${extension}`;

        // Ensure directory exists
        const uploadDir = join(process.cwd(), "public", "uploads", folder);
        await mkdir(uploadDir, { recursive: true });

        // Save file
        const filepath = join(uploadDir, filename);
        await writeFile(filepath, buffer);

        // Return public URL
        return `/uploads/${folder}/${filename}`;
    } catch (error) {
        console.error("Error saving file:", error);
        return null;
    }
}
