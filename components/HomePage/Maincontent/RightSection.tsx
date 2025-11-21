import React from "react";
import LeetCode from "./LeetCode/Leetcode";
import LinkedIn from "./LinkedIn/LinkedIn";
import GitHub from "./GitHub/GitHub";

const RightSection = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3">
      <div className="text-2xl font-bold">Consistency</div>
      <LeetCode />
      <LinkedIn />
      <GitHub />
    </div>
  );
};

export default RightSection;
