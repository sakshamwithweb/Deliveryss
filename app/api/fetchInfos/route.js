import { connectionStr } from "@/utils/db"
import { User } from "@/utils/model/signin"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST(request){
    mongoose.connect(connectionStr)
    const payload = await request.json()
    let user = await User.findOne({ email: payload.email })

    if (user) {
        // If user is found, return user's name and image
        return NextResponse.json({ name: user.name, pic: user.image })
    } else {
        // If user is not found, return an appropriate response
        return NextResponse.json({ error: "User not found" }, { status: 404 })
    }
}
