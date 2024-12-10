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
    <div className="pt-20 lg:pt-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
          <div className="space-y-6">
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
              <Link to="/telicommunications">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="primary-btn bg-black text-white shadow w-full md:w-auto px-6 py-3 rounded-lg mt-5"
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
