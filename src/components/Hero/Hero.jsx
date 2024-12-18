import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import HeroPng from "../../assets/home.png";
import img1 from "../../assets/software-hero.jpg";
import img2 from "../../assets/events-hero.jpg";
import img3 from "../../assets/SEO-hero.jpg";
import img4 from "../../assets/tele-hero.jpg";
import img5 from "../../assets/retail-hero.jpg";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 mt-15 ">
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
         {/* <div className="order-1 md:order-2 flex justify-center md:justify-end items-start  mt-24 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src={img1}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src={img2}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src={img3}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 mt-10 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src={img4}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src={img5}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div> */}

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
            className="text-xl text-base text-gray-500"
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
                className="primary-btn bg-black text-white shadow w-1/2 md:w-auto mb-2 mt-5"
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
                className="primary-btn w-1/2 md:w-auto mt-5"
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
