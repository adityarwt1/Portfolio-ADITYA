"use client";
import { useLeetCode } from "@/contexts/LeetCodeInfo";
import React from "react";

const Problems = () => {
  const leet = useLeetCode();

  return (
    <div className="bg-[#282828] p-2 rounded-lg flex flex-col gap-2 w-full">
      <div className="bg-[#353535] p-2 rounded-lg flex justify-between">
        <span className="text-[#1cbaba]">Easy</span>
        <span>{leet.easy}/913</span>
      </div>

      <div className="bg-[#353535] p-2 rounded-lg flex justify-between">
        <span className="text-[#ffb700]">Medium</span>
        <span>{leet.medium}/1951</span>
      </div>

      <div className="bg-[#353535] p-2 rounded-lg flex justify-between">
        <span className="text-[#f63737]">Hard</span>
        <span>{leet.hard}/885</span>
      </div>
    </div>
  );
};

export default Problems;
