import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import { saveFile } from "@/lib/upload";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "STUDENT") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const formData = await req.formData();
        const photo = formData.get("profilePhoto") as File | null;
        const resume = formData.get("resume") as File | null;

        const data: any = {};

        if (photo) {
            const photoUrl = await saveFile(photo, "photos");
            if (photoUrl) data.profilePhoto = photoUrl;
        }

        if (resume) {
            const resumeUrl = await saveFile(resume, "resumes");
            if (resumeUrl) data.resumeUrl = resumeUrl;
        }

        if (Object.keys(data).length > 0) {
            await db.student.update({
                where: { userId: session.user.id },
                data,
            });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Error updating profile:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
