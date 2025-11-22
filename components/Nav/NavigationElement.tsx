import { Role } from "@/interface/Role";
import Link from "next/link";
import React from "react";

const NavigationElement: React.FC<Role> = ({ isAdmin }) => {
  return (
    <div className="flex gap-3 font-mono">
      <Link href="/" className="nav-item">
        Home
      </Link>
      <Link href="/experience" className="nav-item">
        Experience
      </Link>
      <Link href="/projects" className="nav-item">
        Projects
      </Link>
      <Link href="/certificate" className="nav-item">
        Certificates
      </Link>
      <Link href="/components" className="nav-item">
        Components
      </Link>
      <Link href="/about" className="nav-item">
        About
      </Link>
      {isAdmin && (
        <Link href="/admin" className="nav-item">
          Admin
        </Link>
      )}
    </div>
  );
};

export default NavigationElement;
