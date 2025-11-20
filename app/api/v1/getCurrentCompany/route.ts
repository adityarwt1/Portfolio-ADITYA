import { mongoconnect } from "@/lib/mongodb";
import Interview from "@/models/Interviews";
import {  NextResponse } from "next/server";

export async function GET( ) {
    try {
        
        const isconnected = await mongoconnect()

        if(!isconnected){
            return NextResponse.json({error:"Internal server issue."},{status:500})
        }

        const company = await Interview.findOne({active:true}).select("companyName joinedDate")
        return NextResponse.json({ success: true , company }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Internal server issue." }, { status: 500 })
    }
}