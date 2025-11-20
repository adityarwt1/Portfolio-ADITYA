import { Role } from "@/interface/Role";
import Link from "next/link";
import React  from "react";

const NavigationElement:React.FC<Role>  = ({role, isAdmin})=>{
    return (
      <div className="flex w-full justify-center">
        <Link href="/" className="mx-2  hover:border-b duration-300 transition-all hover:bg-white/15 p-2    shadow-2xs shadow-white  ">Home</Link>
        <Link href="/experience" className="mx-2  hover:border-b duration-300 transition-all hover:bg-white/15 p-2    shadow-2xs shadow-white  ">Experience</Link>
        <Link href="/components" className="mx-2  hover:border-b duration-300 transition-all hover:bg-white/15  p-2  shadow-2xs shadow-white  ">Components</Link>
        <Link href="/about" className="mx-2  hover:border-b duration-300 transition-all hover:bg-white/15 p-2   shadow-2xs shadow-white  ">About</Link>
        <Link href="/projects" className="mx-2  hover:border-b duration-300 transition-all hover:bg-white/15 p-2   shadow-2xs shadow-white  ">Projects</Link>
        <Link href="/certificate" className="mx-2  hover:border-b duration-300 transition-all hover:bg-white/15 p-2   shadow-2xs shadow-white  ">Certificate</Link>
      </div>
    );
}

export default NavigationElement