import mongoose, { Document, Schema } from "mongoose";

export interface ProjectInterface extends Document {
    title:string
    description:string
    skills:string[],
    thumbNail:string
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
    }
},{timestamps:true})

const Project = mongoose.models.Project || mongoose.model<ProjectInterface>("Project" , ProjectSchema)

export default Project