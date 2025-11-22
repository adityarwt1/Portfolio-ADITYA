"use server"
import CertificateCards from "@/components/Certificate/CertificateCards";
import { mongoconnect } from "@/lib/mongodb";
import Certificate from "@/models/Certifiate";
import React from "react";

const Page = async () => {
  // await mongoconnect()
  // const certificates = await Certificate.find({}).lean()
  const certificates = [
    {
      _id: {
        buffer: {
          "0": 105,
          "1": 33,
          "2": 212,
          "3": 196,
          "4": 91,
          "5": 38,
          "6": 249,
          "7": 251,
          "8": 97,
          "9": 71,
          "10": 136,
          "11": 224,
        },
      },
      title: "Web Developement Course",
      completionDate: 1746901800000,
      description:
        "The certificate helped me learn web development step by step.",
      skills: [
        "Next.js",
        "React",
        "GitHub",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCss",
        "HTML",
        "CSS",
      ],
      link: "https://www.udemy.com/certificate/UC-ca3caf9c-3c6d-4ad0-944a-9d6cb20e6fc3/",
      imageLink:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-ca3caf9c-3c6d-4ad0-944a-9d6cb20e6fc3.jpg?v=1746950518000",
      __v: 0,
    },
  ];
  console.log(certificates)
  return (
    <div className="flex flex-col p-4 ">
      {certificates.map((certificate)=> (

      <CertificateCards key={certificate.link} {...certificate}  />
      ))}
    </div>
  );
};

export default Page;
