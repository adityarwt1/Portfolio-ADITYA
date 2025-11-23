import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

const MainContent = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full p-20 gap-2">
      <div className="text-4xl font-bold uppercase">Aditya Rawat</div>
      <div>
        I&apos;m a true tech enthusiast who began coding back in class 9. I&apos;ve always
        been fascinated by how real products work behind the scenes. At 17, I
        even built and cracked my first startup. Today, I&apos;m focused on
        sharpening my skills further and building production-ready solutions
        with a strong passion for learning and improving every day.
      </div>
      <div className='flex gap-2'>
        <Button asChild>
          <Link href="/experience">Experience</Link>
        </Button>
        <Button asChild>
          <Link href="/projects">Projects</Link>
        </Button>
      </div>
    </div>
  );
}

export default MainContent