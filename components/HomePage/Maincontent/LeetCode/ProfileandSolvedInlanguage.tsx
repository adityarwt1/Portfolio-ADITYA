"use client";
import React from "react";
import UserNameRankAvatar from "./Profile/UserNameRankAvatar";
import LanguageAndSolved from "./Profile/LanguageAndSolved";

const ProfileandSolvedInlanguage = () => {
  return (
    <div className="bg-[#282828] h-full p-4 rounded-lg flex flex-col gap-4">
      <UserNameRankAvatar />
      <LanguageAndSolved />
    </div>
  );
};

export default ProfileandSolvedInlanguage;
