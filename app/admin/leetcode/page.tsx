import LeetCodeIncrementButton from '@/components/Admin/LeetCodeIncrementButton';
import { mongoconnect } from '@/lib/mongodb';
import LeetCode from '@/models/Leetcode';
import React from 'react'

const page = async() => {
    await mongoconnect()
   const leetcode = await LeetCode.findOne({ _id: "69200cdfd04cd5164743ef52" });
  return (
    <div className="flex flex-col gap-5 p-5 font-mono">

      <div className='flex flex-col'>
        <div className='text-2xl font-bold'>LeetCode Question Increament</div>
        <div className='flex gap-2'>
            <LeetCodeIncrementButton current={leetcode.easy} type='easy'/>
            <LeetCodeIncrementButton current={leetcode.medium} type='medium'/>
            <LeetCodeIncrementButton current={leetcode.hard} type='hard'/>
        </div>
      </div>
    </div>
  );
}

export default page