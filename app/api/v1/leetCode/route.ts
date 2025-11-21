import { mongoconnect } from "@/lib/mongodb";
import LeetCode from "@/models/Leetcode";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoconnect()
        const leetcode = await LeetCode.findOne().select("easy  medium hard")
        return NextResponse.json({ success: true, leetcode }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Internal server issue." }, { status: 500 })
    }
}