import React from "react";
import Name from "./Left";
import { checkAdmin } from "@/services/authCheck";
import NavigationElement from "./NavigationElement";
import MobileNav from "./MobileNav";

const NavaBar: React.FC = async () => {
  const role = await checkAdmin();

  return (
    <nav className="flex w-full justify-between items-center p-4 border-b border-white/15 shadow-2xs shadow-white/15 h-[10%]">
      <Name />

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationElement {...role} />
      </div>

      {/* Right Section + Mobile Nav */}
      <div className="md:hidden">
        <MobileNav {...role} />
      </div>
    </nav>
  );
};

export default NavaBar;
