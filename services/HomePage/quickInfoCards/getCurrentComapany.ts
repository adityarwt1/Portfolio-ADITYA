"use client"
export const getCurrentCompany  = async () : Promise<{success:boolean, company:{_id:string, companyName:string, joinedDate:number}}>=>{
    try {
        const response = await fetch("/api/v1/getCurrentCompany",{
            method:"GET"
        });
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return {
            success:false,
            company:{
                _id:"not found",
                companyName:"Company Name",
                joinedDate:new Date().getTime()
            }
        }
    }
}