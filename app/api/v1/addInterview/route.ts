import { mongoconnect } from "@/lib/mongodb";
import Interview from "@/models/Interviews";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {

    try {
        const {companyName, round, askedDsa , screeningRound} = await req.json()
        if(!companyName || typeof askedDsa !== "boolean" || typeof screeningRound !== "boolean" || !round){
            return NextResponse.json({error:"Company name must be provided."},{status:400})
        }

         
        const isconnected = await mongoconnect()

        if(!isconnected){
            return NextResponse.json({error:"Internal server issue."},{status:500})
        }

        await Interview.insertOne({companyName, round, askedDsa, screeningRound})
        return NextResponse.json({message:"Interview added." , success:true},{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"Internal server isssue."},{status:500})
    }
    
}