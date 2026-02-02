import React from "react";

const CardX = () => {
  return (
    <div className="w-full h-fit flex flex-col z-20 mt-[100vh]">
      {/* div-1 */}
      <div className="w-full min-h-screen flex">
        {/* Left */}
        <div className="w-1/2 h-screen flex relative bg-white flex-col text-[#75171E] justify-center items-center">
          <h2 className="Font_Q">Day 1</h2>
          <h5 className="Font_Q text-[40px] mt-6">MEHENDI AND HALDI</h5>
          <h5 className="Font_Q text-[40px]">MEHENDI </h5>
          <div className=" text-[16px] mt-6 flex flex-col Font_YV gap-1 justify-center items-center">
            <span>
              <span className="font-semibold">DATE:</span> 25 March 2006
            </span>
            <span>
              <span className="font-semibold">TIME:</span> 4:00 PM
            </span>
            <span>
              <span className="font-semibold">VENUE:</span> La
              Mamounia,Marrakech
            </span>
          </div>

          <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
            Guests are welcomed for a relaxed and joyful afternoon as we begin
            the celebrations with Mehendi and Haldi ceremonies. These rituals
            are filled with laughter, music, and meaningful traditions shared
            with close family and friends.
          </p>

          {/* Design */}
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 left-0"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 right-0 rotate-90"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 right-0 rotate-180"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 left-0 -rotate-90"
            alt="Img"
          />
        </div>

        {/* right */}
        <div className="w-1/2 h-screen flex flex-col bg-[#75171E] px-12 justify-center items-center">
          <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
            <h2 className="Font_Q text-[#E4BD95] uppercase">OutFit</h2>
            <p className="Font_YV text-[#E4BD95] mt-4">
              Light-coloured Indian or fusion wear
            </p>
            <p className="Font_YV text-[#E4BD95]">
              (Comfortable, breezy fabrics recommended)
            </p>

            <img
              src={`/demo.png`}
              alt="Img"
              className="w-full object-cover object-center mt-4"
            />
          </div>
        </div>
      </div>

      {/* div-2 */}
      <div className="w-full min-h-screen flex">
        {/* Left */}
        <div className="w-1/2 h-screen flex flex-col bg-[#75171E] px-12 justify-center items-center">
          <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
            <h2 className="Font_Q text-[#E4BD95] uppercase">OutFit</h2>
            <p className="Font_YV text-[#E4BD95] mt-4">
              Light-coloured Indian or fusion wear
            </p>
            <p className="Font_YV text-[#E4BD95]">
              (Comfortable, breezy fabrics recommended)
            </p>

            <img
              src={`/demo.png`}
              alt="Img"
              className="w-full object-cover object-center mt-4"
            />
          </div>
        </div>
        {/* Right */}
        <div className="w-1/2 h-screen bg-white flex relative flex-col text-[#75171E] justify-center items-center">
          <h2 className="Font_Q">Day 2</h2>
          <h5 className="Font_Q text-[40px] uppercase mt-6">SANGEET Night</h5>
          <div className=" text-[16px] mt-6 flex flex-col justify-center items-center Font_YV gap-1">
            <span>
              <span className="font-semibold">DATE:</span> 25 March 2006
            </span>
            <span>
              <span className="font-semibold">TIME:</span> 4:00 PM
            </span>
            <span>
              <span className="font-semibold">VENUE:</span> La
              Mamounia,Marrakech
            </span>
          </div>

          <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
            Guests are welcomed for a relaxed and joyful afternoon as we begin
            the celebrations with Mehendi and Haldi ceremonies. These rituals
            are filled with laughter, music, and meaningful traditions shared
            with close family and friends.
          </p>

          {/* Design */}
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 left-0"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 right-0 rotate-90"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 right-0 rotate-180"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 left-0 -rotate-90"
            alt="Img"
          />
        </div>
      </div>

       {/* div-3 */}
      <div className="w-full min-h-screen flex">
        {/* Left */}
        <div className="w-1/2 h-screen bg-white flex relative flex-col text-[#75171E] justify-center items-center">
          <h2 className="Font_Q">Day 3</h2>
          <h5 className="Font_Q text-[40px] mt-6">WEDDING &</h5>
          <h5 className="Font_Q text-[40px]">RECEPTION</h5>
          <div className=" text-[16px] mt-6 flex flex-col Font_YV gap-1 justify-center items-center">
            <span>
              <span className="font-semibold">DATE:</span> 25 March 2006
            </span>
            <span>
              <span className="font-semibold">TIME:</span> 4:00 PM
            </span>
            <span>
              <span className="font-semibold">VENUE:</span> La
              Mamounia,Marrakech
            </span>
          </div>

          <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
            Guests are welcomed for a relaxed and joyful afternoon as we begin
            the celebrations with Mehendi and Haldi ceremonies. These rituals
            are filled with laughter, music, and meaningful traditions shared
            with close family and friends.
          </p>

          {/* Design */}
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 left-0"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 right-0 rotate-90"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 right-0 rotate-180"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 left-0 -rotate-90"
            alt="Img"
          />
        </div>

        {/* right */}
        <div className="w-1/2 h-screen flex flex-col bg-[#75171E] px-12 justify-center items-center">
          <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
            <h2 className="Font_Q text-[#E4BD95] uppercase">OutFit</h2>
            <p className="Font_YV text-[#E4BD95] mt-4">
              Light-coloured Indian or fusion wear
            </p>
            <p className="Font_YV text-[#E4BD95]">
              (Comfortable, breezy fabrics recommended)
            </p>

            <img
              src={`/demo.png`}
              alt="Img"
              className="w-full object-cover object-center mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardX;
