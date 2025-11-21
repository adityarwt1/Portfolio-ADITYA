import mongoose, {  Document, Schema } from "mongoose";

interface LeetCode extends Document {
    easy:number
    medium:number
    hard:number
    language1:string
    count1:number
    language2:string
    cout2:number
    language3:string
    count3:number
    rank:number
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
    },
    rank:{
        type:Number
    },
    language1:{
        type:String
    },
    count1:{
        type:Number
    },
    language2:{
        type:String
    },
    cout2:{
        type:Number
    },
    language3:{
        type:String
    },
    count3:{
        type:Number
    }


})

const LeetCode = mongoose.models.Leetcode || mongoose.model<LeetCode>("Leetcode" , LeetCodeSchema);

export default LeetCode;