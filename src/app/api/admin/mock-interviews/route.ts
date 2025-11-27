import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, date } = body;

    if (!title || !date) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const interview = await db.mockInterview.create({
        data: {
            title,
            date: new Date(date),
        },
    });

    return NextResponse.json(interview);
}
