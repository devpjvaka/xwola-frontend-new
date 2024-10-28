import React from "react";
import Banner2_ from "../../assets/empower4.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";
import { Link } from "react-router-dom";
 
const Banner2 = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-8 lg:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
       
        {/* Image Section - Positioned second on desktop */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="order-1 md:order-2"
        >
          <img
            src={Banner2_}
            alt="Empowering Ideas"
            className="w-full md:w-[95%] lg:w-full mx-auto object-cover rounded"
            loading="lazy"
          />
        </motion.div>
 
        {/* Text Section - Positioned first on desktop */}
        <div className="order-2 md:order-1 flex flex-col space-y-5 text-center md:text-left">
         
          {/* Title */}
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl sm:text-4xl font-handwritting leading-tight"
          >
            Empowering ideas, transforming possibilities.
          </motion.h1>
 
          {/* Description */}
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-base sm:text-lg leading-relaxed font-handwritting"
          >
            At Xwola, we believe that every idea holds the potential to shape the future. Our mission is to empower
            those ideas by providing the expertise, technology, and innovation needed to bring them to life. We
            transform possibilities into tangible outcomes, helping businesses and individuals alike realize their full
            potential. By pushing the boundaries of what’s possible, we not only deliver solutions but also inspire
            growth and progress. With Xwola by your side, your ideas can drive change, unlock new opportunities, and
            lead to a brighter future.
          </motion.p>
 
          {/* Call-to-Action Button */}
          <div>
            <Link to="/contactus">
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] font-handwritting mt-5"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Banner2;