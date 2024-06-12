
import { connectionStr } from "@/utils/db";
import { Tracks } from "@/utils/model/deliveryInfo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request){
    await mongoose.connect(connectionStr)
    const payload = await request.json()
    let tracks= await Tracks.find({email:payload.email})
    return NextResponse.json({success:true,tracks:tracks})
}