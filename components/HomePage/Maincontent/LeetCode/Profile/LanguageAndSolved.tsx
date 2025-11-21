"use client"
import { useLeetCode } from '@/contexts/LeetCodeInfo';
import React from 'react'

const LanguageAndSolved = () => {
  const leetcode = useLeetCode()
  return (
    <div className="flex flex-col gap-2 font-sans">
      <div>Language:</div>
      <div className="flex  items-center justify-between">
        <div className="p-1 bg-[#3E3E3E] rounded-full ">{leetcode.language1}</div>
        <div>{leetcode.count1} solved</div>
      </div>
      <div className="flex  items-center justify-between">
        <div className="p-1 bg-[#3E3E3E] rounded-full ">{leetcode.language2}</div>
        <div>{leetcode.count2} solved</div>
      </div>
      <div className="flex  items-center justify-between">
        <div className="p-1 bg-[#3E3E3E] rounded-full ">{leetcode.language3}</div>
        <div>{leetcode.count3} solved</div>
      </div>
    </div>
  );
}

export default LanguageAndSolved
