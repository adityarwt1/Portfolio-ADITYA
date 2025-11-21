import Link from "next/link";
import React from "react";

const LeftSection = ()=>{
    return (
      <div className="w-full flex flex-col justify-center items-center p-10 gap-3">
        <div className="w-full text-2xl font-bold">ADITYA RAWAT</div>
        <div>
          I&apos;m a true tech enthusiast who began coding back in class 9. I&apos;ve
          always been fascinated by how real products work behind the scenes. At
          17, I even built and cracked my first startup. Today, I&apos;m focused on
          sharpening my skills further and building production-ready solutions
          with a strong passion for learning and improving every day.
        </div>
        <div className="w-full flex  gap-2">
          <Link
            href="/experience"
            className="p-2 border rounded-full shadow-2xs shadow-white bg-[#e0e0e0] text-black hover:bg-black hover:text-white duration-300  transition-all"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="p-2 border rounded-full shadow-2xs shadow-white bg-[#e0e0e0] text-black hover:bg-black hover:text-white duration-300  transition-all"
          >
            Projects
          </Link>
        </div>
      </div>
    );
}

export default LeftSection