import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/banner1-team.png"
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-gold">
          Learn More About Our Vision
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          At Xwola, we believe in the power of teamwork, collaboration, and
          innovation to transform ideas into impactful solutions. Learn more
          about our journey and how we aim to drive your projects forward.
        </p>
        <motion.img
          src={hero}
          alt="Learn More Visual"
          className="w-full md:w-2/3 mx-auto rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
          <Link to = "/home">
        <button
          className="primary-btn bg-gold text-black mt-10 px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition duration-300"
          onClick={() => (window.location.href = "/")}
        >
          Go Back
        </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Team;
