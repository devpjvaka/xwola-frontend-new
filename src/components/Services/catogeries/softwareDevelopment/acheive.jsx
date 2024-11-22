import React from "react";
import { motion, useInView } from "framer-motion";
import mountainImage from "../../../../assets/Services/catogeries/softwaredevelopment/mountain.jpg"; // Replace with the path to your image

const Achieve = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-gray-400 py-16 px-8" ref={ref}>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Image Section (Left Side) */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <img
              src={mountainImage}
              alt="Mountain landscape illustration"
              className="w-full h-auto shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-50 smoke-effect"></div>
          </div>
        </motion.div>

        {/* Text Section (Right Side) */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md inline-block mb-4">
            What makes Our Company different
          </div>
          <h1 className="text-4xl text-yellow-400 mb-4 leading-tight">
            We achieve project success{" "}
            <span className="text-black">no matter what</span>
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            Our company does not pass mere project administration off as project
            management, which, unfortunately, often happens in the market. We
            practice real project management, achieving project success for our
            clients no matter what.
          </p>
          <motion.button
            className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            See how we do it
            <span className="text-xl">→</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Achieve;
