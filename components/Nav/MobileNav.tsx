"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Role } from "@/interface/Role";
import { Menu, X } from "lucide-react";

const MobileNav: React.FC<Role> = ({ isAdmin }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black/90 p-5 flex flex-col gap-4 text-center font-mono border-b border-white/20">
          <Link href="/" onClick={() => setOpen(false)} className="mobile-item">
            Home
          </Link>
          <Link
            href="/experience"
            onClick={() => setOpen(false)}
            className="mobile-item"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="mobile-item"
          >
            Projects
          </Link>
          <Link
            href="/certificate"
            onClick={() => setOpen(false)}
            className="mobile-item"
          >
            Certificates
          </Link>
          <Link
            href="/components"
            onClick={() => setOpen(false)}
            className="mobile-item"
          >
            Components
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="mobile-item"
          >
            About
          </Link>

          {isAdmin && (
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="mobile-item"
            >
              Admin
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default MobileNav;
