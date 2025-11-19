"use client"
import React, { useState } from "react";
import CryptoJs from 'crypto-js'
import { useRouter } from "next/navigation";

const LogiPage:React.FC = ()=>{
    // state declaration
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string | undefined>()
    const [error, setError] = useState<string>("adfasdf")
    const [loading, setLoading] = useState<boolean>(false)
    const [isHid, setIsHide]  = useState<boolean>(true)
    const router = useRouter()

    //handle submit button
    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault()

        if(!password || !email || typeof(password) == "undefined"){
            setError("Email or password must be required.")
        }
        try {
            const encryptedPassword =  CryptoJs.AES.encrypt(password as string, process.env.CRYPTO_SECRET as string)
            const response = await fetch("/api/v1/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email, password: encryptedPassword})
            })
            const data = await response.json()

            if(data.success){
                router.replace('/admin')
            }
            else if(data.error){
                setError(data.error)
            }
        } catch (error) {
            setError((error as Error).message)
        }
    }

    // handle hide and show password
    const handleHidePassword = ()=>{
        try {
            setIsHide(!isHid)
        } catch  {
            setError("Failed to show or hide password.")
        }
    }
    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className="p-10 border flex flex-col ">
                <div>ADMIN LOGIN</div>
                <form onSubmit={handleSubmit} className="flex  flex-col">
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="border"/>
                    <input type={isHid ? "password" :"text"} onChange={(e) => setPassword(e.target.value)} className="border"/>
                    <button type="submit">Submit</button>
                </form>
                {error ? (
                    <div>{error}</div>
                ):""}
            </div>
        </div>
    )
}
export default LogiPage