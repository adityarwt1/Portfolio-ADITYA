import { mongoconnect } from "@/lib/mongodb";
import Certificate from "@/models/Certifiate";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        const {title,description, completionDate, skills, link , imageLink }  = await req.json()

        if(!title || !description || !completionDate || !skills || !link || !imageLink){
            return NextResponse.json({error:"Fields are not provided."},{status:400})
        }
        const isConnected = await mongoconnect()

        if(!isConnected){
            return NextResponse.json({error:"Failed to connect database."},{status:500})
        }

        await Certificate.insertOne({title, description, completionDate, skills, link, imageLink})
        return NextResponse.json({success:true} , {status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"Internal server issue."},{status:500})
    }
}