import Image from 'next/image'
import React from 'react'

const HeroSectionVenue = () => {
  return (
    <div className='w-full h-screen flex'>
        <Image 
         src={`/imgs/venue/heroImage.webp`}
         className='w-full h-full object-cover object-center'
         width={1000}
         height={1000}
         alt='IMG'
        />
    </div>
  )
}

export default HeroSectionVenue
