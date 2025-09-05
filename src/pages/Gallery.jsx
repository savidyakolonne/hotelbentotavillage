import React from "react";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=862&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&w=703&auto=format&fit=crop",
  ];

  return (
    <section className="py-35 px-6 md:px-16 lg:px-24 bg-amber-200">
      {/* Section Title */}
      <h1 className="text-3xl font-semibold text-center">Our Latest Creations</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        A visual collection of our most recent works – each piece crafted with
        intention, emotion, and style.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative group rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              className="w-full h-64 object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-lg font-medium">Image Title {i + 1}</h1>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/70 mt-1"
              >
                Show More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
