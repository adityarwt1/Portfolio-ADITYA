import ComponentPageNavBar from "@/components/ComponentsPage/ComponentPageNavBar";
import React from "react";

interface PageLayOutProps{
    children:React.ReactNode;
}
export default function ComponentPageLayou({children}:PageLayOutProps){

    return (
      <>
        <div className="flex w-full">
          <div className="w-[20%]">
            <ComponentPageNavBar/>
          </div>
          <div className="w-[80%]">{children}</div>
        </div>
      </>
    );
}