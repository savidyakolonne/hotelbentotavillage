import React from "react";
import logo from "/logohbv.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start py-10 px-6 md:px-16 lg:px-24 gap-10">
      {/* Left text content */}
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Why us</h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          We are very proud of to be Sri Lankan and very happy to live here because Sri Lanka is a wonderful island. 
          It is a great opportunity for us to have our village on the beach and we always spend our leisure moments there, 
          sharing with the nature. Tourism and fishing are the main industries in the area, and obviously we chose our 
          future career in the tourism industry.
        </p>
         <div>
        <button type="button" className="w-40 py-3 active:scale-95 transition text-sm text-white rounded-full bg-slate-700 cursor-pointer"><p className="mb-0.5">More</p></button>
      </div>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={logo}
          alt="Hotel Logo"
          className="w-64 md:w-80 lg:w-[400px] object-contain"
        />
      </div>
     
    </div>
  );
};

export default About;
