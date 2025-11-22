import mongoose, { Schema } from "mongoose";

interface Certificate{
     title:string
     completionDate: number
     description:string
    skills:string[]
    link:string
}

const CertificateSchema:Schema<Certificate> = new Schema({
    title:{
        type:String
    },
    completionDate:{
        type:Number
    },
    description:{
        type:String
    },
    skills:[{
        type:String
    }],
    link:{
        type:String
    }
})

const Certificate = mongoose.models.Certificate || mongoose.model<Certificate>("Certificate" , CertificateSchema)

export default Certificate