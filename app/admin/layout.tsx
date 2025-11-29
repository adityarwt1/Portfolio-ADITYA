import AdmingNavbar from "@/components/Admin/AdmingNavbar";
import React from "react";

export default function AdminDashboardLayout({children}:{children:React.ReactNode}){

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[20%] flex justify-center items-center flex-col gap-2">
                <div>Controll Pannel</div>
                <AdmingNavbar/>
            </div>
            <div className="w-[80%]">{children}</div>
        </div>
    )
}