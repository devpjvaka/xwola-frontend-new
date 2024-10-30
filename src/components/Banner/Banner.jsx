import React, { useState, useRef, useEffect } from "react";
import Banner1 from "../../assets/team2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp } from "../../animation/animation";

const Banner = () => {
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
    <div className="container mx-auto py-10 px-4 sm:px-8 lg:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="self-start"
        >
          <img
            src={Banner1}
            alt="Our team"
            className="w-full md:w-[95%] lg:w-full mx-auto object-cover rounded"
            loading="lazy"
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex flex-col space-y-5 text-center md:text-left">
          {/* Title */}
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl sm:text-4xl font-handwritting leading-tight"
          >
            We believe that a team makes any project better
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-base sm:text-lg leading-relaxed font-handwritting"
          >
            At Xwola, we understand that collaboration is at the heart of every
            successful project. A strong team brings together diverse skills,
            experiences, and perspectives, enabling us to tackle challenges more
            effectively and innovate beyond boundaries. We believe that when
            talented individuals unite with a shared vision, the possibilities
            are endless. Whether it's crafting solutions, delivering exceptional
            service, or driving your vision forward, our team works together to
            make every project better and more impactful. Let Xwola be your
            partner in transforming ideas into reality.
          </motion.p>

          {/* Statistics Section */}
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="flex justify-center md:justify-start gap-6 md:gap-10"
          >
            {[
              { number: 15, label: "Years of Experience" },
              { number: 350, label: "Happy Clients" },
              { number: 34, label: "Awards Gained" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-handwritting">{stat.number}</p>
                <p className="text-gray-500 text-sm font-handwritting">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.button
            className="primary-btn font-handwritting bg-black text-white px-4 py-1 mt-6 shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-md inline-block w-auto"
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
                    This page is under construction. Please check back soon for
                    updates!
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
  );
};

export default Banner;
