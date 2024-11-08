import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";
 
const Newsletter = () => {
  return (
    <div className="p-4 sm:p-8"> {/* Outer wrapper for margin around the container */}
      <div className="max-w-[90%] sm:max-w-[600px] mx-auto space-y-6 py-10 px-4 sm:py-16 bg-white rounded-xl shadow-lg border border-gray-300 sm:border-gray-400">
        {/* Title */}
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-2xl sm:text-3xl  text-center text-black"
        >
          Join Our Newsletter
        </motion.h1>
 
        {/* Description */}
        <motion.p
          variants={SlideUp(0.3)}
          initial="initial"
          whileInView="animate"
          className="text-gray-700 text-center mx-auto max-w-[450px] text-base sm:text-lg leading-relaxed "
        >
          Get the latest updates, industry trends, and exclusive content delivered
          straight to your inbox. Stay connected with Xwola for all the insights
          you need!
        </motion.p>
 
        {/* Form Section */}
        <motion.div
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6 "
        >
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email Address"
            className="w-full sm:w-[300px] px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none transition-all text-black placeholder-gray-500"
          />
          <button
            className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-lg shadow-md uppercase hover:bg-gray-800 transition duration-300 focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Subscribe
          </button>
        </motion.div>
 
        {/* Optional Validation Message */}
        {/* <motion.p
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView="animate"
            className="text-xs text-red-500 text-center"
          >
            Please enter a valid email address.
          </motion.p> */}
      </div>
    </div>
  );
};
 
export default Newsletter;
 