import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp } from "../../../animation/animation";
import Retails from "../../../assets/Industries/retail1 1.jpg";
import { Link } from "react-router-dom";

const IndustrieBanner2 = () => {
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

  return (
    <div>
      <div className="container mx-auto py-10 px-4 sm:px-8 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image section */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Retails}
              alt="Retail"
              className="w-[95%] md:w-full mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px] order-2 md:order-1">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-2xl md:text-3xl text-black"
            >
              <span className="bg-gray-100 px-3 py-1 rounded">Retail</span>
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-600 font-handwritting text-base md:text-lg leading-relaxed md:leading-8"
            >
              We specialize in{" "}
              <span className="text-xl">Telecommunications</span>
              <br />
              <span className="text-md">Retail</span> , providing comprehensive
              solutions for selling telecom products such as SIM cards, mobile
              plans, devices, and accessories. Our goal is to create seamless
              retail experiences that empower telecom businesses to effectively
              manage and grow their customer offerings.
            </motion.p>

            <div>
              <Link to="/retail">
                <motion.button
                  className="primary-btn bg-black text-white px-6 py-2 mt-6 shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-md"
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
    </div>
  );
};

export default IndustrieBanner2;
