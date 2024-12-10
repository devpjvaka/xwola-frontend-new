// import React from 'react';
// import { motion } from "framer-motion";
// import heroimg from "../../../assets/getstarted2.webp";

// import ProjectStartComparison from './projectComparison';
// import CustomerOnboarding from './customerOnboarding';

// function GetStarted() {
//   return (
//     <>
//       <section className="relative mt-16">
//         <div className="absolute inset-0">
//           <motion.img
//             src={heroimg}
//             alt="Hero"
//             className="w-full h-full object-cover"
//             initial={{ scale: 1.05 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 1 }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
//         </div>

//         <div className="relative z-10 container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-6 bg-brandwhite rounded-3xl min-h-[650px]">
//           <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
//             <motion.h1
//               initial={{ y: -50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 120,
//                 duration: 0.6,
//                 delay: 0.4,
//               }}
//               className="text-4xl md:text-5xl font-bold text-white"
//             >
//               Always{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">
//                 Customer-Focused. <br /> Even Before the Project Starts
//               </span>
//             </motion.h1>
//             <motion.p
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.4, delay: 0.6 }}
//               className="text-lg text-white leading-relaxed"
//             >
//               Our well-oiled process of customer onboarding ensures fast
//               response, effective communication, and legal guarantees to our
//               clients.
//             </motion.p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="self-center md:self-start px-8 py-3 text-lg font-semibold text-black bg-gold rounded-full shadow-md hover:bg-opacity-90"
//             >
//               Get Started
//             </motion.button>
//           </div>
//         </div>
//       </section>
//       <ProjectStartComparison />
//       <CustomerOnboarding />
//     </>
//   );
// }


// export default GetStarted;
import React, { useState } from "react";

import { motion } from "framer-motion";
import heroimg from "../../../assets/getstartedbg.webp";
import ProjectStartComparison from './projectComparison';
import FaqSection from './faqSection';
import StepsSection from './stepsSection';
import TestimonialsSection from "./testimonialsSection";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className=" text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${heroimg})`,
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-60"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))',
          }}
        ></div>
        <motion.h1
          className="text-5xl font-bold mb-4 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get Started with Xwola
        </motion.h1>
        <motion.p
          className="text-[#fab116] text-lg mb-8 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Start your journey to innovative software solutions today!
        </motion.p>
        


      </section>

      {/* Steps Section */}
      <StepsSection />


      <ProjectStartComparison />
      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQs Section */}
      <FaqSection />
    </div>
  );
};


export default GetStarted;
