'use client'
import React from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)


const WeddingVenue = () => {

  useGSAP(() => {
    gsap.from('.WeddingText', {
      opacity: 0,
      yPercent: 20,
      stagger: {
        each: 0.5,
      },
      ease: 'none',
      scrollTrigger: {
        trigger:'.WeddingTextCont',
        start: 'top 50%',
        end: 'top top',
        scrub: true,
        // markers:true
      },
    })
  }, [])

  return (
    <section className="min-h-screen WeddingTextCont flex items-center justify-center bg-white px-6">
      <div className=" text-center text-[#5B1F1F]">

        {/* Top label */}
        <p className="tracking-tight uppercase mb-6 Font_YV WeddingText">
          Wedding Venue
        </p>

        {/* Main heading */}
        <h5 className="Font_Q  leading-none text-[7vw] tracking-wide mb-10 WeddingText">
          LA MAMOUNIA
        </h5>

        {/* Dates */}
        <div className="flex items-center justify-center gap-6 text-sm tracking-wide mb-10 WeddingText">
          <span className="uppercase">Check in</span>
          <span className="font-serif text-4xl">25<sup className="text-xs">th</sup></span>
          <span className="uppercase">March</span>

          <span className="opacity-50">–</span>

          <span className="uppercase">Check out</span>
          <span className="font-serif text-4xl">28<sup className="text-xs">th</sup></span>
          <span className="uppercase">March</span>
        </div>

        {/* Description */}
        <p className="max-w-xl mx-auto Font_YV leading-[20px] text-[#3E2A2A] WeddingText">
          A serene luxury resort nestled in the heart of Marrakech, blending
          traditional Moroccan architecture with modern comfort. This is where
          all our wedding celebrations will take place.
        </p>
      </div>
    </section>
  );
};

export default WeddingVenue;
