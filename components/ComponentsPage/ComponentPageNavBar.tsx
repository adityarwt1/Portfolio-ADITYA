import React from 'react'
import { NavigationMenu } from '../ui/navigation-menu'
import PageNavigate from './PageNavigate'

const ComponentPageNavBar = () => {
  return (
    <div className='flex w-full p-4 flex-col gap-2' >
      <div className=''>Check Dev utilities</div>
        <NavigationMenu style={{listStyle:"none" , width:"100%"}}>
          <PageNavigate slug='count-word' title='CoutWord' />
        </NavigationMenu>
    </div>
  )
}

export default ComponentPageNavBar