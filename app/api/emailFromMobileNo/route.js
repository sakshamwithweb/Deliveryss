import { connectionStr } from "@/utils/db";
import { Tracks } from "@/utils/model/deliveryInfo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    const { mobileNo } = payload;
    const parsedPhoneNo = parseInt(mobileNo);
    let tracks = await Tracks.findOne({ phoneNo: parsedPhoneNo })
    if (tracks) {
      return NextResponse.json({ success: true, email: tracks.email });
    } else {
      console.log("No track found for the provided phone number");
      return NextResponse.json({
        success: false,
        message: "No track found for the provided phone number",
      });
    }
  } catch (error) {
    console.error("An error occurred while processing the request:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while processing the request",
    });
  }
}
