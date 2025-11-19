import mongoose from "mongoose";


export const mongoconnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string,{
            dbName:"PortFolio"
        })
        return  true
    } catch (error) {
        console.log(error)
        return false
    }
}