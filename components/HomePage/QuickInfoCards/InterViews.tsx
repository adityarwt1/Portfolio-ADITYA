import React from 'react'

interface PageProps {
  interviewes:number
}
const InterViews:React.FC<PageProps> = ({interviewes}) => {
  return (
    <div className="border w-fit py-1 px-3 rounded-full bg-[#e0e0e0]/95 text-black font-mono ">Interviews:{interviewes}</div>
  );
}

export default InterViews
