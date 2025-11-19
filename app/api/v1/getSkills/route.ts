import {  NextResponse } from "next/server";

export async function GET(){
    try {
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"Internal server issue."},{status:500})
    }
}

