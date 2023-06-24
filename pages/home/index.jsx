import Carousel from '@/components/Carousel'
import { MenuWrapper } from '@/components/products/MenuWrapper'
import { About } from '@/components/ui/About'
import { Campaigns } from '@/components/ui/Campaigns'
import React from 'react'

const Index = () => {
  return (
    <div>
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About/>
    </div>
  )
}

export default Index 