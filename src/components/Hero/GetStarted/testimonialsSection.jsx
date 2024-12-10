import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alice Johnson",
    feedback: "Xwola transformed our business with their innovative solutions!",
    image: "https://i.pravatar.cc/300?img=1",
    rating: 5,
  },
  {
    name: "Mark Spencer",
    feedback: "The team at Xwola was a pleasure to work with. Highly recommend!",
    image: "https://i.pravatar.cc/300?img=2",
    rating: 4,
  },
  { 
    name: "Sophia Lee",
    feedback: "Amazing service! Our app has never been better.",
    image: "https://i.pravatar.cc/300?img=3",
    rating: 5,
  },
  {
    name: "John Doe",
    feedback: "Highly professional and innovative team.",
    image: "https://i.pravatar.cc/300?img=1",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gold">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image */}
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s picture`}
              className="rounded-full w-20 h-20 mb-4"
            />

            {/* Quote Icon */}
            <div className="text-gold text-4xl mb-4">“</div>

            {/* Feedback */}
            <p className="text-gray-300 italic mb-4">{testimonial.feedback}</p>

            {/* Name */}
            <h3 className="text-lg font-bold text-[#fab116] mb-2">{testimonial.name}</h3>

            {/* Star Ratings */}
            <div className="flex text-[#fab116]">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i}>&#9733;</span> // Star Unicode
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
