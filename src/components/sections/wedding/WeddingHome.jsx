'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)


const WeddingHome = () => {

  // const WcontainerRef = useRef(null)
  // const WimageRef = useRef(null)

  // useGSAP(() => {
  //   gsap.to(WimageRef.current, {
  //     yPercent: 20, // parallax strength
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: WcontainerRef.current,
  //       start: 'top top',
  //       end: 'bottom top',
  //       scrub: true,
  //       // markers:true
  //     },
  //   })
  // }, [])

  return (
    <div  className="w-full h-screen fixed top-0 left-0 flex justify-end items-end  z-[-1] ">
      {/* <div   className="w-full h-[85vh] overflow-hidden flex relative "> */}
        <img
        
          src={`/imgs/home/imgH2.webp`}
          className="w-full h-full object-cover object-center"
          alt="Img"
        />

        <img  src={`/svgs/WDText.svg`} alt="IMG" className=" absolute object-cover object-center w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* </div> */}
    </div>
  );
};

export default WeddingHome;
