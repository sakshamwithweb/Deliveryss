import { connectionStr } from "@/utils/db";
import { User } from "@/utils/model/signin";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await mongoose.connect(connectionStr);
    const data = await request.json();
    const { email, password } = data;

    let existUser = await User.findOne({ email, password });
    if (!existUser) {
      return NextResponse.json({ success: true, foundUser: false });
    } else {
      return NextResponse.json({ success: true, foundUser: true });
    }
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
