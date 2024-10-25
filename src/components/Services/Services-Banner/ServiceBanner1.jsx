import React from "react";
import Software_dev from "../../../assets/Services/Banners/SoftwareDevelopment.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../../animation/animation";
 
const ServicesBanner1 = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image section */}
          <div>
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Software_dev}
              alt=""
              className="w-[95%] md:w-full mx-auto rounded-lg"
            />
          </div>
 
          {/* Text section */}
          <div className="space-y-5">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-3xl text-black-500 font-handwritting relative"
            >
              <span className="text-black px-2 py-1 rounded">
                Software Development
              </span>
            </motion.h1>
 
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              animate="animate"
              className="text-gray-500 font-handwritting text-xl leading-7 text-center md:text-left text-justify"
            >
              Software development is a collaborative process where creativity,
              innovation, and problem-solving come together to build solutions
              that address real-world challenges. At the heart of software
              development is teamwork, where developers, designers, and
              stakeholders work closely to bring ideas to life. Each team member
              plays a crucial role, whether in coding, testing, designing, or
              project management, ensuring that the final product is both
              functional and user-friendly.      
            </motion.p>
 
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                animate="animate"
                className="primary-btn font-handwritting bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] mt-8"
              >
                Discover Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ServicesBanner1;