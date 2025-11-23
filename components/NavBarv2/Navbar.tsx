"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ToggleTheme } from "../ToggleTheme";

export default function Navbarv2() {
  return (
    <div className="w-full flex justify-between items-center px-4 py-3 border-b">
      {/* LEFT SIDE */}
      <div className="font-bold tracking-wide text-2xl">ADITYA</div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {/* HOME */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="text-sm ">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* EXPERIENCE */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/experience" className="text-sm ">
                  Experience
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* PROJECTS */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/projects" className="text-sm ">
                  Projects
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* CERTIFICATES */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/certificate" className="text-sm ">
                  Certificates
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* COMPONENTS */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/components" className="text-sm ">
                  Components
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* ABOUT */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className="text-sm ">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* ADMIN */}
            <NavigationMenuItem >
              <NavigationMenuLink asChild >
                <Link href="/admin" className="text-sm ">
                  Admin
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* THEME BUTTON */}
        <ToggleTheme />
      </div>
    </div>
  );
}
