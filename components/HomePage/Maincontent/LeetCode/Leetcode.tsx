import React from "react";
import ProfileandSolvedInlanguage from "./ProfileandSolvedInlanguage";

const LeetCode = ()=>{
    return (
        <div className="flex gap-2 w-full ">
            <ProfileandSolvedInlanguage/>

                <div className="flex flex-col">
                    <div className="flex ">
                            <div>
                                problem name
                            </div>
                            <div>
                                batch name
                            </div>
                    </div>

                    <div>
                        streak
                    </div>
                </div>
        </div>
    )
}

export default LeetCode;