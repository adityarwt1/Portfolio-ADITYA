import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProfileCard from "./ProfileCard";

const MainContent = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-center justify-between h-fixed">
      {/* Left Section - Text Content */}
      <div className="flex-1 flex flex-col gap-3 md:gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-[#e0e0e0] leading-tight">
            Aditya Rawat
          </h1>
          <div className="h-1 w-16 bg-linear-to-r from-zinc-500 to-[#e0e0e0] mt-2 rounded"></div>
        </div>
        
        <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#e0e0e0]/80">
          Full-stack developer with 3+ years of experience building scalable web
          applications. Specialized in Node.js backend development and Java
          enterprise solutions, with proven expertise in designing RESTful APIs
          and microservices architecture. Joined a production startup at 17,
          handling everything from system design to deployment. Passionate about
          writing clean, maintainable code and solving complex technical
          challenges.
        </p>
        
        <div className="flex gap-3 mt-2">
          <Button 
            asChild 
            className="bg-zinc-600 hover:bg-zinc-700 text-white border border-[#e0e0e0] text-sm md:text-base py-2 px-4 h-auto rounded-lg"
          >
            <Link href="/experience">Experience</Link>
          </Button>
          <Button 
            asChild
            className="bg-zinc-600 hover:bg-zinc-700 text-white border border-[#e0e0e0] text-sm md:text-base py-2 px-4 h-auto rounded-lg"
          >
            <Link href="/projects">Projects</Link>
          </Button>
        </div>
      </div>

      {/* Right Section - Profile Card */}
      {/* <div className="flex-shrink-0">
        <ProfileCard />
      </div> */}
    </div>
  );
};

export default MainContent;