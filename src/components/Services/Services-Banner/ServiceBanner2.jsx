import SupporMaintenance from "../../../assets/Services/Banners/SupportMaintenance.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp } from "../../../animation/animation";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// const ServiceBanner2 = () => {
//   return (
//     <div className="py-12 px-4 md:py-24 md:px-8 bg-gray-50">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//         {/* Image Section */}
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="order-1 md:order-2 flex justify-center"
//         >
//           <img
//             src={SupporMaintenance}
//             alt="Support and Maintenance"
//             className="w-full max-w-md md:max-w-full rounded-lg"
//           />
//         </motion.div>

//         {/* Text Section */}
//         <div className="space-y-6 text-center md:text-left order-2 md:order-1">
//           <motion.h1
//             variants={SlideUp(0.2)}
//             initial="initial"
//             animate="animate"
//             className="text-2xl md:text-3xl text-black font-handwritting"
//           >
//             <span className="bg-gray-100 px-3 py-1 rounded">
//               Support & Maintenance
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={SlideUp(0.4)}
//             initial="initial"
//             animate="animate"
//             className="text-gray-600 font-handwritting text-base md:text-lg leading-relaxed md:leading-8"
//           >
//             Support & Maintenance is essential to ensure the long-term success
//             and smooth operation of any software solution. It goes beyond the
//             initial launch, providing continuous improvements, updates, and
//             technical assistance to keep the software running efficiently. A
//             dedicated support and maintenance team works proactively to monitor
//             performance, fix bugs, optimize system functionalities, and adapt
//             the software to changing business needs and technological
//             advancements.
//           </motion.p>

//           <motion.button
//             variants={SlideUp(0.6)}
//             initial="initial"
//             animate="animate"
//             className="primary-btn font-handwritting mt-6 bg-black text-white px-6 py-2 shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-md"
//           >
//             Get Support
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };
const ServiceBanner2 = () => {
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
          className="order-1 md:order-2 flex justify-center"
        >
          <img
            src={SupporMaintenance}
            alt="Support and Maintenance"
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
              Support & Maintenance
            </span>
          </motion.h1>

          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            animate="animate"
            className="text-gray-600  text-base md:text-lg leading-relaxed md:leading-8"
          >
            Support & Maintenance is essential to ensure the long-term success
            and smooth operation of any software solution. It goes beyond the
            initial launch, providing continuous improvements, updates, and
            technical assistance to keep the software running efficiently. A
            dedicated support and maintenance team works proactively to monitor
            performance, fix bugs, optimize system functionalities, and adapt
            the software to changing business needs and technological
            advancements.
          </motion.p>
        

          {/* Popover with Enhanced Animation */}
          <Link to="/supportmaintanace">
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
export default ServiceBanner2;
