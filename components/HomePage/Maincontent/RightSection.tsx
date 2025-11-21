import React from "react";
import LeetCode from "./LeetCode/Leetcode";
import LinkedIn from "./LinkedIn/LinkedIn";
import GitHub from "./GitHub/GitHub";

const RightSection = ()=>{

    return (
        <div className="w-full flex justify-center items-center h-full flex-col">
            <div className="text-2xl font-bold">Concitency</div>
            <LeetCode/>
            <LinkedIn/>
            <GitHub/>
        </div>
    )
}

export default RightSection