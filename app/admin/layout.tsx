import React from "react";

export default function AdminDashboardLayout({children}:{children:React.ReactNode}){

    return (
        <div className="w-full flex">
            <div className="w-[20%]">Navbar</div>
            <div className="w-[80%]">{children}</div>
        </div>
    )
}