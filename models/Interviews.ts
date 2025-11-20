import mongoose, { Schema } from "mongoose";


interface InterviewInteface{
    companyName:string
    round:number
    askedDsa:boolean
    screeningRound:boolean
}

const InterViewSchema:Schema<InterviewInteface> = new Schema({
    companyName:{
        type:String
    },
    round:{
        type:Number
    },
    askedDsa:{
        type:Boolean
    },
    screeningRound:{
        type:Boolean
    },

},{timestamps:true})

const Interview  = mongoose.models.Interview || mongoose.model<InterviewInteface>("Interview" , InterViewSchema)

export default Interview;
