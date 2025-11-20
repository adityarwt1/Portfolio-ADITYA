import { mongoconnect } from "@/lib/mongodb";
import Visitor from "@/models/Visitors";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {

    try {
        const {state, country} = await req.json()

        if(!state || !country){
            return NextResponse.json({error:"Field not provided."},{status:400})
        }

        const isconnected = await mongoconnect()

        if(!isconnected){
            return NextResponse.json({error:"Internal server issue."},{status:500})
        }

        await Visitor.insertOne({state, country})
        return NextResponse.json({success:true},{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"Internal server issue."},{status:500})
    }
    
}