"use client"
import { useLeetCode } from '@/contexts/LeetCodeInfo';
import Image from 'next/image';
import React from 'react'

const UserNameRankAvatar = () => {
  const leetcode  = useLeetCode()
  return (
    <div className="flex gap-2 w-full flex-nowrap">
      <Image
        src="/images/leetcode.jpg"
        alt="LeetCode Logo"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <div className="w-full flex flex-col">
        <div>
          <div className="font font-sans font-[Arial, Helvetica, sans-serif] ">
            aditya_rwt1
          </div>
          <div className="font font-sans text-gray-400 font-[Arial, Helvetica, sans-serif] text-[10px]">
            pb5yPFBgiu
          </div>
        </div>
        <div className="text-gray-400 flex-nowrap">
          Rank: <div className='text-white'>{leetcode.rank.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

export default UserNameRankAvatar
