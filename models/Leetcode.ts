import mongoose, {  Document, Schema } from "mongoose";

interface LeetCode extends Document {
    easy:number
    medium:number
    hard:number
}

const LeetCodeSchema:Schema<LeetCode> = new Schema({
    easy:{
        type:Number
    },
    medium:{
        type:Number
    },
    hard:{
        type:Number
    }

})

const LeetCode = mongoose.models.Leetcode || mongoose.model<LeetCode>("Leetcode" , LeetCodeSchema);

export default LeetCode;