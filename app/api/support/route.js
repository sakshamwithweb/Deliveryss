import { connectionStr } from "@/utils/db";
import { Query } from "@/utils/model/query";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    let query = new Query(payload);
    const result = await query.save();
    return NextResponse.json({ result, success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
