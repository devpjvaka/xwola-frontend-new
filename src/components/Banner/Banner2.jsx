import React from "react";
import Banner2_ from "../../assets/banner2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";

const Banner2 = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Text section */}
          <div
            className="space-y-5 flex justify-center 
          flex-col xl:max-w-[500px]"
          >
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              Empowering ideas, transforming possibilities.
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-black-500 text-sm leading-7"
            >
              At Xwola, we believe that every idea holds the potential to shape the future. Our mission is to empower those ideas by providing the expertise, technology, and innovation needed to bring them to life. We transform possibilities into tangible outcomes, helping businesses and individuals alike realize their full potential. By pushing the boundaries of what’s possible, we not only deliver solutions but also inspire growth and progress. With Xwola by your side, your ideas can drive change, unlock new opportunities, and lead to a brighter future.
            </motion.p>

            

            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white 
              shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Contact Us
              </motion.button>
            </div>
          </div>

          {/* Image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner2_}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
