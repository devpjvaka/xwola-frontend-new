import React from "react";
import { motion } from "framer-motion";
import Ai from "../../../../assets/Services/catogeries/ai/ai 2.webp";
import Feature from "../ai/featuresection";
import Showcase from "../ai/showcase";
import CallAction from "../ai/callaction";

const HeroSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mt-20 bg-black"
      >
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </motion.svg>
          <img
            className="object-cover w-full h-59 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={Ai}
            alt="AI Illustration"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-2xl px-6 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400"
            >
              Unlock the Power of{" "}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-5 font-sans text-4xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
            >
              AI & Data Science
              <br className="hidden md:block" />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pr-5 mb-5 text-base md:text-xl bg-gradient-to-r from-[#fab116] to-[#fab116] bg-clip-text text-transparent"
            >
              Transform your business with actionable insights and intelligent
              automation.
            </motion.p>
            <motion.button
              className="mt-4 text-[#fab116] py-3 px-8 rounded-md font-semibold transition-all"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a href="/contactus" className="inline-block">
                  <button
                    type="button"
                    className=" mt-2 rounded-lg border-2 border-[#fab116] text-white px-4 py-2 text-sm sm:text-lg  hover:bg-black hover:text-white transition"
                  >
                    Get in touch
                  </button>
                </a>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      <Feature />
      <Showcase />
      <CallAction />
    </>
  );
};
export default HeroSection;
