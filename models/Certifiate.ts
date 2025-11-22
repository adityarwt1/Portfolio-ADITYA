import mongoose, { Schema } from "mongoose";

export interface CertificateInterface {
  _id: string; // better to convert to string when using lean()
  __v: number;
  title: string;
  completionDate: number;
  description: string;
  skills: string[];
  link: string;
  imageLink: string;
}

const CertificateSchema: Schema<CertificateInterface> = new Schema({
  title: {
    type: String,
  },
  completionDate: {
    type: Number,
  },
  description: {
    type: String,
  },
  skills: [
    {
      type: String,
    },
  ],
  link: {
    type: String,
  },
  imageLink: {
    type: String,
  },
});

const Certificate =
  mongoose.models.Certificate ||
  mongoose.model<CertificateInterface>("Certificate", CertificateSchema);

export default Certificate