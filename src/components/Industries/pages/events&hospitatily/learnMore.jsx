import React from "react";
import { motion } from "framer-motion";
import img from "../../../../assets/Industries/learn.webp"
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-gold">
          Redefining Hospitality with Technology
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Xwola brings seamless event management and personalized guest
          experiences with innovative solutions. Elevate your events with our
          tailored software tools.
        </p>
        <motion.img
          src={img}
          alt="Learn More Visual"
          className="md:w-2/3  mx-auto rounded shadow-lg"
          style={{ width: '700px', height: '400px' }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
          <Link to ="/events&hospitality">
        <button
          className="primary-btn  text-black mt-10 px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition duration-300"
         
        >
          Go Back
        </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default LearnMore;
