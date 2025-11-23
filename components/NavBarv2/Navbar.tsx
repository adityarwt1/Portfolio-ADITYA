"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ToggleTheme } from "../ToggleTheme";

export default function Navbarv2() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-full flex justify-between items-center px-4 py-3 border-b">
      {/* LEFT SIDE */}
      <div className="font-bold tracking-wide text-2xl">ADITYA</div>

      {/* MOBILE NAV */}
      <div className="flex md:hidden items-center gap-4">
        <ToggleTheme />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu size={28} />
          </SheetTrigger>

          <SheetContent side="left" className="p-6">
            <nav className="flex flex-col gap-5 text-lg font-medium">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>

              <Link href="/experience" onClick={() => setOpen(false)}>
                Experience
              </Link>

              <Link href="/projects" onClick={() => setOpen(false)}>
                Projects
              </Link>

              <Link href="/certificate" onClick={() => setOpen(false)}>
                Certificates
              </Link>

              <Link href="/components" onClick={() => setOpen(false)}>
                Components
              </Link>

              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>

              <Link href="/admin" onClick={() => setOpen(false)}>
                Admin
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* DESKTOP NAV (unchanged) */}
      <div className="hidden md:flex items-center gap-6">
        {/* navigation menu here */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {/* Desktop links... */}
          </NavigationMenuList>
        </NavigationMenu>

        <ToggleTheme />
      </div>
    </div>
  );
}
