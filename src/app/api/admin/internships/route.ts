import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const history = searchParams.get("history");

    let whereClause = {};
    if (status) {
        whereClause = { status };
    } else if (history === "true") {
        whereClause = {
            status: {
                in: ["APPROVED", "REJECTED"],
            },
        };
    }

    const internships = await db.internship.findMany({
        where: whereClause,
        include: {
            student: {
                select: {
                    name: true,
                    rollNo: true,
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(internships);
}
