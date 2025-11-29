"use client"
import React, { useState } from 'react'
import {Button} from "@/components/ui/button"
interface LeetCodeIncrementButtonInterface{
    type:"easy"| "medium"| "hard",
    current:number;
}
const LeetCodeIncrementButton:React.FC<LeetCodeIncrementButtonInterface> = ({type, current}) => {
    const [currentCount , setCurrentCount] = useState<number>(current);

    const handleIncrement   = ()=>{
        setCurrentCount(prev => prev+1);


        try {
            setTimeout(async() => {
                await fetch("/api/v1/leetcode/inc",{
                    method:"POST",
                    headers:{
                        "Content-Type":"applicaton/json"
                    },
                    body:JSON.stringify({type})
                })
            }, 500);    
        } catch (error) {
            console.log((error as Error).message)

        }
    }
  return (
    <Button onClick={handleIncrement}>({currentCount}){type}</Button>
  )
}

export default LeetCodeIncrementButton