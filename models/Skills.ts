import mongoose, { Document, Schema } from "mongoose";

export interface SkillsInterface extends Document{
    skill:string
    type:string,
    svgLogo:string
}

const SkillSchema :Schema<SkillsInterface> = new Schema({
    skill:{
        type:String
    },
    type:{
        type:String
    },
    svgLogo:{
        type:String
    }
})

const Skill = mongoose.models.Skills || mongoose.model<SkillsInterface>("Skill" , SkillSchema)

export default Skill;