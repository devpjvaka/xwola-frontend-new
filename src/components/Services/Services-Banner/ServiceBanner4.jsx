import Seo from "../../../assets/Services/Banners/seo 1.webp";
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

  return (
    <div className="pt-20 lg:pt-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="order-1 md:order-2 flex justify-center mb-4"
        >
          <img
            src={Seo}
            alt="SEO"
            className="w-full h-auto max-w-full md:h-[500px] md:w-[680px] rounded-lg shadow-lg"
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
              SEO
            </span>
          </motion.h1>

          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            animate="animate"
            className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-8"
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
              className="primary-btn bg-black text-white px-6 py-2 mt-6 shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-md"
              onClick={() => setPopoverOpen(!popoverOpen)}
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
