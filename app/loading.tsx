import { Spinner } from '@/components/ui/spinner'
import React from 'react'

const HomePageLoading = () => {
  return (
    <div className='w-full h-screen justify-center items-center '>
      <Spinner />
    </div>
  )
}

export default HomePageLoading
