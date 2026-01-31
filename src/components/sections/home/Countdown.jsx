'use client'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Countdown = () => {

     useGSAP(() => {
        gsap.from('.CDD1', {
            yPercent: 20,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.CDD1',
                start: 'top 60%',
                end: 'top 35%',
                scrub: true,
                // markers:true
            }
        })
    }, [])



    // 👉 SET YOUR FINAL DATE HERE
    const targetDate = new Date('2026-03-25T00:00:00')

    const calculateTimeLeft = () => {
        const now = new Date()
        const difference = targetDate - now

        if (difference <= 0) {
            return {
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
            }
        }

        return {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
            hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
            minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
        }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="py-24 w-full h-[90vh] select-none bg-white flex flex-col justify-center items-center text-center">
            <h3 className=" Font_Q tracking-widest uppercase text-[#7A2E2E] mb-20 CDD1">
                Until the wedding
            </h3>

            <div className="w-full h-fit flex justify-center gap-10 text-[#7A2E2E] CDD1">
                {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds },
                ].map((item, index) => (
                    <div key={index} className="text-center items-center justify-center flex ">

                        <div>

                            <div className="text-[6vw] leading-[6vw] Font_Q tracking-wide">
                                {item.value}
                            </div>
                            <div className="mt-2 text-[1rem] Font_YV font-semibold tracking-widest uppercase">
                                {item.label}
                            </div>
                        </div>

                        {/* Colon Separator */}
                        {index !== 3 && (
                            <div className=" flex justify-center items-center text-[5vw] font-serif ml-8">
                                :
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Countdown
