import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import HeroPng from "../../assets/home_img.jpg";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 mt-15">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end items-start">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={HeroPng}
            alt="Hero"
            className="w-[100%] md:w-[350px] md:max-h-[500px] md:h-auto lg:w-[700px] object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="order-2 md:order-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl"
          >
            <span className="text-black">Innovating Today</span> for the Digital Solutions of
            <span
              className="block md:block lg:inline font-bold leading-normal"
              style={{ color: "#fab116" }}
            >
              <span className="hidden lg:inline">&nbsp;</span>
              <Typewriter
                words={["Tomorrow"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600"
          >
            At Xwola, we build innovative software solutions that empower businesses
            to thrive. Our team focuses on cutting-edge technology and user-driven
            design to solve modern challenges. From scalable applications to tailored
            services, we create tools for today’s needs. Together, we’re shaping the
            digital future, one solution at a time.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center md:justify-start">
            <Link to="/getStarted">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="primary-btn bg-black text-white shadow w-full md:w-auto mb-2 mt-5"
                style={{ minWidth: "150px" }}
              >
                Get started
              </motion.button>
            </Link>
            <Link to="/contactus">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="primary-btn w-full md:w-auto mt-5"
                style={{ minWidth: "150px" }}
              >
                Contact us
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
