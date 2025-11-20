import { mongoconnect } from "@/lib/mongodb"
import Interview from "@/models/Interviews"
import { NextResponse } from "next/server"

export async function GET() {
    try {
         const isconnected = await mongoconnect()
        
            if(!isconnected){
                return NextResponse.json({error:"Internal server issue."},{status:500})
            }
        
        const interviewes = await Interview.countDocuments()
        return  NextResponse.json({interviewes})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"Internal server issue."},{status:500})
    }
}

