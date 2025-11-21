"use client"
import React from 'react'
import UserNameRankAvatar from './Profile/UserNameRankAvatar';
import LanguageAndSolved from './Profile/LanguageAndSolved';

const ProfileandSolvedInlanguage = () => {
  return <div className="bg-[#282828] h-full p-4 rounded-lg gap-2">
    <UserNameRankAvatar/>
    <LanguageAndSolved/>
  </div>;
}

export default ProfileandSolvedInlanguage
