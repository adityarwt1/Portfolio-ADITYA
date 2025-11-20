import { mongoconnect } from "@/lib/mongodb";
import Visitor from "@/models/Visitors";
import {  NextResponse } from "next/server";

export async function GET()   {

    try {
        const isconnected = await mongoconnect()

        if(!isconnected){
            return NextResponse.json({error:"Internal server issue"},{status:500})
        }

        const visitors  = await Visitor.countDocuments()


        return NextResponse.json({visitors})

    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"Internal server issue."},{status:500})
    }
    
}