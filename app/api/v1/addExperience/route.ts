import { mongoconnect } from "@/lib/mongodb";
import Experience from "@/models/Experience";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {

    try {
        const { joinedDate, companyName, description, achives, techAchives,techStack } = await req.json()

        if(!joinedDate || !companyName || !description || !achives || !techAchives || !techStack){
            return NextResponse.json({error:"Fields nor provided."},{status:400})
        }

        const isConnected  = await mongoconnect()

        if(!isConnected){
            return NextResponse.json({error:"Internal server issue."},{status:500})
        }

        const experience = await Experience.create({joinedDate, companyName, achives , description , techStack , techAchives  })
        return NextResponse.json({success:true , experience} ,{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"Internal server issue."},{status:500})
    }
    
}