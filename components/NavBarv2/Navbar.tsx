"use client";

import React, { useEffect, useState } from "react";
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
import { checkAdmin } from "@/services/authCheck";
import { Role } from "@/interface/Role";
import { usePathname } from "next/navigation";

export default function Navbarv2() {
  const [open, setOpen] = React.useState(false);
  const [userInfo , setUserInfo] = useState<Role>()
const pathName = usePathname();
const [isComponentPage , setIscomponentPage] = useState<boolean>(false);


useEffect(() => {
  // Check which page we are on
  const setPathName = ()=>{
    const isComponentPage = pathName  === "/components" ?true : false
    setIscomponentPage(isComponentPage)
  }
  // Fetch user info
  const getUserInfo = async () => {
    try {
      const userdata = await checkAdmin();
      setUserInfo(userdata);
    } catch (error) {
      console.log(error);
    }
  };
  getUserInfo();
  setPathName()
}, [pathName]); 
  return (
    <div className="w-full flex justify-between items-center px-4 py-3 border-b">
      {/* LEFT SIDE */}
      <div className="font-bold tracking-wide text-2xl">{isComponentPage ? "Adi-Asset":"ADITYA"}</div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="text-sm">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/experience" className="text-sm">
                  Experience
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/projects" className="text-sm">
                  Projects
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/certificate" className="text-sm">
                  Certificates
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/components" className="text-sm">
                  Components
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className="text-sm">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

           { userInfo?.isAdmin ? <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/admin" className="text-sm">
                  Admin
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>:null}
          </NavigationMenuList>
        </NavigationMenu>

        {/* THEME BUTTON */}
        <ToggleTheme />
      </div>

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
    </div>
  );
}
