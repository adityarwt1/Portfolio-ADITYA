import Image from "next/image";
import React from "react";

const BannerLogo = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="relative w-full">
        {/* Banner */}
        <Image
          src="/images/tripxbanner.jpg"
          width={400}
          height={200}
          alt="Banner"
          className="w-full h-auto object-cover"
        />

        {/* Left-aligned Perfect Round DP */}
        <Image
          src="/images/profilephoto.jpg"
          width={80}
          height={80}
          alt="Profile Photo"
          className="
            absolute
            left-5
            -bottom-10
            w-20
            h-20
            rounded-full
            object-cover
            border-4
            border-white
            shadow-lg
          "
        />
      </div>

      <div className="h-12"></div>
      <div>adsfasdfasdf</div>
    </div>
  );
};

export default BannerLogo;
