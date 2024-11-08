import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";

const TestimonialData = [
  {
    id: 1,
    name: "Shivaya",
    designation: "Developer",
    img: "https://i.pravatar.cc/300?img=1",
    text: "Their team was incredibly responsive, professional, and committed to bringing our vision to life. From concept to execution, they ensured every detail was perfect. We couldn’t be happier with the results!",
  },
  {
    id: 2,
    name: "Maha Deva",
    designation: "Designer",
    img: "https://i.pravatar.cc/300?img=2",
    text: "Their innovative approach and attention to detail made all the difference in our project. They truly transformed our ideas into reality, and we saw immediate improvements in our operations.",
  },
  {
    id: 3,
    name: "Sri Hari",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=3",
    text: "They not only understood our goals but took them to the next level. Their creativity and professionalism made the entire process smooth and enjoyable. Highly recommended!",
  },
];

const Testimonial = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:py-14 bg-gray-100">
      {/* Heading Section */}
      <motion.div
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-center max-w-[550px] mx-auto mb-10"
      >
        <h2 className="text-2xl sm:text-3xl  text-black py-5">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-base sm:text-lg ">
          We value our clients' feedback and are proud of the impact we make
          together.
        </p>
      </motion.div>

      {/* Testimonial Cards */}
      <div className="bg-black py-8 px-4 sm:px-10 lg:px-12 rounded-lg shadow-lg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TestimonialData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="group p-6 border border-gray-600 rounded-lg bg-black text-white transition-all duration-300 transform hover:bg-white hover:shadow-lg"
            >
              {/* Upper Section */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-gray-500"
                  loading="lazy"
                />
                <div>
                  <p className="text-lg  group-hover:text-black">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm group-hover:text-black ">
                    {testimonial.designation}
                  </p>
                </div>
              </div>

              {/* Star Rating Section */}
              <div className="text-yellow-500 text-sm text-center mb-4 md:text-left">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Testimonial Text */}
              <div className="border-t border-gray-500 pt-4">
                <p className="text-sm text-gray-300 group-hover:text-black ">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
