import React, { useState, useRef, useEffect } from "react";
import Software_dev from "../../../assets/Services/Banners/SoftwareDevelopment.jpg";
import { SlideUp } from "../../../animation/animation";
import { motion, AnimatePresence } from "framer-motion";

// const ServicesBanner1 = () => {
//   return (
//     <div className="py-12 px-4 md:py-24 md:px-8 bg-gray-50">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//         {/* Image Section */}
//         <motion.div
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="flex justify-center"
//         >
//           <img
//             src={Software_dev}
//             alt="Software Development"
//             className="w-full max-w-md md:max-w-full rounded-lg"
//           />
//         </motion.div>

//         {/* Text Section */}
//         <div className="space-y-6 text-center md:text-left">
//           <motion.h1
//             variants={SlideUp(0.2)}
//             initial="initial"
//             animate="animate"
//             className="text-2xl md:text-3xl text-black font-handwritting"
//           >
//             <span className="bg-gray-100 px-3 py-1 rounded">
//               Software Development
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={SlideUp(0.4)}
//             initial="initial"
//             animate="animate"
//             className="text-gray-600 font-handwritting text-base md:text-lg leading-relaxed md:leading-8"
//           >
//             Software development is a collaborative process where creativity,
//             innovation, and problem-solving come together to build solutions
//             that address real-world challenges. At the heart of software
//             development is teamwork, where developers, designers, and
//             stakeholders work closely to bring ideas to life. Each team member
//             plays a crucial role, whether in coding, testing, designing, or
//             project management, ensuring that the final product is both
//             functional and user-friendly.
//           </motion.p>

//           <motion.button
//             variants={SlideUp(0.6)}
//             initial="initial"
//             animate="animate"
//             className="primary-btn font-handwritting bg-black text-white px-6 py-2 mt-6 shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-md"
//           >
//             Discover Now
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };

const ServicesBanner1 = () => {
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
            src={Software_dev}
            alt="Software Development"
            className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1 className="text-2xl md:text-3xl text-black font-handwritting">
            <span className="bg-gray-100 px-3 py-1 rounded">
              Software Development
            </span>
          </motion.h1>

          <motion.p className="text-gray-600 font-handwritting text-base md:text-lg leading-relaxed md:leading-8">
            Software development is a collaborative process where creativity,
            innovation, and problem-solving come together to build solutions
            that address real-world challenges. At the heart of software
            development is teamwork, where developers, designers, and
            stakeholders work closely to bring ideas to life. Each team member
            plays a crucial role, whether in coding, testing, designing, or
            project management, ensuring that the final product is both
            functional and user-friendly.
          </motion.p>

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
export default ServicesBanner1;
