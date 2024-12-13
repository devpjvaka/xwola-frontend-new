import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Feature from "../seo/featuresection";
import Process from "../seo/process";
import Testimonial from "../seo/testimonial";
import Callaction from "../seo/callaction";
import Seo from "../../../../assets/Services/catogeries/seo/seo 1.webp";
import { Link } from "react-router-dom";

// import Brand4 from "../../assets/brands/pj.png";
// import Brand5 from "../../assets/brands/eaufladen.png";
// import Brand6 from "../../assets/brands/rb.png";
// const HeroSection = () => (
//   <>
//     <div className=" text-white min-h-screen">
//       {/* Hero Section */}
//       <section
//         className="h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center relative"
//         style={{
//           backgroundImage: `url(${Seo})`,
//         }}
//       >
//         {/* Transparent Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
//         <motion.h1
//           className="text-5xl font-bold mb-4 z-10"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Empower Your Business with Cutting-Edge SEO Services
//         </motion.h1>
//         <motion.p
//           className="text-white text-xl mb-8 z-10"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           Unleash the full potential of your website by optimizing for search
//           engines, enhancing visibility, and driving more organic traffic.{" "}
//         </motion.p>

//         <motion.button
//           className="bg-gold text-black py-3 px-6 rounded-lg font-semibold hover:bg-white transition z-10"
//           whileHover={{ scale: 1.1 }}
//         >
//           Get Started
//         </motion.button>
//       </section>
//     </div>
//     <Feature />
//     <Process />
//     <Testimonial />
//     <Callaction />
//   </>
// );
// const Brand = ({ state, setState }) => {
//   return (
//     <div className="flex items-center justify-between py-5 md:block">
//       <a href="#">
//         <img
//           src="https://www.floatui.com/logo.svg"
//           width={120}
//           height={50}
//           alt="Xwola Logo"
//         />
//       </a>
//       <div className="md:hidden">
//         <button
//           className="menu-btn text-gray-500 hover:text-gray-800"
//           onClick={() => setState(!state)}
//         >
//           {state ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// const HeaderSection = () => {
//   return (
//     <section>
//       <div className="max-w-screen-xl mx-auto px-6 py-24 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex flex-wrap">
//         <div className="flex-none space-y-5 max-w-xl">
//           <h1 className="text-4xl text-black font-extrabold sm:text-5xl">
//             Empower Your Business with Cutting-Edge SEO Services{" "}
//           </h1>
//           <p className="text-black">
//             Unleash the full potential of your website by optimizing for search
//             engines, enhancing visibility, and driving more organic traffic.{" "}
//           </p>
//           <div className="flex items-center gap-x-3 sm:text-sm">
//             <a
//               href="#"
//               className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
//             >
//               Get started
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>
//         <div className="flex-1 block sm:block">
//           <img
//             src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
//             className="max-w-full w-full h-auto object-cover"
//             alt="Illustration"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// const HeroSection = () => {
//   const [state, setState] = React.useState(false);

//   React.useEffect(() => {
//     document.onclick = (e) => {
//       const target = e.target;
//       if (!target.closest(".menu-btn")) setState(false);
//     };
//   }, []);

//   return (
//     <>
//       <div className="relative mt-9">
//         <div
//           className="absolute inset-0 blur-xl h-[580px]"
//           style={{
//             background:
//               "linear-gradient(143.6deg, rgba(250, 177, 22, 0) 20.79%, rgba(250, 177, 22, 0.26) 40.92%, rgba(250, 177, 22, 0) 70.35%)",
//           }}
//         />
//         <div className="relative">
//           <header>
//             <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
//               <Brand state={state} setState={setState} />
//             </div>
//           </header>
//           <HeaderSection />
//         </div>
//       </div>
//       <Feature />
//       <Process />
//       <Testimonial />
//       <Callaction />
//     </>
//   );
// };

const HeroSection = () => {
  return (
    <>
      <div className="relative  bg-black pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left Content Section */}
            <div className="w-full px-4 lg:w-5/12">
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="mb-5 text-4xl font-extrabold !leading-[1.208] text-white dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Empower Your Business with Cutting-Edge SEO Services
                </motion.h1>
                <motion.p
                  className="mb-8 text-xl max-w-[480px] text-white dark:text-white"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Unleash the full potential of your website by optimizing for
                  search engines, enhancing visibility and driving more organic
                  traffic.
                </motion.p>

                <motion.div
                  className="mt-4 flex justify-center md:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  <a href="/contactus" className="inline-block">
                  <button
                    type="button"
                    className=" mt-2 rounded-lg border-2 border-[#fab116] text-white px-4 py-2 text-sm sm:text-lg  hover:bg-black hover:text-white transition"
                  >
                    Get in touch
                  </button>
                </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Image Section */}
            <div className="w-full px-4 lg:w-6/12">
              <motion.div
                className="lg:ml-auto lg:text-right"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <motion.img
                    src={Seo}
                    alt="hero"
                    className="max-w-full lg:ml-auto rounded-lg shadow-2xl"
                    whileHover={{
                      scale: 1.05,
                      rotate: 1,
                      transition: { duration: 0.3 },
                    }}
                  />
                  {/* Decorative Dots */}
                  <motion.span
                    className="absolute -bottom-8 -left-8 z-[-1]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {[...Array(5)].map((_, row) =>
                        [...Array(5)].map((_, col) => (
                          <circle
                            key={`${row}-${col}`}
                            cx={row * 18}
                            cy={col * 18}
                            r="2.5"
                            fill="#fab116"
                          />
                        ))
                      )}
                    </svg>
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}

      <Feature />
      <Process />
      <Testimonial />
      <Callaction />
    </>
  );
};

export default HeroSection;
