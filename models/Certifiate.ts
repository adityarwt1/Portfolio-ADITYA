import mongoose, { Schema } from "mongoose";

export interface Certificate{
     title:string
     completionDate: number
     description:string
    skills:string[]
    link:string
    imageLink:string
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
    },
    imageLink:{
        type:String
    }
})

const Certificate = mongoose.models.Certificate || mongoose.model<Certificate>("Certificate" , CertificateSchema)

export default Certificate