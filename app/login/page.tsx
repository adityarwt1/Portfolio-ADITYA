"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LogiPage:React.FC = ()=>{
    // state declaration
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string | undefined>()
    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [isHid, setIsHide]  = useState<boolean>(true)
    const router = useRouter()

    //handle submit button
    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault()
        
        if(!password || !email || typeof(password) == "undefined"){
            setError("Email or password must be required.")
            return
        }
        setLoading(true)
        try {
            const response = await fetch("/api/v1/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email, password})
            })
            const data = await response.json()

            if(data.success){
              router.refresh()
                router.replace('/admin')
            }
            else if(data.error){
                setError(data.error)
            }
        } catch (error) {
            setError((error as Error).message)
        }
        finally{
            setLoading(false)
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
        <div className="p-10 border flex flex-col rounded-lg shadow-white shadow-2xs border-white/15">
          <div className="text-6xl font-bold">ADMIN LOGIN</div>
          <form
            onSubmit={handleSubmit}
            className="flex  flex-col justify-center items-center"
          >
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded-sm shadow-2xs shadow-white px-4 my-2 w-full"
              placeholder="email..."
            />
            <div className="w-full flex h-fit ">
              <input
                type={isHid ? "password" : "text"}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b border-t border-l p-2 sm-full shadow-2xs shadow-white focus:outline-none w-[90%]" 
                placeholder="password..."
              />
              <button type="button"  onClick={handleHidePassword} className="w-[10%] border-t border-b border-r shadow-2xs shadow-white pr-2">{isHid ? "Show" :"Hide"}</button>
            </div>
            <button
              type="submit"
              className="bg-white text-black w-full px-20 py-1 text-xl my-2 hover:opacity-80 cursor-pointer shadow-2xs shadow-white *:"
              disabled={loading}
            >
             {loading ?"Submit...":"Submit"}
            </button>
          </form>
          {error ? <div className="bg-red-500/90 text-shadow-2xs text-shadow-black p-4 rounded-md">{error}</div> : ""}
        </div>
      </div>
    );
}
export default LogiPage