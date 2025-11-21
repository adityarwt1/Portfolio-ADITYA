import Image from "next/image";
import React from "react";

const Batches = () => {
  return (
    <div className="bg-[#282828] p-3 rounded-lg w-full flex justify-center">
      <div className="flex items-center gap-6">
        <Image
          src="/images/50daybatch.png"
          width={60}
          height={60}
          alt="50-day batch"
          className="rounded-lg"
        />
        <Image
          src="/images/100daysbatch.png"
          width={60}
          height={60}
          alt="100-day batch"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Batches;
