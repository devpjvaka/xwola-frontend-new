import React from "react";
import AIDATAScience from "../../../assets/Services/Banners/AIDataScience 1.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../../animation/animation";
 
const ServicesBanner3 = () => {
  return (
    <div className="py-12 px-4 md:py-24 md:px-8 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={AIDATAScience}
            alt="AI and Data Science"
            className="w-full max-w-md md:max-w-full rounded-lg"
          />
        </motion.div>
 
        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-2xl md:text-3xl font-handwritting text-black"
          >
            <span className="bg-gray-100 px-3 py-1 rounded">
              AI & Data Science
            </span>
          </motion.h1>
 
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            animate="animate"
            className="text-gray-600 font-handwritting text-base md:text-lg leading-relaxed md:leading-8 text-justify"
          >
            AI & Data Science are at the forefront of our software services,
            empowering businesses to make smarter decisions through data-driven
            insights and automation. Our expert team leverages advanced machine
            learning algorithms, predictive analytics, and big data solutions to
            help you optimize processes, enhance customer experiences, and
            uncover hidden patterns in your data. Whether it's building
            intelligent systems or providing real-time analytics, we help
            transform your data into actionable strategies for business growth
            and innovation.
          </motion.p>
 
          <motion.button
            variants={SlideUp(0.6)}
            initial="initial"
            animate="animate"
            className="primary-btn font-handwritting bg-black text-white px-6 py-2 mt-6 shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-md"
          >
            Discover Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};
 
export default ServicesBanner3;
 
