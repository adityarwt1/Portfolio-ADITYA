import mongoose, { Document, Schema } from "mongoose";

interface Visitors extends Document{
    state:string
    country:string,
}

const VisitorSchema :Schema<Visitors>= new Schema({
    state:{
        type:String
    },
    country:{
        type:String
    }

},{timestamps:true})

const Visitor = mongoose.models.Visitor || mongoose.model<Visitors>("Visitor", VisitorSchema);

export default Visitor;