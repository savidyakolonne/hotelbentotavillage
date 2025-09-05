import React from "react";

const Roomcard = () => {
  const rooms = [
    {
      id: 1,
      title: "Deluxe Ocean View",
      category: "Luxury Suite",
      img: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&h=800&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "Executive King Room",
      category: "Business Suite",
      img: "https://images.unsplash.com/photo-1714974528646-ea024a3db7a7?w=1200&h=800&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      title: "Cozy Garden Retreat",
      category: "Single Room",
      img: "https://images.unsplash.com/photo-1713947501966-34897f21162e?w=1200&h=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="py-12 px-5 md:px-16 lg:px-24">
      {/* Section Heading */}
      <h1 className="text-3xl font-semibold text-center">Rooms & Suites</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Discover our range of luxurious rooms designed for comfort and style. Perfect for both business and leisure.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="max-w-80 w-full mx-auto hover:-translate-y-1 transition duration-300"
          >
            <img
              className="rounded-xl w-full h-52 object-cover"
              src={room.img}
              alt={room.title}
            />
            <h3 className="text-base text-slate-900 font-medium mt-3">
              {room.title}
            </h3>
            <p className="text-xs text-indigo-600 font-medium mt-1">
              {room.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roomcard;
