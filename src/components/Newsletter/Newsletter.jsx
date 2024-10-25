import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";

const Newsletter = () => {
  return (
    <div className="max-w-[90%] mx-auto space-y-8 py-10 px-4 sm:py-16 sm:px-6 bg-white rounded-xl shadow-xl border border-gray-400 mb-4 sm:mb-0 sm:border-2 sm:border-gray-500 sm:max-w-[600px]">
      {/* Title */}
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl sm:text-4xl font-handwritting text-center text-black"
      >
        Join Our Newsletter
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={SlideUp(0.3)}
        initial="initial"
        whileInView="animate"
        className="text-gray-700 text-center max-w-[450px] mx-auto text-base sm:text-lg leading-relaxed font-handwritting"
      >
        Get the latest updates, industry trends, and exclusive content delivered straight to your inbox. Stay connected with Xwola for all the insights you need!
      </motion.p>

      {/* Form Section */}
      <motion.div
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="flex flex-col sm:flex-row justify-center gap-3 mt-8 items-center font-handwritting"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          aria-label="Email Address"
          className="px-4 py-3 w-full sm:w-[300px] border border-black-400 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none focus:border-black text-black bg-white placeholder-gray-500 transition-all"
        />
        <button
          className="bg-black text-white w-full sm:w-auto px-8 py-4 uppercase font-handwritting rounded-lg shadow-md hover:bg-gray-800 transition duration-300 focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Subscribe
        </button>
      </motion.div>

      {/* Validation Message (Optional) */}
      {/* <motion.p
      variants={SlideUp(0.5)}
      initial="initial"
      whileInView="animate"
      className="text-xs text-red-500 text-center"
    >
      Please enter a valid email address.
    </motion.p> */}
    </div>




  );
};

export default Newsletter;
