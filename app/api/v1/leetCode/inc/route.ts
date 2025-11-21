import { mongoconnect } from "@/lib/mongodb";
import LeetCode from "@/models/Leetcode";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
  try {
    const isConnected = await mongoconnect();
    if (!isConnected) {
      return NextResponse.json(
        { error: "Internal server issue." },
        { status: 500 }
      );
    }

    // Step 1: Read body
    const { type, action } = await req.json();

    // Step 2: Validate field type
    const allowedTypes = ["easy", "medium", "hard"];
    if (!allowedTypes.includes(type)) {
      return NextResponse.json(
        { error: "Invalid type", success: false },
        { status: 400 }
      );
    }

    // Step 3: Validate action
    const allowedActions = ["inc", "dec"];
    if (!allowedActions.includes(action)) {
      return NextResponse.json(
        { error: "Invalid action", success: false },
        { status: 400 }
      );
    }

    // Step 4: Get document
    const leetCode = await LeetCode.findOne();
    if (!leetCode) {
      return NextResponse.json(
        { error: "Not found", success: false },
        { status: 404 }
      );
    }

    // Step 5: Build increment value
    const value = action === "inc" ? 1 : -1;

    // Step 6: Perform increment or decrement
    await LeetCode.findOneAndUpdate(
      { _id: leetCode._id },
      { $inc: { [type]: value } },
      { new: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server issue." },
      { status: 500 }
    );
  }
}
