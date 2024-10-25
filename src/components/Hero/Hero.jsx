import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'; // Importing the Typewriter component
import HeroPng from "../../assets/img_tst 2.png"; // Assuming this is the path to the image

const Hero = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[500px] gap-10">
        {/* Text Section */}
        <div
          className="flex flex-col justify-center 
          gap-5 md:pr-8 lg:pr-14 text-center md:text-left pt-20 md:pt-0 px-10"
        >
          <motion.h1
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView={"animate"}
            className="text-4xl font-handwritting"
          >
            <span className="text-black">Innovating Today</span> for the Digital Solutions of{" "}
            <span style={{ color: '#b27200' }}>
              <Typewriter
                words={['Tomorrow']}
                loop={false} // Set to false if you don't want the typing to repeat
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>


          </motion.h1>

          <motion.p
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView={"animate"}
            className="text-lg text-gray-500 font-handwritting  text-justify"
          >
            At Xwola, we build innovative software solutions that empower businesses to thrive.
            Our team focuses on cutting-edge technology and user-driven design to solve modern challenges.
            From scalable applications to tailored services,we create tools for today’s needs.
            Together,we’re shaping the digital future,one solution at a time.
          </motion.p>

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <motion.button
              variants={SlideUp(0.8)}
              initial="initial"
              animate="animate"
              className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] font-handwritting w-full md:w-auto"
              style={{ minWidth: '150px' }} // Ensures both buttons have the same minimum width
            >
              Get started
            </motion.button>

            <Link to="/contactus">
              <motion.button
                variants={SlideUp(1.1)}
                initial="initial"
                animate="animate"
                className="primary-btn uppercase font-handwritting w-full md:w-auto"
                style={{ minWidth: '150px' }} // Ensures both buttons have the same minimum width
              >
                Contact Us
              </motion.button>
            </Link>
          </div>


        </div>

        {/* Images Section */}
        <div className="flex flex-col items-center justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={HeroPng}
            alt="Hero Image"
            className="w-[90%] md:w-[500px] object-cover md:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
