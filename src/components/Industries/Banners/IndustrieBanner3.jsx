import React, { useState, useRef, useEffect } from "react";
import { SlideUp } from "../../../animation/animation";
import Events from "../../../assets/Industries/events1 2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const IndustrieBanner3 = () => {
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
    <div className="container mx-auto py-10 px-4 sm:px-8 lg:py-14 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Image section */}
        <div className="flex flex-col justify-center">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={Events}
            alt="Events and Hospitality"
            className="w-[95%] md:w-full mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text section */}
        <div className="space-y-5 flex justify-center text-center md:text-left flex-col">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-2xl md:text-3xl text-black "
          >
            <span className="bg-gray-100 px-3 py-1 rounded">
              Events & Hospitality
            </span>
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-600  text-base md:text-lg leading-relaxed md:leading-8 "
          >
            Our focus lies in{" "}
            <span className=" text-md">
              Events & Hospitality
            </span>
            <br />
            providing tailored solutions that enhance guest experiences and
            streamline event management. Our mission is to craft unforgettable
            moments through exceptional service, innovative technology, and
            meticulous planning.
            
          </motion.p>
          <div>
          <Link to = "/events&hospitality"> 
          <motion.button
            className="primary-btn  bg-black text-white px-6 py-2 mt-6 shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-md"
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            Learn more
          </motion.button>
          </Link>

          {/* Popover with Enhanced Animation */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrieBanner3;
