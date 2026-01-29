import React from "react";

const TravelInfo = () => {
  return (
    <section className="relative bg-[#7A0F16] py-32 px-6 overflow-hidden">
      
      {/* Background oversized text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="font-serif text-[clamp(6rem,20vw,14rem)] tracking-widest text-[#8E2A2A] opacity-20 whitespace-nowrap">
          TRAVEL INFORMATION
        </h2>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center text-[#F5E6D8]">
        
        <p className=" uppercase mb-6">
          Travel Information
        </p>

        <h2 className="Font_Q  mb-10">
          The Way To <br /> Travel
        </h2>

        <div className="space-y-6 ">
          <p className="uppercase Font_YV">
            Nearest Airport :
          </p>

          <p className="  Font_YV">
            Marrakech Menara Airport <br />
            <span className=" opacity-80 Font_YV">(20 Mins)</span>
          </p>

          <p className=" opacity-90 mt-8 Font_YV">
            Note: Airport transfers will be arranged <br />
            for all guests. Coordinator details to <br />
            follow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;
