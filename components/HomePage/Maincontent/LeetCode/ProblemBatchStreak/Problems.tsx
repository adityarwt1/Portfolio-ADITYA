"use client"
import { useLeetCode } from '@/contexts/LeetCodeInfo';
import React from 'react'

const Problems = () => {
    const leet = useLeetCode()
   
  return (
    <div className="bg-[#282828] p-1 rounded-lg flex flex-col gap-2">
      {/* easydiv */}
      <div className="flex flex-row justify-center items-center bg-[#353535] p-2 rounded-lg gap-0.5">
        <div className="text-[#1cbaba]">Easy</div>
        <div>{leet.easy}/913</div>
      </div>
      {/* mediupdiv */}
      <div className="flex flex-row justify-center items-center bg-[#353535] p-2 rounded-lg gap-0.5">
        <div className="text-[#ffb700]">Med.</div>
        <div>{leet.medium}/1951</div>
      </div>
      {/* harddiv */}
      <div className="flex flex-row justify-center items-center bg-[#353535] p-2 rounded-lg gap-0.5">
        <div className="text-[#f63737]">Hard</div>
        <div>{leet.hard}/885</div>
      </div>
    </div>
  );
}

export default Problems
