
'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Line = () => {

  useGSAP(() => {
        gsap.from('.LHD1', {
            yPercent: 20,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.LHD1',
                start: 'top 60%',
                end: 'top 35%',
                scrub: true,
                // markers:true
            }
        })
    }, [])

  return (
    <div className='w-full h-fit flex justify-center  bg-white items-center'>
      <div className='w-[2px] rounded-full h-[40vh] bg-[#75171E] LHD1'>
      </div>
    </div>
  )
}

export default Line
