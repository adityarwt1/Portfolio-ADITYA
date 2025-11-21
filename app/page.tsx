import Mainconte from '@/components/HomePage/Maincontent/Mainconte';
import QuickInfoCards from '@/components/HomePage/QuickInfoCards/QuickInfoCards';
import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full h-screen p-5">
     <QuickInfoCards/>      
     <Mainconte/>
    </div>
  );
}

export default HomePage
