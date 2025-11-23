import mongoose, { Schema } from "mongoose";

export interface ExperienceInterface{
    _id:mongoose.Types.ObjectId
    __v:number
    joinedDate:number
    companyName:string
    description:string
    achives:string[]
    techStack:string[]
    techAchives:string[]
    companyLogo:string
}

const ExperienceSchema:Schema<ExperienceInterface> = new Schema({
    joinedDate:{
        type:Number
    },
    companyName:{
        type:String
    },
    description:{
        type:String
    },
    achives:[{
        type:String
    }],
    techStack:[{
        type:String
    }],
    techAchives:[{
        type:String
    }],
    companyLogo:{
        type:String
    }
})

const Experience = mongoose.models.Experience || mongoose.model<ExperienceInterface>("Experience" , ExperienceSchema)

export default Experience;