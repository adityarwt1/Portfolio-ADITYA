import React from 'react'
import Problems from './Problems'
import Batches from './Batches';

const ProblemsBatch = () => {
  return (
    <div className="flex w-full gap-2">
      <Problems/>
      <Batches/>
    </div>
  );
}

export default ProblemsBatch
