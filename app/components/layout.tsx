import React from "react";

interface PageLayOutProps{
    children:React.ReactNode;
}
export default function ComponentPageLayou({children}:PageLayOutProps){

    return (
      <>
        <div className="flex w-full">
          <div className="w-[20%]">asdfsdfg</div>
          <div className="w-[80%]">{children}</div>
        </div>
      </>
    );
}