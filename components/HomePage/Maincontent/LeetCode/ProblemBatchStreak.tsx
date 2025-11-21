import React from 'react'
import ProblemsBatch from './ProblemBatchStreak/ProblemsBatch'
import Streak from './ProblemBatchStreak/Streak';

const ProblemBatchStreak = () => {
  return (
    <div className="flex flex-col">
        <ProblemsBatch/>
        <Streak/>
    </div>
  );
}

export default ProblemBatchStreak
