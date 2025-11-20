import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
export async function  POST(req:NextRequest) {

    try {
        const {email, password} = await req.json()

        if(!email || !password){
            return NextResponse.json({error:"email or password must be required."},{status:400})
        }
        const admingEmail = "adityarawatnew2487@gmail.com";
        const hashedPassword =
          "$2b$10$7/wv7CLM60TikzXkbudBVOgn53NiR0kin3cUZkmHx3qdr3/k.yczG";

        if(email !== admingEmail){
            return NextResponse.json({error:"You are not an admin."},{status:400})
        }

        const isPassswordTrue = await bcrypt.compare(password , hashedPassword)

        if(!isPassswordTrue){
            return NextResponse.json({error:"Wrong password."},{status:400})
        }
        
        const tokenPayLoad = {
            role: "admin"
        }
        const token = jwt.sign(tokenPayLoad , process.env.JWT_SECRET as string,{
            expiresIn: 30 *  60 * 60  * 1000,
        });

        (await cookies()).set("portfoliotoken" , token)
        return NextResponse.json({success:true},{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"Internal server issue."},{status:500})
    }
    
}