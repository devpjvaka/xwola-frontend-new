import React, { useState, useRef, useEffect } from "react";
import Software_dev from "../../../assets/Services/Banners/SoftwareDevelopment.jpg";
import { SlideUp } from "../../../animation/animation";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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
          <motion.h1 className="text-2xl md:text-3xl text-black">
            <span className="bg-gray-100 px-3 py-1 rounded">
              Software Development
            </span>
          </motion.h1>

          <motion.p className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-8">
            Software development is a collaborative process where creativity,
            innovation, and problem-solving come together to build solutions
            that address real-world challenges. At the heart of software
            development is teamwork, where developers, designers, and
            stakeholders work closely to bring ideas to life. Each team member
            plays a crucial role, whether in coding, testing, designing, or
            project management, ensuring that the final product is both
            functional and user-friendly.
          </motion.p>

          <Link to="/softwaredevelopment">
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
export default ServicesBanner1;
