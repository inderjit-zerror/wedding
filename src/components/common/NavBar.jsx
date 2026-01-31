'use client'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className='w-full h-[46px] mt-10 flex justify-between fixed top-0 left-0 items-center z-100 px-20'>
            {/* Left */}
            <div className='w-1/3 h-full items-center flex justify-between uppercase text-[18px] text-[#5F171D]'>
               <Link href={`/`}><div className='w-fit h-fit flex flex-col group relative  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#5F171D]'></div> The wedding</div></Link>
                <Link href={`/Itinerary`}><div className='w-fit h-fit flex flex-col group relative  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#5F171D]'></div> Itinerary</div></Link>
                <Link href={`/venue`}><div className='w-fit h-fit flex flex-col group relative  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#5F171D]'></div> VENUE</div></Link>
            </div>

            {/* Logo */}
            <div className='w-fit h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img src={`/svgs/Logo.svg`} alt="Logo" className='h-full object-cover object-center' />
            </div>

            {/* Right */}
            <div className='w-1/3 h-full items-center flex justify-between uppercase text-[18px] text-[#5F171D]'>
                <div className='w-fit h-fit flex flex-col group relative  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#5F171D]'></div> Services</div>
                <div className='w-fit h-fit flex flex-col group relative  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#5F171D]'></div> FAQ</div>
                {/* BTN */}
                <div className='w-[114px] h-[46px] select-none cursor-pointer flex justify-center items-center px-[17px] py-[6px] text-[18px] text-[#D9B18D] bg-[#5F171D] hover:bg-[#691f25]'>
                    RSVP
                </div>
            </div>
        </div>
    )
}

export default NavBar
