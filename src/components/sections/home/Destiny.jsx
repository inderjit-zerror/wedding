'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Destiny = () => {

    useEffect(() => {
        const TLD = gsap.timeline({
            scrollTrigger: {
                trigger: '.Destiny_cont',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                // markers: true
            }
        })
        TLD.to('.innderDestinyCont', {
            opacity: 1
        }, 'b1')

    }, [])


    return (
        <div className='w-full h-fit Destiny_cont relative p-10 '>

            {/* Bg */}
            <img src={`/imgs/home/imgH2.webp`} className='w-full h-full object-cover fixed top-0 left-0 object-center z-[-1]' alt="BG-IMG" />

            <div className='w-full h-fit bg-white flex flex-col px-[5vw] '>
                <div className='w-full h-full px-[10vw] pt-[10vw]'>
                    <img src={`/svgs/Title1Destiny.svg`} className='w-full object-cover' alt="SVG" />
                </div>

                <div className='w-full h-fit flex mt-[5vw]'>
                    <div className='w-1/2 pr-[10vw]'>
                        <p className='Font_YV'> Our story didn’t begin with grand gestures or dramatic moments. It began with tradition, with families coming together, and with a quiet sense of trust. Guided by shared values and mutual respect, we were brought into each other’s lives at just the right time.</p>
                    </div>
                    <div className='w-1/2 pl-[10vw]'>
                        <p className='Font_YV'>In those early moments, everything felt simple. There was curiosity, respect, and an unspoken understanding that allowed us to be ourselves. No rush, no expectations—just space to grow and learn about one another.</p>
                    </div>
                </div>


                {/* IMG */}
                <div className='w-full h-fit flex mt-[5vw] mb-[50vh] gap-[5vw]'>
                    {/* Left */}
                    <div className='w-2/4'>
                        <div className='w-full h-auto'>
                            <img src={`/imgs/home/imgH3.webp`} className='w-full aspect-[2/3] object-cover object-center' alt="IMG" />
                        </div>
                    </div>

                    {/* Right */}
                    <div className='w-full'>
                        <div className='w-full h-auto'>
                            <img src={`/imgs/home/imgH2.webp`} className='w-full aspect-[2/2] object-cover object-center' alt="IMG" />
                        </div>
                    </div>
                </div>

                {/* ------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------------------------------------------------ */}

                <div className='w-full h-fit flex flex-col mb-[10vh] relative '>
                    <div className='w-full relative'>
                        <div className='w-1/2 flex mb-[80vh] relative'>
                            <img src={`/svgs/DestinyP2T.svg`} alt="IMG" className='w-full object-cover object-center' />
                        </div>

                        {/* 2Img-COMT */}
                        <div className='w-full h-fit flex justify-center  items-center absolute top-[30%] left-0'>
                            {/* left */}
                            <div className='w-[380px] h-[500px]  rotate-z-[5deg] z-30 relative'>
                                <img src={`/imgs/home/img1Destiny2.webp`} alt="IMG" className='w-full h-full object-cover object-center' />
                                {/* Random text */}
                                <img src={`/svgs/randomText.svg`} className='w-[100px] absolute top-[110%] left-1/2 object-cover object-center' alt="IMG" />
                            </div>

                            {/* Right */}
                            <div className='w-[380px] h-[500px] overflow-hidden -rotate-z-[5deg] z-20 translate-y-[-10%]'>
                                <img src={`/imgs/home/img2Destiny2.webp`} alt="IMG" className='w-full h-full object-cover object-center' />
                            </div>
                        </div>

                        <div className='w-full fit flex justify-start items-end '>
                            {/* Left */}
                            <div className='w-1/2 h-full '>
                                <div className='w-1/2 h-fit'>
                                    <div className='w-[270px] h-[204px] overflow-hidden flex flex-col '>
                                        <img src={`/imgs/home/img3Destiny2.webp`} className=' w-full object-center object-cover' alt="IMG" />
                                    </div>
                                    <div className='w-[280px] fit uppercase Font_YV'>
                                        <p className='mt-8'>to know him and his family, her family felt confident and happy about the match. </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right */}
                            <div className='w-1/2 h-fit flex justify-end'>

                                <div className='w-1/2 h-fit flex flex-col'>
                                    <div className="flex gap-8 items-end max-w-5xl w-full">

                                        {/* Left Image – Shorter */}
                                        <div className="flex-1">
                                            <img
                                                src={`/imgs/home/img2Destiny2.webp`}
                                                alt="Couple"
                                                className="w-full h-[250px] object-cover object-center"
                                            />
                                        </div>

                                        {/* Right Image – Taller */}
                                        <div className="flex-1">
                                            <img
                                                src={`/imgs/home/img2Destiny2.webp`}
                                                alt="Couple"
                                                className="w-full h-[270px] object-cover object-center"
                                            />
                                        </div>

                                    </div>
                                    <img src={`/svgs/LastimgDestiny2.svg`} className='w-full mt-[2.5vw] object-center object-cover' alt="IMG" />

                                </div>

                            </div>
                        </div>
                    </div>



                </div>


            </div>



        </div>
    )
}

export default Destiny
