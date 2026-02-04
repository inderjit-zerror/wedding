'use client'
import Explore from '@/components/sections/venue/Explore'
import React, { useState } from 'react'

const explore = () => {

  const [isMobile, SetisMobile] = useState(false)

  return (
    <>
    { isMobile == false? (<> <Explore/></>):(<> <Explore/></>)}
    </>
  )
}

export default explore
