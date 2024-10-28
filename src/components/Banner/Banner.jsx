import React from "react";
import Banner1 from "../../assets/team2.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";
 
const Banner = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-8 lg:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
       
        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="self-start"
        >
          <img
            src={Banner1}
            alt="Our team"
            className="w-full md:w-[95%] lg:w-full mx-auto object-cover rounded"
            loading="lazy"
          />
        </motion.div>
 
        {/* Text Section */}
        <div className="flex flex-col space-y-5 text-center md:text-left">
          {/* Title */}
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl sm:text-4xl font-handwritting leading-tight"
          >
            We believe that a team makes any project better
          </motion.h1>
 
          {/* Description */}
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-base sm:text-lg leading-relaxed font-handwritting"
          >
            At Xwola, we understand that collaboration is at the heart of every successful project. A strong team brings
            together diverse skills, experiences, and perspectives, enabling us to tackle challenges more effectively and
            innovate beyond boundaries. We believe that when talented individuals unite with a shared vision, the
            possibilities are endless. Whether it's crafting solutions, delivering exceptional service, or driving your
            vision forward, our team works together to make every project better and more impactful. Let Xwola be your
            partner in transforming ideas into reality.
          </motion.p>
 
          {/* Statistics Section */}
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="flex justify-center md:justify-start gap-6 md:gap-10"
          >
            {[
              { number: 15, label: "Years of Experience" },
              { number: 350, label: "Happy Clients" },
              { number: 34, label: "Awards Gained" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-handwritting">{stat.number}</p>
                <p className="text-gray-500 text-sm font-handwritting">{stat.label}</p>
              </div>
            ))}
          </motion.div>
 
          {/* Call-to-Action Button */}
          <motion.button
            variants={SlideUp(0.6)}
            initial="initial"
            animate="animate"
            className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] font-handwritting mt-5 md:self-start"
          >
            Discover Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};
 
export default Banner;