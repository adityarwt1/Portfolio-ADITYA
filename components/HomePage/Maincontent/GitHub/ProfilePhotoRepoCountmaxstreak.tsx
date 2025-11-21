import Image from "next/image";
import React from "react";

const ProfilePhotoRepoCountmaxstreak = () => {
  return (
    <div className="flex items-center justify-between bg-[#0D1117] border border-white/15 p-3 rounded-md font-mono">
      {/* Profile Image */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/leetcode.jpg"
          width={40}
          height={40}
          alt="Leetcode image"
          className="rounded-full object-cover"
        />
      </div>

      {/* Stats */}
      <div className="flex items-center gap-6 text-white/90 text-sm">
        <div>
          Repos: <span className="text-white font-semibold">117</span>
        </div>
        <div>
          Stars: <span className="text-white font-semibold">32</span>
        </div>
        <div>
          Max Streak: <span className="text-green-400 font-bold">210+</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoRepoCountmaxstreak;
