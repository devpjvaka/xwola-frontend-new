import React from "react";
import Banner1 from "../../assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";

const Banner = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>

          {/* Text section */}
          <div
            className="space-y-5 flex justify-center 
          flex-col"
          >
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold font-serif"
            >
              We believe that a team makes any project better
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              animate="animate"
              className="text-black-500 text-sm leading-7"
            >
              At Xwola, we understand that collaboration is at the heart of every successful project. A strong team brings together diverse skills, experiences, and perspectives, enabling us to tackle challenges more effectively and innovate beyond boundaries. We believe that when talented individuals unite with a shared vision, the possibilities are endless. Whether it's crafting solutions, delivering exceptional service, or driving your vision forward, our team works together to make every project better and more impactful. Let Xwola be your partner in transforming ideas into reality.
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="flex gap-3"
            >
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif"> 15 </p>
                <p className="text-gray-500 text-sm"> Years of Experiance </p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif"> 350 </p>
                <p className="text-gray-500 text-sm"> Happy Clients </p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif"> 34 </p>
                <p className="text-gray-500 text-sm"> Award Gained </p>
              </div>
            </motion.div>
            

            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                animate="animate"
                className="primary-btn  bg-black text-white 
              shadow-[5px_5px_0px_0px_#6c6c6c]"
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

export default Banner;
