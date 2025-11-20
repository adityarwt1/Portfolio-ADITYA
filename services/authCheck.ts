"use server"
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export const checkAdmin = async ():Promise<{role:"user"| "admin" , isAdmin:boolean}>=>{
    try {
        
        const token = (await cookies()).get("portfoliotoken")?.value;
        if(!token){
            return {
                role:"user",
                isAdmin:false
            }
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET as string) 
        if(!decode ){
            return {
                role:"user",
                isAdmin:false
            }
        }
        return {role:"admin" , isAdmin:true}
    } catch (error) {
        console.log(error)
        return {
            role:"user",
            isAdmin:false
        }
    }
}