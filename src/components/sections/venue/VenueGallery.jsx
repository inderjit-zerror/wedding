import React from "react";

const VenueGallery = () => {
    return (
        <div className="w-full min-h-screen flex px-15 pb-[15vw] gap-10">
            {/* Left */}
            <div className="w-1/2 h-fit flex flex-col">
                {/* 1 */}
                <div className="w-full flex h-fit ">
                    <div className="w-1/2 h-auto flex flex-col justify-between text-[#5F171D]">
                        <h2 className="Font_Q">01</h2>

                        <div className="w-full h-fit flex flex-col uppercase">
                            <p className="Font_YV">Outdoor</p>
                            <p className="Font_YV">Ceremony Area</p>
                        </div>
                    </div>
                    <div className="w-1/2 h-fit">
                        <img src={`/imgs/venue/horizontal_section/img1.webp`} alt="IMG" className="w-full aspect-auto" />
                    </div>
                </div>

                {/* 2 */}
                <div className="w-full flex flex-col h-fit gap-3 mt-[27vh] ">
                    <div className="w-full h-fit flex justify-between items-end  text-[#5F171D]">
                        <h2 className="Font_Q">02</h2>

                        <div className="w-fit h-fit flex justify-end items-end uppercase ">
                            <p className="Font_YV">Grand Entrance / Facade</p>
                        </div>
                    </div>
                    <div className="w-full h-fit">
                        <img src={`/imgs/venue/horizontal_section/img1.webp`} alt="IMG" className="w-full aspect-auto" />
                    </div>
                </div>


                {/* 3 */}
                <div className="w-full flex h-fit mt-[15vh] gap-2 ">
                    <div className="w-1/2 h-fit">
                        <img src={`/imgs/venue/horizontal_section/img1.webp`} alt="IMG" className="w-full object-cover object-center aspect-3/3" />
                    </div>
                    <div className="w-1/2 h-auto flex flex-col justify-between text-[#5F171D]">
                        <h2 className="Font_Q">03</h2>

                        <div className="w-full h-fit flex flex-col uppercase">
                            <p className="Font_YV">Outdoor</p>
                            <p className="Font_YV">Ceremony Area</p>
                        </div>
                    </div>

                </div>

            </div>



            {/* Right */}
            <div className="w-1/2 h-fit flex flex-col">
                {/* 4 */}
                <div className="w-full flex h-fit gap-2 ">
                    <div className="w-[70%] h-fit">
                        <img src={`/imgs/venue/horizontal_section/img4.webp`} alt="IMG" className="w-full object-cover object-center aspect-3/3" />
                    </div>
                    <div className="w-[30%] h-auto flex flex-col justify-between text-[#5F171D]">
                        <h2 className="Font_Q">04</h2>

                        <div className="w-full h-fit flex flex-col uppercase">
                            <p className="Font_YV">Outdoor</p>
                            <p className="Font_YV">Ceremony Area</p>
                        </div>
                    </div>

                </div>


                {/* 5 */}
                <div className="w-full flex h-fit mt-[15vh] gap-2 ">
                    <div className="w-1/2 h-auto flex flex-col justify-between text-[#5F171D] pl-20">
                        <h2 className="Font_Q">05</h2>

                        <div className="w-full h-fit flex flex-col uppercase">
                            <p className="Font_YV">Courtyard / </p>
                            <p className="Font_YV">Heritage</p>
                            <p className="Font_YV">Architecture</p>
                        </div>
                    </div>
                    <div className="w-1/2 h-fit">
                        <img src={`/imgs/venue/horizontal_section/img5.webp`} alt="IMG" className="w-full object-cover object-center aspect-3/4" />
                    </div>
                </div>

                  {/* 6 */}
                <div className="w-full flex flex-col h-fit gap-3 mt-[15vh] ">
                    <div className="w-full h-fit flex justify-between items-end  text-[#5F171D]">
                        <h2 className="Font_Q">06</h2>

                        <div className="w-fit h-fit flex justify-end items-end uppercase ">
                            <p className="Font_YV">Grand Entrance / Facade</p>
                        </div>
                    </div>
                    <div className="w-full h-fit">
                        <img src={`/imgs/venue/horizontal_section/img1.webp`} alt="IMG" className="w-full aspect-4/2" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default VenueGallery;
