import {  CertificateInterface } from '@/models/Certifiate'
import Image from 'next/image'
import React from 'react'

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

const CertificateCards :React.FC<CertificateInterface> = ({title , completionDate, description, imageLink, link, skills}) => {
  return (
    <div className="flex flex-col md:flex-row p-2 font-mono w-full  items-center gap-5 h-full border-b-white/15 my-2 border-b">
      {/* left part  */}
      <div className="flex flex-col gap-3 w-full">
        <div className="font-bold text-2xl">{title}</div>
        <div className="text-white text-left ">
          ObtainDate:
          {new Date(completionDate).getDate()}-
          {months[new Date(completionDate).getMonth()]}-
          {new Date(completionDate).getFullYear()}
        </div>
        <div>{description}</div>

        {/* sill */}
        <div className='flex flex-col'>
            <div>Skills:</div>
          <div className="flex gap-2 flex-wrap ">
            {skills.map((skill, ind) => (
              <div
                key={ind}
                className="p-1 border border-white/15 rounded-full px-3 bg-[#e0e0e0] text-black"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <a href={link} target='_blank' className='py-1 px-3 bg-[#e0e0e0] w-full text-center text-black rounded-full shadow-2xs shadow-white/15 my-5'>Certificate Link</a>
      </div>

      {/* iamge part */}
      <div className="w-full h-full justify-center flex">
        <a href={imageLink}>
          <Image
            src={imageLink}
            width={600}
            height={600}
            alt={title}
            className="rounded-lg border-2"
          />
        </a>
      </div>
    </div>
  );
}

export default CertificateCards
