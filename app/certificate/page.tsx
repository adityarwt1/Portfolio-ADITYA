"use server"
import CertificateCards from "@/components/Certificate/CertificateCards";
import { mongoconnect } from "@/lib/mongodb";
import Certificate, { CertificateInterface } from "@/models/Certifiate";
import { Metadata } from "next";
import React from "react";

const Page = async () => {
  await mongoconnect()
  const certificates = await Certificate.find({}).lean<CertificateInterface[]>() 
 
  console.log(certificates)
  return (
    <div className="flex flex-col p-4 ">
      {certificates.map((certificate :CertificateInterface)=> (
      <CertificateCards key={certificate.link} {...certificate}  />
      ))}
    </div>
  );
};

export default Page;

export async function generateMetadata():Promise<Metadata> {
  await mongoconnect()
  const certificate = await Certificate.findOne({
    _id: "6921e3770b211e7b119e943d",
  }).lean<CertificateInterface>();

  return {
    title: `Certificate - ${certificate?.title}`,
    description:certificate?.description,
    openGraph:{
      title:certificate?.title,
      description:certificate?.description,
      images:[{
        url:certificate?.imageLink as string
      }]
    },
    twitter:{
      card:"summary_large_image",
      title:certificate?.title,
      description:certificate?.description,
      images:[certificate?.imageLink as string]
    },
  }

}