import React from "react";
import { FaChartLine } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaBroadcastTower } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { GiBank } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

// const Industriescards = () => {
//   const subjectList = [
//     {
//       id: 1,
//       name: "Telecoms", // Changed name
//       icon: <FaBroadcastTower />,
//       color: "#FFD700", // Gold color for Telecommunications
//       delay: 0.2,
//     },
//     {
//       id: 2,
//       name: "Event And Hospitality",
//       icon: <FaHotel />,
//       color: "#FFD700",
//       delay: 0.3,
//     },
//     {
//       id: 3,
//       name: "Retail",
//       icon: <FaShoppingCart />,
//       color: "#FFD700",
//       delay: 0.4,
//     },
//     {
//       id: 4,
//       name: "Finance",
//       icon: <FaMoneyBillWave />,
//       color: "#FFD700",
//       delay: 0.5,
//     },
//     {
//       id: 5,
//       name: "Banking",
//       icon: <GiBank />,
//       color: "#FFD700",
//       delay: 0.6,
//     },
//     {
//       id: 6,
//       name: "Payments",
//       icon: <FaWallet />,

//       color: "#FFD700",
//       delay: 0.7,
//     },
//     {
//       id: 7,
//       name: "Lending",
//       icon: <FaCreditCard />,
//       color: "#FFD700",
//       delay: 0.8,
//     },
//     {
//       id: 8,
//       name: "Investment",
//       icon: <FaChartLine />,
//       color: "#FFD700",
//       delay: 0.9,
//     },
//   ];
//   return (
//     <div className="container py-14 md:py-24">
//       {/* Header Section */}
//       <div className="relative space-y-4 px-4 py-6 md:py-8 text-center max-w-[600px] mx-auto mb-5">
//         <h1 className="uppercase text-xl sm:text-2xl md:text-3xl black-underline font-handwritting text-yellow-500 relative z-10">
//           Speaking the language of Your Industry
//         </h1>

//         <p className="text-black-500 font-handwritting text-base sm:text-lg md:text-xl leading-6 sm:leading-7">
//           We tailor agile and resilient IT solutions to your business by
//           addressing each domain's unique risks, opportunities, and best
//           practices.
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-3 font-handwritting lg:grid-cols-4">
//         {subjectList.map((subject, index) => {
//           // Define animation properties for each card
//           const animations = {
//             initial: {
//               opacity: 0,
//               x: index % 2 === 0 ? -50 : 50, // Alternates x-direction based on index
//               y: index % 3 === 0 ? -20 : 20, // Alternates y-direction based on index
//             },
//             whileInView: { opacity: 1, x: 0, y: 0 },
//             transition: {
//               type: "spring",
//               stiffness: 100 + index * 10,
//               delay: subject.delay || index * 0.1, // Custom delay if provided
//             },
//           };

//           return (
//             <motion.div
//               key={subject.id}
//               initial={animations.initial}
//               whileInView={animations.whileInView}
//               transition={animations.transition}
//               viewport={{ once: false, amount: 0.02 }} // Trigger animation on entering viewport
//               className="border border-secondary/20 p-3 sm:p-4 md:p-6 flex items-center gap-2 sm:gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
//             >
//               {/* Icon Section */}
//               <div
//                 style={{
//                   backgroundColor: "black",
//                   borderRadius: "50%",
//                   width: "40px",
//                   height: "40px",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <div style={{ color: subject.color, fontSize: "1.5rem" }}>
//                   {subject.icon}
//                 </div>
//               </div>

//               {/* Text Section with Truncate */}
//               <p className="text-sm sm:text-base md:text-lg truncate">
//                 {subject.name}
//               </p>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
const Industriescards = () => {
  const subjectList = [
    { id: 1, name: "Telecoms", icon: <FaBroadcastTower />, color: "#FFD700", delay: 0.2 },
    { id: 2, name: "Event And Hospitality", icon: <FaHotel />, color: "#FFD700", delay: 0.3 },
    { id: 3, name: "Retail", icon: <FaShoppingCart />, color: "#FFD700", delay: 0.4 },
    { id: 4, name: "Finance", icon: <FaMoneyBillWave />, color: "#FFD700", delay: 0.5 },
    { id: 5, name: "Banking", icon: <GiBank />, color: "#FFD700", delay: 0.6 },
    { id: 6, name: "Payments", icon: <FaWallet />, color: "#FFD700", delay: 0.7 },
    { id: 7, name: "Lending", icon: <FaCreditCard />, color: "#FFD700", delay: 0.8 },
    { id: 8, name: "Investment", icon: <FaChartLine />, color: "#FFD700", delay: 0.9 },
  ];

  return (
    <div className="container py-14 md:py-24">
      {/* Header Section */}
      <div className="relative space-y-4 px-4 py-6 md:py-8 text-center max-w-[600px] mx-auto mb-5">
        <h1 className="uppercase text-xl sm:text-2xl md:text-3xl black-underline text-[#b27200] relative z-10">
          Speaking the language of Your Industry
        </h1>

        <p className="text-black-500  text-base sm:text-lg md:text-xl leading-6 sm:leading-7">
          We tailor agile and resilient IT solutions to your business by
          addressing each domain's unique risks, opportunities, and best
          practices.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-3  lg:grid-cols-4">
        {subjectList.map((subject, index) => {
          const animations = {
            initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: index % 3 === 0 ? -20 : 20 },
            whileInView: { opacity: 1, x: 0, y: 0 },
            transition: {
              type: "spring",
              stiffness: 100 + index * 10,
              delay: subject.delay || index * 0.1,
            },
          };

          return (
            <motion.div
              key={subject.id}
              initial={animations.initial}
              whileInView={animations.whileInView}
              transition={animations.transition}
              viewport={{ once: false, amount: 0.02 }}
              className="border border-secondary/20 p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
            >
              {/* Icon Section */}
              <div
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ color: subject.color, fontSize: "1.5rem" }}>
                  {subject.icon}
                </div>
              </div>

              {/* Text Section */}
              <p className="text-sm sm:text-base md:text-lg text-center sm:text-left">
                {subject.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};


export default Industriescards;
