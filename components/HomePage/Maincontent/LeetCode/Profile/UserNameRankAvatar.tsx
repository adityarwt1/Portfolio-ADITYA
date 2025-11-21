"use client";
import { useLeetCode } from "@/contexts/LeetCodeInfo";
import Image from "next/image";
import React from "react";

const UserNameRankAvatar = () => {
  const leetcode = useLeetCode();

  return (
    <div className="flex gap-3 w-full">
      <Image
        src="/images/leetcode.jpg"
        alt="LeetCode Logo"
        width={80}
        height={80}
        className="rounded-lg"
      />

      <div className="flex flex-col w-full">
        <div>
          <div className="font-semibold text-lg">aditya_rwt1</div>
          <div className="text-gray-400 text-[12px]">pb5yPFBgiu</div>
        </div>

        <div className="text-gray-400 text-sm flex gap-1">
          Rank:
          <span className="text-white">{leetcode.rank.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default UserNameRankAvatar;
