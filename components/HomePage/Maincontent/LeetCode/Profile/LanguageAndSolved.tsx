"use client";
import { useLeetCode } from "@/contexts/LeetCodeInfo";
import React from "react";

const LanguageAndSolved = () => {
  const leetcode = useLeetCode();

  return (
    <div className="flex flex-col gap-2 text-sm">
      <div className="text-gray-300">Languages:</div>

    
        <div  className="flex justify-between items-center">
          <div className="px-2 py-1 bg-[#3E3E3E] rounded-full">
            {leetcode.language1 }
          </div>
          <div>{leetcode.count1} solved</div>
        </div>
        <div  className="flex justify-between items-center">
          <div className="px-2 py-1 bg-[#3E3E3E] rounded-full">
            {leetcode.language2 }
          </div>
          <div>{leetcode.count2} solved</div>
        </div>
        <div  className="flex justify-between items-center">
          <div className="px-2 py-1 bg-[#3E3E3E] rounded-full">
            {leetcode.language3 }
          </div>
          <div>{leetcode.count3} solved</div>
        </div>
  

    </div>
  );
};

export default LanguageAndSolved;
