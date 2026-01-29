import React from "react";

const WeddingVenue = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-4xl text-center text-[#5B1F1F]">
        
        {/* Top label */}
        <p className="tracking-tight uppercase mb-6 Font_YV">
          Wedding Venue
        </p>

        {/* Main heading */}
        <h1 className="Font_Q text-[clamp(3rem,8vw,6rem)] leading-none tracking-wide mb-10">
          LA MAMOUNIA
        </h1>

        {/* Dates */}
        <div className="flex items-center justify-center gap-6 text-sm tracking-wide mb-10">
          <span className="uppercase">Check in</span>
          <span className="font-serif text-4xl">25<sup className="text-xs">th</sup></span>
          <span className="uppercase">March</span>

          <span className="opacity-50">–</span>

          <span className="uppercase">Check out</span>
          <span className="font-serif text-4xl">28<sup className="text-xs">th</sup></span>
          <span className="uppercase">March</span>
        </div>

        {/* Description */}
        <p className="max-w-xl mx-auto Font_YV leading-[20px] text-[#3E2A2A]">
          A serene luxury resort nestled in the heart of Marrakech, blending
          traditional Moroccan architecture with modern comfort. This is where
          all our wedding celebrations will take place.
        </p>
      </div>
    </section>
  );
};

export default WeddingVenue;
