import { mongoconnect } from "@/lib/mongodb";
import LeetCode from "@/models/Leetcode";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const {easy , medium, hard} = await req.json()

        if(!easy || !medium ||!hard ){
            return NextResponse.json({error:"Filed are required."},{status:400})
        }

        const isConnected = await mongoconnect()

        if(!isConnected){
            return NextResponse.json({error:"Internal server issue."},{status:500})
        }

        const leetCode = await LeetCode.findOne()

        if(!leetCode){
           const insertedOne=  await LeetCode.insertOne({easy, medium, hard})
           return   NextResponse.json({leetCode:insertedOne , success:true} ,{status:200})

        }
        else{
   const updatedDoc  =  await LeetCode.findOneAndUpdate(
       { _id: leetCode._id },
       { $set: { easy, medium, hard } },
       {new:true}
    );
    return NextResponse.json({leetCode:updatedDoc , success:true},{status:201})
        }
        return NextResponse.json({ success: true  , leetCode}, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Internal server issue." }, { status: 500 })
    }
}