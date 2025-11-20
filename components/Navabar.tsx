"use client"
import { Role } from "@/interface/Role";
import React, { useState }  from "react";

const NavaBar:React.FC<Role> = ({role , isAdmin})=>{
    const [roleAndIsAdmin] = useState<Role>({role , isAdmin})
    return (
        <div>navabar</div>
    )
} 
export default NavaBar