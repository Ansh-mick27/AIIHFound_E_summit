import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { status, rejectionReason } = body;

    const internship = await db.internship.update({
        where: { id: params.id },
        data: {
            status,
            rejectionReason: status === "REJECTED" ? rejectionReason : null,
        },
    });

    return NextResponse.json(internship);
}
