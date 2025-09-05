import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "/src/assets/hotelimghero.png",
    "/src/assets/heroImage.png",
    "/src/assets/herohbv.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Images layered on top of each other */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Hero content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Hotel</h1>
            <p className="mt-4 text-lg md:text-xl max-w-xl">
              Luxury & Comfort awaits you ✨
            </p>
          </div>
        </div>
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
              currentIndex === idx ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
