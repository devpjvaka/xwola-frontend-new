import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";

const Newsletter = () => {
  return (
    <div className="max-w-[600px] mx-auto space-y-8 py-16 px-6 bg-white rounded-xl shadow-xl">
      {/* Title */}
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-4xl font-bold font-serif text-center text-black"
      >
        Join Our Newsletter
      </motion.h1>
      
      {/* Description */}
      <motion.p
        variants={SlideUp(0.3)}
        initial="initial"
        whileInView="animate"
        className="text-gray-700 text-center max-w-[450px] mx-auto text-base leading-relaxed"
      >
        Get the latest updates, industry trends, and exclusive content delivered straight to your inbox. Stay connected with Xwola for all the insights you need!
      </motion.p>

      {/* Form Section */}
      <motion.div
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="flex flex-col sm:flex-row justify-center gap-3 mt-8 items-center"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          aria-label="Email Address"
          className="px-5 py-4 w-full sm:w-[300px] border border-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none focus:border-black text-black bg-white placeholder-gray-500 transition-all"
        />
        <button
          className="bg-black text-white px-8 py-4 uppercase font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Subscribe
        </button>
      </motion.div>

      {/* Validation Message (Optional) */}
      <motion.p
        variants={SlideUp(0.5)}
        initial="initial"
        whileInView="animate"
        className="text-xs text-red-500 text-center"
      >
        Please enter a valid email address.
      </motion.p>
    </div>
  );
};

export default Newsletter;