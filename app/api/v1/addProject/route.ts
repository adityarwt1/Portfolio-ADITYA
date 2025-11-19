import { mongoconnect } from "@/lib/mongodb";
import Project from "@/models/Projects";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {

    try {
        const {title, description, skills , thumbNail} = await req.json()

        if(!title || !description || !skills || !thumbNail){
            return   NextResponse.json({error:"fields are must be passed properly!"},{status: 400})
        }

        // checking data base connection 
        const isConnected = await mongoconnect()

        if(!isConnected){
            return NextResponse.json({error:"Failed to connect databse"},{status:500})
        }

        await Project.insertOne({title, description, skills , thumbNail})

        return NextResponse.json({success:true, message:"Skilled added successfull!"},{status:201})
    } catch (error) {
        console.log(error)
        return  NextResponse.json({error:"Internal server issue."},{status:500})
    }
    
}