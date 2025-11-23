"use client"
import { useLeetCode } from '@/contexts/LeetCodeInfo'
import React from 'react'

interface LeetcodePorps{
  easy:number
  medium:number
  hard:number
}
const Leetcode:React.FC <LeetcodePorps> = ({easy, medium, hard}) => {
  return (
    
      <div className="border h-fit w-fit py-1 px-3 rounded-full bg-[#e0e0e0]/95 text-black font-mono no-word-wrap text-nowrap">
        LeetCode: Easy:{easy}, Medium:{medium} Hard:{hard}
      </div>
    
  )
}

export default Leetcode
