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


export const metadata: Metadata = {
  title: "Certficate - Aditya Rawat",
  abstract:
    "This page showcases all my certificates, their details, and verification links.",
  appleWebApp: {
    capable: true,
    startupImage: "/vercel.svg",
    statusBarStyle: "black",
    title: "Aditya Rawat",
  },
  applicationName: "Aditya Rawat - Portfolio",
  alternates: {
    canonical: "https://adityarawatportfolio.vercel.app/",
    languages: {
      "eng-US": "https://adityarawatportfolio.vercel.app/",
    },
  },
  assets: "/images",
  authors: {
    name: "Aditya Rawat",
    url: "https://adityarawatportfolio.vercel.app/",
  },
  
};