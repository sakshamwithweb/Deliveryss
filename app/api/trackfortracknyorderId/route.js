import { connectionStr } from "@/utils/db";
import { Tracks } from "@/utils/model/deliveryInfo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request){
    await mongoose.connect(connectionStr)
    const payload = await request.json()
    let data= await Tracks.findOne({order_Id:payload.orderId})
    return NextResponse.json({data})
}