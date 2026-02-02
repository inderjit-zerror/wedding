'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Hearts = () => {

    useEffect(() => {
        const TLH = gsap.timeline({
            scrollTrigger: {
                trigger: '.heart_cont',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                // markers: true
            }
        })
        TLH.to('.innderHerartCont', {
            gap: 100,
        }, 'b1')
        TLH.to('.innderHerartCont2', {
            gap: 800,
        }, 'b1')
        TLH.to('.TOPUPTEXT', {
            opacity:1,
            scale:1,
            ease:'none'
        },'b1')
    }, [])


    return (
        <div className='w-full h-[250vh] relative heart_cont relative'>
            <div className='w-full h-screen overflow-hidden sticky flex flex-col justify-center top-0 left-0 bg-[#75171E] text-[#E4BD95] uppercase'>
                {/* 1 */}
                <div className=' w-full innderHerartCont overflow-hidden h-fit text-[8vw] leading-[8vw] Font_Q flex gap-10 justify-center'>
                    <h1>Two</h1>
                    <h1>hearts</h1>
                    <h1> met</h1>
                    <h1>Love</h1>
                </div>
                {/* 1 */}
                <div className=' w-full innderHerartCont2 overflow-hidden  whitespace-nowrap flex-nowrap h-fit text-[8.5vw] leading-[8.5vw] Font_Q flex gap-10 justify-center'>
                    <h1>love grew</h1>
                    <h1> quietly,</h1>
                </div>
                {/* 1 */}
                <div className=' w-full innderHerartCont overflow-hidden h-fit text-[8.5vw] leading-[8.5vw] Font_Q flex gap-10 justify-center'>
                    <h1>and </h1>
                    <h1>forever </h1>
                    <h1> began.</h1>
                </div>

                <div className=' TOPUPTEXT absolute opacity-0 scale-[0.5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#E4BD95] flex flex-col justify-center items-center'>
                    <h5 className='text-[40px] Font_Q font-light'>Gracefully</h5>
                    <p className='Font_YV font-semibold'>United</p>
                </div>
            </div>
        </div>
    )
}

export default Hearts
