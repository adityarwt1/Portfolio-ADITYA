"use server"
import CertificateCards from "@/components/Certificate/CertificateCards";
import { mongoconnect } from "@/lib/mongodb";
import Certificate, { CertificateInterface } from "@/models/Certifiate";
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
