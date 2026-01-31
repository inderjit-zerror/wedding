'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
import Line from "@/components/sections/home/Line";

const WeddingHero = () => {

   useGSAP(() => {
        gsap.from('.WHD1', {
            yPercent: 20,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.WHD1',
                start: 'top 60%',
                end: 'top 35%',
                scrub: true,
                // markers:true
            }
        })
    }, [])


  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-3xl WHD1">
        {/* Bride Name */}
        <h1 className="Font_Q text-[#7A2E2E] text-5xl md:text-6xl tracking-wide uppercase">
          Henna Lakhia
        </h1>

        {/* And */}
        <p className="italic Font_YIV text-[#7A2E2E] my-4 text-sm">
          and
        </p>

        {/* Groom Name */}
        <h2 className="Font_Q text-[#7A2E2E] text-5xl md:text-6xl tracking-wide uppercase">
          Benjamin Melnich
        </h2>

        {/* Description */}
        <p className="mt-10 Font_YV  tracking-widest uppercase text-[#7A2E2E] leading-relaxed">
          Request the pleasure of your company <br />
          to celebrate their wedding on
        </p>

        {/* Date */}
        <div className="mt-6 flex items-center justify-center gap-4 text-[#7A2E2E]">
          <span className="text-xs tracking-widest uppercase">
            March
          </span>

          <span className="text-2xl md:text-[40px] font-serif">
            25<sup className="text-sm">th</sup> – 27<sup className="text-sm">th</sup>
          </span>

          <span className="text-xs tracking-widest uppercase">
            2026
          </span>
        </div>
      </div>

    </section>
  );
};

export default WeddingHero;
