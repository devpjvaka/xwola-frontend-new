import React from "react";
import { motion } from "framer-motion";
import Brand1 from "../../assets/brands/arenase.png";
import Brand2 from "../../assets/brands/eaufladen.png";
import Brand3 from "../../assets/brands/itopup.png";
import Brand4 from "../../assets/brands/phl.png";
import Brand5 from "../../assets/brands/pj.png";
import Brand6 from "../../assets/brands/rb.png";
 
const SlideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
});
 
const Clients = () => {
  return (
    <div className="py-10 max-w-6xl mx-auto text-center px-6 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg shadow-lg">
      <motion.h2
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl xl:text-4xl mb-5"
      >
        Our Clients
      </motion.h2>
 
      {/* Animated underline */}
      <div className="w-32 h-[2px] mx-auto bg-yellow-500 my-5 relative">
        <motion.div
           initial={{ width: 0, y: 10 }}  // Start slightly below
    animate={{ width: "100%", y: 0 }} // Slide up to original position
    transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute h-[2px] bg-yellow-500 bottom-0 left-0"
        />
      </div>
 
      <motion.p
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-base md:text-lg lg:text-xl text-gray-500 max-w-4xl mx-auto mb-8 leading-relaxed"
      >
        At Xwola, we are proud to serve a diverse clientele across various
        industries, providing tailored software solutions that empower their
        growth and drive innovation. Our commitment to understanding their
        unique needs has established strong partnerships built on trust and
        excellence.
      </motion.p>
 
      <div className="flex flex-wrap justify-center lg:justify-between gap-6">
        {[Brand1, Brand2, Brand3, Brand4, Brand5, Brand6].map((brand, index) => (
          <motion.img
            key={index}
            variants={SlideUp(0.2 + index * 0.2)}
            initial="initial"
            whileInView="animate"
            src={brand}
            alt={`Brand ${index + 1}`}
            className="w-[120px] sm:w-[150px] transition-transform duration-300 transform hover:scale-110 hover:rotate-2 hover:shadow-lg hover:shadow-yellow-400/40"
          />
        ))}
      </div>
    </div>
  );
};
 
export default Clients;
 