"use client";

import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbarv2() {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2">
      {/* LEFT SIDE */}
      <div className=" font-bold tracking-wide text-2xl">ADITYA</div>

      {/* RIGHT SIDE (your whole menu here) */}
      <NavigationMenu>

        {/* home navigation */}
        <NavigationMenuItem style={{listStyle:"none"}}>
          <NavigationMenuLink>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* eperience navigation */}
        <NavigationMenuItem style={{listStyle:"none"}}>
          <NavigationMenuLink>
            <Link href="/experience">Experience</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* project  */}
        <NavigationMenuItem style={{listStyle:"none"}}>
          <NavigationMenuLink>
            <Link href="/projects">Projects</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* certificates */}
        <NavigationMenuItem style={{listStyle:"none"}}>
          <NavigationMenuLink>
            <Link href="/certificate">Certificates</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* components */}
        <NavigationMenuItem style={{listStyle:"none"}}>
          <NavigationMenuLink>
            <Link href="/components">Components</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      {/* about */}
        <NavigationMenuItem style={{listStyle:"none"}}>
          <NavigationMenuLink>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

          {/* admin */}
        <NavigationMenuItem style={{listStyle:"none"}}>
          <NavigationMenuLink>
            <Link href="/admin">Admin</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
}
