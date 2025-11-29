import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink
}from "@/components/ui/navigation-menu"
import Link from 'next/link'
const AdmingNavbar = () => {
  return (
    <div className='flex flex-col gap-2'>
        <NavigationMenu style={{listStyle:"none"}}>
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link href='/admin/leetcode'>LeetCode</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenu>
    </div>
  )
}

export default AdmingNavbar   