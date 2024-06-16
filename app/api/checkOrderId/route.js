import { connectionStr } from "@/utils/db";
import { Tracks } from "@/utils/model/deliveryInfo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    await mongoose.connect(connectionStr);
    const { orderId } = data;
    let exist = await Tracks.findOne({ order_Id: orderId });
    if (exist == null || !exist || exist == undefined) {
      return NextResponse.json({ success: false });
    } else {
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
