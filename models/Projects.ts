import mongoose, { Document, Schema } from "mongoose";

export interface ProjectInterface extends Document {
    _id:mongoose.Types.ObjectId
    __v:number
    title:string
    description:string
    skills:string[],
    thumbNail:string,
    keyFeature:string[]
    liveLink:string
    gitHubLink:string
    active:boolean
}

const ProjectSchema :Schema<ProjectInterface> = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    skills:[{
        type:String
    }],
    thumbNail:{
        type:String
    },
    keyFeature:[{
        type:String
    }],
    liveLink:{
        type:String
    },
    gitHubLink:{
        type:String
    },
    active:{
        type:Boolean
    }
},{timestamps:true})

const Project = mongoose.models.Project || mongoose.model<ProjectInterface>("Project" , ProjectSchema)

export default Project