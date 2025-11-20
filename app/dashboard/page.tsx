import { checkAdmin } from "@/services/authCheck";
import { redirect } from "next/navigation";

const DashBoard =  async()=>{
    const auth = await checkAdmin()    
    if(!auth.isAdmin){
        redirect("/login")
    }
    return  (
        <div>dashboard</div>
    )
}

export default DashBoard;