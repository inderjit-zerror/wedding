'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const HeroSectionVenue = () => {

  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    gsap.to(imageRef.current, {
      yPercent: 20, // parallax strength
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        // markers:true
      },
    })
  }, [])


  return (
    <div ref={containerRef} className='w-full h-screen flex overflow-hidden'>
      <Image
        ref={imageRef}
        src={`/imgs/venue/heroImage.webp`}
        className='w-full h-full object-cover object-center scale-[1.1]'
        width={1000}
        height={1000}
        alt='IMG'
      />
    </div>
  )
}

export default HeroSectionVenue
