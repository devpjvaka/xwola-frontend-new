import React, { useState, useRef, useEffect } from "react";
import AIDATAScience from "../../../assets/Services/Banners/AIDataScience 1.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp } from "../../../animation/animation";
import { Link } from "react-router-dom";

const ServicesBanner3 = () => {
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
    <div className="py-12 px-4 md:py-24 md:px-8 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={AIDATAScience}
            alt="AI and Data Science"
            className="w-full max-w-md md:max-w-full rounded-lg"
          />
        </motion.div>

        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-2xl md:text-3xl  text-black"
          >
            <span className="bg-gray-100 px-3 py-1 rounded">
              AI & Data Science
            </span>
          </motion.h1>

          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            animate="animate"
            className="text-gray-600  text-base md:text-lg leading-relaxed md:leading-8 "
          >
            AI & Data Science are at the forefront of our software services,
            empowering businesses to make smarter decisions through data-driven
            insights and automation. Our expert team leverages advanced machine
            learning algorithms, predictive analytics, and big data solutions to
            help you optimize processes, enhance customer experiences, and
            uncover hidden patterns in your data. Whether it's building
            intelligent systems or providing real-time analytics, we help
            transform your data into actionable strategies for business growth
            and innovation.
          </motion.p>

          <Link to="/ai">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="primary-btn  bg-black text-white shadow  w-full md:w-auto"
              style={{ minWidth: "150px" }}
            >
              Learn more
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner3;
