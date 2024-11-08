import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import HeroPng from "../../assets/img_tst 2.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl "
          >
            <span className="text-black">Innovating Today</span> for the Digital
            Solutions of{" "}
            <span style={{ color: "#b27200" }}>
              <span className="block">
                {" "}
                {/* Block for all screen sizes */}
                <Typewriter
                  words={["Tomorrow"]}
                  loop={false} // Set to false if you don't want the typing to repeat
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-700 "
          >
            At Xwola, we build innovative software solutions that empower
            businesses to thrive. Our team focuses on cutting-edge technology
            and user-driven design to solve modern challenges. From scalable
            applications to tailored services, we create tools for today’s
            needs. Together, we’re shaping the digital future, one solution at a
            time.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center md:justify-start">
            <Link to="/get-started">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="primary-btn bg-black text-white shadow w-full md:w-auto"
                style={{ minWidth: "150px" }}
              >
                G<span className="lowercase">et started</span>
              </motion.button>


            </Link>
            <Link to="/contactus">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="primary-btn   w-full md:w-auto"
                style={{ minWidth: "150px" }}
              >
                C<span className="lowercase">ontact Us</span>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={HeroPng}
            alt="Hero"
            className="w-[90%] md:w-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
