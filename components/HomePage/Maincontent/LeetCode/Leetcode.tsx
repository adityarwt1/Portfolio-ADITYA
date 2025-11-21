import React from "react";
import ProfileandSolvedInlanguage from "./ProfileandSolvedInlanguage";
import ProblemBatchStreak from "./ProblemBatchStreak";
import { LeetCodeInfo } from "@/contexts/LeetCodeInfo";

const LeetCode = ()=>{
    return (
      <LeetCodeInfo>
        <div className="flex gap-2 w-full ">
          <ProfileandSolvedInlanguage />
          <ProblemBatchStreak />
        </div>
      </LeetCodeInfo>
    );
}

export default LeetCode;