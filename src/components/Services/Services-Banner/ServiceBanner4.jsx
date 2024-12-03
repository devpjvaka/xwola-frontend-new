import Seo from "../../../assets/Services/Banners/seo copy.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp } from "../../../animation/animation";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceBanner4 = () => {
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
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="order-1 md:order-2 flex justify-cente h-[500px] w-[680px]"
        >
          <img
            src={Seo}
            alt="SEO"
            className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-2xl md:text-3xl text-black "
          >
            <span className="bg-gray-100 px-3 py-1 rounded break-words">
              {" "}
              {/* Added break-words class */}
              SEO
            </span>
          </motion.h1>

          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            animate="animate"
            className="text-gray-600  text-base md:text-lg leading-relaxed md:leading-8"
          >
            SEO (Search Engine Optimization) is the process of improving a
            website's visibility in search engine results. It involves
            optimizing content, keywords, and technical elements to attract more
            organic traffic, enhance user experience, and rank higher in search
            engines like Google. A well-executed SEO strategy helps businesses
            connect with their target audience and achieve long-term growth.
          </motion.p>
          <Link to="/seo">
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
export default ServiceBanner4;
