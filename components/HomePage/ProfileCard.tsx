"use client"
import { ProfileInterface } from "@/interface/profileCard";
import React, { useState } from "react";

const ProfileCard = () => {
  const [data] = useState<ProfileInterface>({
    profileImage: "/images/profilephoto.jpg",
    detail:
      "Full-stack developer with 3+ years of experience building scalable web applications. Specialized in Node.js backend development and Java enterprise solutions.",
    skills: [],
  });

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Detail Text */}
      <p className="text-center max-w-md text-[#e0e0e0]/80 text-sm md:text-base leading-relaxed font-light">
        {data.detail}
      </p>
    </div>
  );
};

export default ProfileCard;