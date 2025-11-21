import React from 'react'

interface LeetProblems {
    easy:number
    medium:number
    hard:number
}
const Leetcode:React.FC<LeetProblems>  = ({easy, medium, hard}) => {
  return (
    
      <div className="border w-fit py-1 px-3 rounded-full bg-[#e0e0e0]/95 text-black font-mono">
        LeetCode: Easy:{easy}, Medium:{medium} Hard:{hard}
      </div>
    
  )
}

export default Leetcode
