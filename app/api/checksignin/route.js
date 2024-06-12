import { connectionStr } from "@/utils/db";
import { User } from "@/utils/model/signin";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json();
  await mongoose.connect(connectionStr);
  const { email} = payload;
  let exist = await User.findOne({ email });
  if (exist == null || !exist || exist == undefined) {
    return NextResponse.json({ exist: false });
  } else {
    return NextResponse.json({ exist: true });
  }
}