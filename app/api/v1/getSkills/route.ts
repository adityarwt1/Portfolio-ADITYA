import { mongoconnect } from "@/lib/mongodb";
import {  NextResponse } from "next/server";

export async function GET(){
    try {
        const isConnected = await mongoconnect()

        if(!isConnected){
            return NextResponse.json({error:"Internal server issue"}, {status:500})
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"Internal server issue."},{status:500})
    }
}

