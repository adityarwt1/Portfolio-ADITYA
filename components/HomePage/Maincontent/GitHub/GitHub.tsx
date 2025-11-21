import React from "react";
import ProfilePhotoRepoCountmaxstreak from "./ProfilePhotoRepoCountmaxstreak";
import Image from "next/image";

const GitHub = () => {
  return (
    <div className="flex flex-col w-full gap-4 p-3">
      {/* Stats Header */}
      <ProfilePhotoRepoCountmaxstreak />

      {/* GitHub Streak Image */}
      <div className="w-full flex justify-center">
        <Image
          src="/images/github.png"
          width={900}
          height={600}
          alt="GitHubStreak"
          className="rounded-lg border border-white/10 object-contain"
        />
      </div>
    </div>
  );
};

export default GitHub;
