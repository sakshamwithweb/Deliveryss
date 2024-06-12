import { connectionStr } from "@/utils/db";
import { User } from "@/utils/model/signin";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  const { email, password, country, name, states } = payload;
  const user = new User({
    email,
    password,
    country,
    name,
    state:states,
    data: Date.now,
    image: "https://i.ibb.co/gV5mzLz/user2.png",
  });
  const result = user.save();
  return NextResponse.json({ success: true, exist: false });
}
