import React from 'react'

interface PageProps {
    visitors:number
}

const Visitor:React.FC<PageProps> = ({visitors}) => {
  return (
    <div className="border w-fit py-1 px-3 rounded-full bg-[#e0e0e0]/95 text-black font-mono ">
      Visitor: {visitors}
    </div>
  );
}



export default Visitor
