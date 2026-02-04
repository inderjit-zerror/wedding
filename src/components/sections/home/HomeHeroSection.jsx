'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const HomeHeroSection = () => {

    const containerRefHome = useRef(null)
    const imageRefHome = useRef(null)

    // PRE-PRE-ANIMATION
    useGSAP(() => {
        const hYL = gsap.timeline();
        hYL.to('.HOMEMAIM', {
            opacity: 1,
            duration: 1,
            stagger: {
                each: '0.2',
                ease: 'none'
            },
            ease: 'none'
        })
        hYL.to('.HOMEMAIM', {
            scale: 1,
            y:0,
            duration:0.7,
            stagger: {
                each: '0.2',
                ease: 'none'
            },
            ease: 'power1.Out'
        },'a22')
        hYL.to(imageRefHome.current, {
            opacity:1,
            duration:2,
            stagger: {
                each: '0.2',
                ease: 'none'
            },
            ease: 'power1.Out'
        },'a22')
    }, [])

    useGSAP(() => {
        gsap.to(imageRefHome.current, {
            yPercent: 20, // parallax strength
            ease: 'none',
            scrollTrigger: {
                trigger: containerRefHome.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                // markers:true
            },
        })
    }, [])


    return (
        <div className='w-full h-screen overflow-hidden relative bg-[#6E0E16] '>
            <div ref={containerRefHome} className='w-full h-screen flex overflow-hidden'>
                {/* <Image
                    ref={imageRefHome}
                    src={`/imgs/home/imgH1.webp`}
                    className='w-full h-full object-cover object-center scale-[1.1]'
                    width={1000}
                    height={1000}
                    alt='IMG'
                /> */}

                <video ref={imageRefHome} muted autoPlay loop src={`/file.mp4`} className='w-full h-full opacity-0 object-cover object-center scale-[1.1]'></video>
            </div>
            <div className='w-full h-screen absolute top-0 left-0 z-20 flex justify-center items-end HOMEMAIM'>
                <h1 className=' uppercase text-[9vw] Font_Q -translate-y-4/3 scale-[0.5] opacity-0 text-white HOMEMAIM'>eternally benna</h1>
            </div>
        </div>
    )
}

export default HomeHeroSection
