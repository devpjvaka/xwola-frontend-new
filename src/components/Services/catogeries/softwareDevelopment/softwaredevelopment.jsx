import React, { useEffect, useState } from "react";
import dev from "../../../../assets/Services/catogeries/softwaredevelopment/softwaredev.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SoftwareServices from "../../../Services/catogeries/softwareDevelopment/softwareservices";
import Status from "../../../Services/catogeries/softwareDevelopment/status"; // Updated import
import BestPractice from "../../../Services/catogeries/softwareDevelopment/bestPractices"; // Corrected import
import Banner from "../../../../assets/undraw_real_time_sync_re_nky7.svg";
import Howwehelp from "../../../Services/catogeries/softwareDevelopment/howwehelp";
import Achieve from "../../../Services/catogeries/softwareDevelopment/acheive";
import Need from "./clientsreview";
import Scenario from "../../../Services/catogeries/softwareDevelopment/scenario";
import Faqs from "../../../Services/catogeries/softwareDevelopment/faqs";
import Softwaretypes from "../../../Services/catogeries/softwareDevelopment/championhighlight";
import Byindustryspecific from "../../../Services/catogeries/softwareDevelopment/byindustryspecific";
import Bytechnology from "../../../Services/catogeries/softwareDevelopment/bytechnology";
import Clientsreview from "../../../Services/catogeries/softwareDevelopment/clientsreview";
import Softwaresupportindustry from "../../../Services/catogeries/softwareDevelopment/softwaresupportindustry";
import Softwaredevelopmentsteps from "../../../Services/catogeries/softwareDevelopment/softwaredevelopmentsteps";

// const SoftwareDevelopment = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <>
//       <section className="relative">
//         <div className="absolute inset-0">
//           <motion.img
//             src={dev}
//             alt="Hero"
//             className="w-full h-full object-cover"
//             initial={{ scale: 1.05 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 1 }}
//           />
//           <div className="absolute inset-0 bg-black opacity-50" />
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
//               className="text-4xl md:text-5xl text-white"
//             >
//               Software
//               <br />
//               development services{" "}
//             </motion.h1>
//             <motion.p
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.4, delay: 0.6 }}
//               className="text-lg text-white "
//             >
//               Xwola is a software development company with over 17 years of
//               experience delivering trusted solutions for businesses across
//               various industries. Our services encompass custom software
//               development, comprehensive support and maintenance, AI,data&
//               science solutions & SEO optimization.
//             </motion.p>
//           </div>
//         </div>
//       </section>
//       <SoftwareServices />
//       <Status />
//       <BestPractice /> {/* Corrected Usage */}
//     </>
//   );
// }

const SoftwareDevelopment = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rotateX = (clientY / window.innerHeight) * 30 - 15; // Adjust sensitivity for X axis rotation
      const rotateY = (clientX / window.innerWidth) * 30 - 15; // Adjust sensitivity for Y axis rotation
      setRotate({ x: rotateX, y: rotateY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <main className="bg-black pt-20 dark:bg-black">
        {/* Main Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {/* Left Column: Text Content */}
            <motion.div
              className="flex flex-col gap-6 text-center text-white md:text-left md:w-1/2"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold  text-[#fab116] "
                style={{
                  transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`, // Dynamic 3D rotation based on cursor
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Software Development Services{" "}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Xwola is a software development company with over 17 years of
                experience delivering trusted solutions for businesses across
                various industries. Our services encompass custom software
                development, comprehensive support and maintenance, AI, data
                &amp; science solutions, and SEO optimization.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                className="mt-4 flex justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <a href="/contactus" className="inline-block">
                  <button
                    type="button"
                    className="rounded-lg bg-[#fab116] px-6 py-3 text-lg font-semibold text-black shadow-md "
                  >
                    Get in touch
                  </button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: Image Section */}
            <motion.div
              className="relative max-w-xs md:max-w-md lg:max-w-lg p-4"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src={Banner}
                alt="Software Development"
                className="w-full h-auto rounded-lg hover:shadow-lg transition-shadow duration-300"
              />
              {/* Optional decorative element */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-black to-black opacity-20 rounded-lg pointer-events-none"></div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Additional Sections */}
      <Status />
      <SoftwareServices />
      {/* <BestPractice /> */}
      {/* <Achieve />
      <Howwehelp />
      <Scenario /> 
      <Faqs />
      {/* <Softwaretypes />
      <Byindustryspecific />
      <Bytechnology />
      <Clientsreview /> */}
      <Softwaresupportindustry />
      <Softwaredevelopmentsteps />
      <Faqs />
    </>
  );
};
export default SoftwareDevelopment;
