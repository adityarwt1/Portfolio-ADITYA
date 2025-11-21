import Image from 'next/image';
import React from 'react'

const Batches = () => {
  return (
    <div className="bg-[#282828] p-1 rounded-lg  justify-center items-center h-fit w-fit ">
        <div className='flex flex-col'>
            <Image src="/images/50daybatch.png" width={45} height={45} alt='50 daybathch'/>
            <Image src="/images/100daysbatch.png" width={100} height={100} alt='50 daybathch'/>
        </div>
    </div>
  );
}

export default Batches
