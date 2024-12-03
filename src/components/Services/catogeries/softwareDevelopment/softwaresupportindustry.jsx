// import React from "react";
// import { motion } from "framer-motion"; // For animations
// import { FaArrowUp } from "react-icons/fa";

// const industries = [
//   { id: 1, title: "Healthcare", icon: "💚", href: "/healthcare" },
//   { id: 2, title: "Banking", icon: "🏦", href: "/banking" },
//   { id: 3, title: "Insurance", icon: "☂️", href: "/insurance" },
//   { id: 4, title: "Lending", icon: "💰", href: "/lending" },
//   { id: 5, title: "Investment", icon: "💵", href: "/investment" },
//   { id: 6, title: "Retail", icon: "🛒", href: "/retail" },
//   { id: 7, title: "Manufacturing", icon: "🏭", href: "/manufacturing" },
//   {
//     id: 8,
//     title: "Professional Services",
//     icon: "💼",
//     href: "/professional-services",
//   },
//   { id: 9, title: "Oil and Gas", icon: "🛢️", href: "/oil-and-gas" },
//   { id: 10, title: "Telecoms", icon: "📡", href: "/telecoms" },
//   {
//     id: 11,
//     title: "Logistics and Transportation",
//     icon: "🚚",
//     href: "/logistics-and-transportation",
//   },
//   {
//     id: 12,
//     title: "Engineering and Construction",
//     icon: "🛠️",
//     href: "/engineering-and-construction",
//   },
// ];

// const IndustryGrid = () => {
//   // Motion Variants for Animation
//   const containerVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//   };

//   return (
//     <motion.div
//       className="container mx-auto px-4 py-10"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {/* Heading Section */}
//       <div className="">
//         <h1 className="text-2xl md:text-3xl font-bold text-yellow-600">
//           Software to Support Industry-Specific Processes
//         </h1>
//         <p className="mt-6 text-gray-600 text-2xl">
//           We focus on the needs, challenges, and trends of over 30 industries,
//           leveraging our expertise to deliver tailored solutions.
//         </p>
//       </div>

//       {/* Grid Section */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8"
//         variants={containerVariants}
//       >
//         {industries.map((industry) => (
//           <motion.a
//             key={industry.id}
//             href={industry.href}
//             className="relative group p-6 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 cursor-pointer border border-transparent hover:border-yellow-400 hover:border-t-[2px]w-[90px] h-[190px]  hover:border-b-[2px] mt-4"            variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//           >
//             {/* Arrow Icon */}
//             <div className="absolute top-3 right-3 text-blue-500 group-hover:text-blue-700 transition transform group-hover:rotate-90">
//               <FaArrowUp />
//             </div>

//             {/* Icon */}
//             <div className="text-5xl">{industry.icon}</div>

//             {/* Title with Underline */}
//             <h2 className="text-lg font-medium text-gray-800 text-center group-hover:text-yellow-600 transition underline decoration-transparent group-hover:decoration-black decoration-2">
//               {industry.title}
//             </h2>
//           </motion.a>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default IndustryGrid;
import { motion } from "framer-motion";

import React from "react";
import {
  FaStethoscope,
  FaBroadcastTower,
  FaBolt,
  FaFilm,
  FaGasPump,
  FaShoppingCart,
  FaTruck,
  FaHotel,
  FaLandmark,
} from "react-icons/fa";

const industries = [
  // { id: 1, title: "Fintech & Insurance", icon: <FaStethoscope />, href: "/fintech-insurance" },
  {
    id: 2,
    title: "Telecommunication",
    icon: <FaBroadcastTower />,
    href: "/telecommunication",
  },
  // { id: 3, title: "Energy and Utilities", icon: <FaBolt />, href: "/energy-utilities" },
  // { id: 4, title: "Healthcare", icon: <FaStethoscope />, href: "/healthcare" },
  // { id: 5, title: "Media & Entertainment", icon: <FaFilm />, href: "/media-entertainment" },
  // { id: 6, title: "Oil & Gas, Mining", icon: <FaGasPump />, href: "/oil-gas-mining" },
  {
    id: 7,
    title: "Retail",
    icon: <FaShoppingCart />,
    href: "/retail-ecommerce",
  },
  // { id: 8, title: "Logistics & Distribution", icon: <FaTruck />, href: "/logistics-distribution" },
  {
    id: 9,
    title: "Event & Hospitality",
    icon: <FaHotel />,
    href: "/travel-hospitality",
  },
  // { id: 10, title: "Public Sector", icon: <FaLandmark />, href: "/public-sector" },
];

const Softwaresupportindustry = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading Section */}
      <div className="mb-8">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-black relative inline-block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Industries We Work With
          {/* Underline Spread Effect */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fab116] origin-left scale-x-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We outshine at delivering the best software development services as
          per the customers’ requirements, be it small size companies in their
          beginning phase or mid-size businesses looking for growth or large
          organizations actively making efforts to expand.
        </motion.p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-l border-gray-200 border-r">
        {industries.map((industry, index) => (
          <motion.a
            key={industry.id}
            href={industry.href}
            className={`flex flex-col items-center p-6 bg-white transition hover:bg-gray-100 border-gray-200 ${
              index >= 5 && "border-t"
            } ${index % 5 !== 4 ? "border-r" : ""}`}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon */}
            <div className="text-[#fab116] text-4xl mb-4">{industry.icon}</div>
            {/* Title */}
            <h2 className="text-center text-lg font-semibold text-gray-800">
              {industry.title}
            </h2>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Softwaresupportindustry;
