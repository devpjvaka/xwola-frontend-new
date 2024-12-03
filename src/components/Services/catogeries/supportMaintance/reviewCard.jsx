import React from "react";

const TestimonialsCard = ({ name, review, rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i <= rating ? "#fab116" : "gray"}
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.771 1.558 8.305-7.494-4.181-7.494 4.181 1.558-8.305-6.064-5.771 8.332-1.151z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="p-8 bg-[#222222] rounded-3xl flex flex-col items-center text-white">
      {/* Quotation Marks */}
      <p className="text-6xl font-serif rotate-180 text-gray-500">“</p>

      {/* Review Content */}
      <p className="mt-4 text-center">{review}</p>

      {/* Reviewer Details */}
      <div className="flex items-center gap-4 mt-8">
        {/* Avatar */}
        <div className="h-14 w-14 flex justify-center items-center text-black text-3xl bg-white rounded-full">
          {name.charAt(0).toUpperCase()}
        </div>
        {/* Name and Rating */}
        <div>
          <p className="font-bold">{name}</p>
          <div className="flex mt-1">{renderStars(Math.round(rating))}</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCard;
