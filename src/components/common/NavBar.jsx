'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {
  const navRef = useRef(null)

  useEffect(() => {
    if (!navRef.current) return

    let lastScroll = 0

    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const currentScroll = self.scroll()

        if (currentScroll > lastScroll && currentScroll > 100) {
          // Scroll DOWN → hide navbar
          gsap.to(navRef.current, {
            y: '-300%',
            duration: 0.4,
            ease: 'power3.out',
          })
        } else {
          // Scroll UP → show navbar
          gsap.to(navRef.current, {
            y: '0%',
            duration: 0.4,
            ease: 'power3.out',
          })
        }

        lastScroll = currentScroll
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])


  return (
    <div ref={navRef} className='w-full h-[46px] mt-10 flex justify-between fixed top-0 left-0  items-center z-100 px-20'>
      {/* Left */}
      <div className='w-1/3 h-full items-center flex justify-between uppercase text-[18px] text-white '>
        <Link href={`/`}><div className='w-fit h-fit flex flex-col group relative text-[#5F171D]   select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#5F171D]'></div> The wedding</div></Link>
        <Link href={`/itinerary`}><div className='w-fit h-fit flex flex-col group text-[#5F171D]  relative  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#5F171D]'></div> Itinerary</div></Link>
        <Link href={`/venue`}><div className='w-fit h-fit flex flex-col group relative text-[#5F171D]   select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#5F171D]'></div> VENUE</div></Link>
      </div>

      {/* Logo */}
      <div className='w-fit h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <img src={`/svgs/Logo.svg`} alt="Logo" className='h-full object-cover object-center' />
      </div>

      {/* Right */}
      <div className='w-1/3 h-full items-center flex justify-between uppercase text-[18px]  text-white'>
        <Link href={`/wedding`}><div className='w-fit h-fit flex flex-col group relative text-[#5F171D]  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#5F171D]'></div> Services</div></Link>
        <Link href={`/explore`}><div className='w-fit h-fit flex flex-col group relative  text-[#5F171D]  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#5F171D]'></div>Explore</div></Link>
        <Link href={`/#FAQ`} ><div className='w-fit h-fit flex flex-col group relative  select-none text-[#5F171D] cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#5F171D]'></div> FAQ</div></Link>
        {/* BTN */}
        <div className='w-[114px] h-[46px] select-none cursor-pointer flex justify-center items-center px-[17px] py-[6px] text-[18px] text-[white] bg-[#5F171D] hover:bg-[#632127]'>
          RSVP
        </div>
      </div>
    </div>
  )
}

export default NavBar
