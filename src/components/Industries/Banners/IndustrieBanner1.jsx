import { motion, AnimatePresence } from "framer-motion";
import Tele from "../../../assets/Industries/communications 2.jpg";
import { SlideUp } from "../../../animation/animation";
import React, { useState, useRef, useEffect } from "react";

// Define your default component as a const function
const IndustrieBanner1 = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close popover if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setPopoverOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Animation variants for the popover
  const popoverVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotateY: 10,
      transition: { duration: 0.3 },
    },
  };

  const shimmerVariants = {
    shimmer: {
      backgroundPosition: ["-100%", "200%"],
      transition: { duration: 3, repeat: Infinity },
    },
  };
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Tele}
              alt="Telecommunications illustration" // Added alt text for accessibility
              className="w-[95%] md:w-full mx-auto rounded-lg shadow-md" // Rounded corners and shadow for aesthetics
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 flex justify-center flex-col">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-2xl md:text-3xl text-black font-handwritting"
            >
              <span className="bg-gray-100 px-3 py-1 rounded">
                Telecommunications
              </span>
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 font-handwritting text-lg md:text-xl leading-7 text-justify"
            >
              Telecom software development provides telcos with powerful
              solutions that automate service and business operations while
              enabling the seamless introduction of new, value-added customer
              offerings.
              <span className="block mt-4">
                We specialize in Telecommunications Retail, offering
                comprehensive solutions for the sale of telecom products,
                including SIM cards, mobile plans, devices, and accessories. Our
                focus is on providing seamless retail experiences that empower
                telecom businesses to efficiently manage and grow their customer
                offerings.
              </span>
            </motion.p>

            <div>
              <motion.button
                className="primary-btn font-handwritting bg-black text-white px-6 py-2 mt-6 shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-md"
                onClick={() => setPopoverOpen(!popoverOpen)}
              >
                Discover Now
              </motion.button>

              {/* Popover with Enhanced Animation */}
              <AnimatePresence>
                {popoverOpen && (
                  <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={() => setPopoverOpen(false)}
                  >
                    {/* Background overlay with blur effect */}
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      exit={{ opacity: 0 }}
                    />

                    {/* Increased height and width for the popover box */}
                    <motion.div
                      ref={popoverRef}
                      className="relative z-10 bg-white border border-gray-200 rounded-xl shadow-xl p-8 w-3/4 h-3/4 md:max-w-2xl mx-auto flex flex-col items-center justify-center text-center space-y-4"
                      variants={popoverVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.h3
                        className="text-2xl font-handwritting mb-3 text-gradient bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent"
                        variants={shimmerVariants}
                        animate="shimmer"
                        style={{
                          backgroundSize: "200%",
                          backgroundPosition: "0%",
                          WebkitBackgroundClip: "text",
                        }}
                      >
                        Upcoming Features
                      </motion.h3>
                      <p className="text-gray-700 font-handwritting text-lg">
                        This page is under construction. Please check back soon
                        for updates!
                      </p>

                      <motion.button
                        onClick={() => setPopoverOpen(false)}
                        className="primary-btn text-2xl font-handwritting mb-3 text-gradient bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent hover:text-black transition duration-300"
                      >
                        Close
                      </motion.button>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrieBanner1;
