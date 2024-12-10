import { motion, AnimatePresence } from "framer-motion";
import Tele from "../../../assets/Industries/communications 2.jpg";
import { SlideUp } from "../../../animation/animation";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <div className="container mx-auto py-10 px-4 sm:px-8 lg:py-14 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image section */}
          <div className="flex justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Tele}
              alt="Telecommunications"
              className="w-[90%] md:w-full rounded-lg shadow-md"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 flex justify-center text-center md:text-left flex-col">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-2xl md:text-4xl font-bold text-black"
            >
              Telecommunications
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              animate="animate"
              className="text-gray-600 text-base md:text-lg leading-relaxed"
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

              {/* Popover with Enhanced Animation */}
              <Link to="/telicommunications">
                <motion.button
                  className="primary-btn bg-black text-white px-6 py-2 mt-6 shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-md"
                  onClick={() => setPopoverOpen(!popoverOpen)}
                >
                  Learn more
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default IndustrieBanner1;
