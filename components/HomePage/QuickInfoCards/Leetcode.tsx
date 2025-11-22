"use client"
import { useLeetCode } from '@/contexts/LeetCodeInfo'
import React from 'react'


const Leetcode:React.FC  = () => {
  const leetcode  =  useLeetCode()
  return (
    
      <div className="border h-fit w-fit py-1 px-3 rounded-full bg-[#e0e0e0]/95 text-black font-mono no-word-wrap text-nowrap">
        LeetCode: Easy:{leetcode.easy}, Medium:{leetcode.medium} Hard:{leetcode.hard}
      </div>
    
  )
}

export default Leetcode
