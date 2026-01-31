'use client'
import React, { useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)


const Itinerary = () => {

    useEffect(()=>{
        const TLIT = gsap.timeline({
            scrollTrigger:{
                trigger:'.iTCONT',
                start:'top top',
                end:'bottom bottom',
                scrub:true,
            }
        })
        TLIT.to('.cardDiv1',{
            top:0,
            ease:'none'
        })
        TLIT.to('.cardDiv2',{
            top:0,
            ease:'none'
        })
        TLIT.to('.cardDiv3',{
            top:0,
            ease:'none'
        })
    },[])

    return (

        <div className='w-full h-[300vh] flex flex-col relative iTCONT'>
            <div className='w-full h-screen bg-white sticky top-0 left-0 flex flex-col'>
                {/* Top */}
                <div className='w-full h-[50vh] flex flex-col px-8 justify-end items-center pb-[2.5vh]'>
                    <span className='mb-[2vh] Font_YV text-[#75171E]'>Make-Up Services</span>
                    <h1 className='Font_Q text-[8vw] leading-[8vw] uppercase mb-[3vh] text-[#75171E]'>Wellness Services</h1>
                    <p className='Font_YV max-w-[500px] text-justify'>For guests who would like professional make-up and hairstyling during the wedding celebrations, make-up services will be available at the venue</p>
                </div>
                {/* Bottom */}
                <div className='w-full h-[50vh]  relative px-8 py-8'>
                    {/* 1-DIV */}
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center bg-[#75171E] gap-12  py-10 px-10">

                        {/* Left Content */}
                        <div className="text-[#e6c18b] h-full flex flex-col justify-between">
                            <div className=" font-serif Font_Q text-[2.5rem] uppercase tracking-widest mb-8">
                                The Spa Experience
                            </div>

                            <ul className="space-y-4 text-lg font-light Font_YV">
                                <li>• Swedish Massage – ₹5,000</li>
                                <li>• Deep Tissue Massage – ₹6,500</li>
                                <li>• Couple Spa – ₹12,000</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="w-full h-full bg-amber-700 overflow-hidden ">
                            <img
                                src={`/imgs/itinerary/Iimg1.webp`}
                                alt="Spa Experience"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                    </div>

                    {/* 2-DIV */}
                    <div className='px-8 py-8 w-full h-[50vh] cardDiv1 absolute top-[100%] left-0'>
                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center bg-[#F3F4EF] gap-12  py-10 px-10">

                        {/* Left Content */}
                        <div className="text-[#202020] h-full flex flex-col justify-between">
                            <div className=" font-serif Font_Q text-[2.5rem] uppercase tracking-widest mb-8">
                                The Spa Experience
                            </div>

                            <ul className="space-y-4 text-lg font-light Font_YV">
                                <li>• Swedish Massage – ₹5,000</li>
                                <li>• Deep Tissue Massage – ₹6,500</li>
                                <li>• Couple Spa – ₹12,000</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="w-full h-full bg-amber-700 overflow-hidden ">
                            <img
                                src={`/imgs/itinerary/Iimg2.webp`}
                                alt="Spa Experience"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                    </div>
                    </div>

                    {/* 3-DIV */}
                    <div className='px-8 py-8 w-full h-[50vh] cardDiv2 absolute top-[100%] left-0'>
                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center bg-[#75171E] gap-12  py-10 px-10">

                        {/* Left Content */}
                        <div className="text-[#e6c18b] h-full flex flex-col justify-between">
                            <div className=" font-serif Font_Q text-[2.5rem] uppercase tracking-widest mb-8">
                                The Spa Experience
                            </div>

                            <ul className="space-y-4 text-lg font-light Font_YV">
                                <li>• Swedish Massage – ₹5,000</li>
                                <li>• Deep Tissue Massage – ₹6,500</li>
                                <li>• Couple Spa – ₹12,000</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="w-full h-full bg-amber-700 overflow-hidden ">
                            <img
                                src={`/imgs/itinerary/Iimg3.webp`}
                                alt="Spa Experience"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                    </div>
                    </div>
                    
                    {/* 4-DIV */}
                    <div className='px-8 py-8 w-full h-[50vh] cardDiv3 absolute top-[100%] left-0'>
                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center bg-[#F3F4EF] gap-12  py-10 px-10">

                        {/* Left Content */}
                        <div className="text-[#202020] h-full flex flex-col justify-between">
                            <div className=" font-serif Font_Q text-[2.5rem] uppercase tracking-widest mb-8">
                                The Spa Experience
                            </div>

                            <ul className="space-y-4 text-lg font-light Font_YV">
                                <li>• Swedish Massage – ₹5,000</li>
                                <li>• Deep Tissue Massage – ₹6,500</li>
                                <li>• Couple Spa – ₹12,000</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="w-full h-full bg-amber-700 overflow-hidden ">
                            <img
                                src={`/imgs/itinerary/Iimg1.webp`}
                                alt="Spa Experience"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                    </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Itinerary
