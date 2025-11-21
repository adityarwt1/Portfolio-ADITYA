import React  from "react";
import Name from "./Left";
import { checkAdmin } from "@/services/authCheck";
import NavigationElement from "./NavigationElement";

const NavaBar:React.FC =async  ()=>{
    const role = await checkAdmin()
    return (
        <nav className="flex w-full justify-between items-center p-4 border-b border-b-white/15 shadow-2xs shadow-white/15 h-[10%]">
            <Name/>
            <NavigationElement {...role}/>
            <div className="w-full text-right">right</div>
        </nav>
    )
} 
export default NavaBar