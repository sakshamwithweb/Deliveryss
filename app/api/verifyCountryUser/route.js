import { connectionStr } from "@/utils/db";
import { User } from "@/utils/model/signin";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { country, email } = await request.json();

  await mongoose.connect(connectionStr);

  const user = await User.findOne({ email: email });
  if (user == null || user == undefined) {
    return NextResponse.json({ success: false, message: "User not found" });
  }

  const response = await fetch("http://localhost:3000/api/countryISO2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: user.country }),
  });

  const answer = await response.json();

  if (answer.success) {
    if (country.toUpperCase() === answer.iso2.toUpperCase()) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to get ISO2 code",
        country: country,
        answer: answer.iso2,
      });
    }
  } else {
    return NextResponse.json({
      success: false,
      message: "Failed to get ISO2 code",
      country: { country, answer },
      answer: answer.iso2,
    });
  }
}
