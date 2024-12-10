import React from "react";
import { motion } from "framer-motion";
import keywordImage from "../../../../assets/Services/catogeries/seo/feature 1.webp";
import optimizationImage from "../../../../assets/Services/catogeries/seo/feature 2.webp";
import technicalSeoImage from "../../../../assets/Services/catogeries/seo/feature 3.webp";

// const FeaturesSection = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const textHoverEffect = {
//     hover: { scale: 1.05, color: "#fab116" },
//   };

//   return (
//     <motion.section
//       className="bg-white dark:bg-gray-900"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ staggerChildren: 0.3 }}
//     >
//       <div className="container px-6 py-10 mx-auto">
//         <motion.div
//           className="flex items-center justify-between"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-3xl font-bold text-gray-800 capitalize lg:text-4xl dark:text-white">
//             Why Choose Our SEO Services?
//           </h1>
//         </motion.div>

//         <motion.hr
//           className="my-8 border-gray-200 dark:border-gray-700"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 1 }}
//         />

//         <motion.div
//           className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
//           variants={fadeInUp}
//         >
//           {/* Feature 1 */}
//           <motion.div
//             className="group"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <motion.img
//               className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
//               src={keywordImage}
//               alt="Advanced Keyword Research"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//             <div className="mt-8">
//               <motion.h1
//                 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white"
//                 variants={textHoverEffect}
//                 whileHover="hover"
//               >
//                 Advanced Keyword Research
//               </motion.h1>
//               <p className="mt-2 text-gray-900 dark:text-gray-400">
//                 Discover high-value keywords tailored to your business goals.
//               </p>
//               <motion.a
//                 href="#"
//                 className="inline-block text-[#fab116] underline hover:text-black"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 Read more
//               </motion.a>
//             </div>
//           </motion.div>

//           {/* Feature 2 */}
//           <motion.div
//             className="group"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <motion.img
//               className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
//               src={optimizationImage}
//               alt="On-Page Optimization"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//             <div className="mt-8">
//               <motion.h1
//                 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white"
//                 variants={textHoverEffect}
//                 whileHover="hover"
//               >
//                 On-Page Optimization
//               </motion.h1>
//               <p className="mt-2 text-gray-900 dark:text-gray-400">
//                 Enhance content and structure for optimal user experience.
//               </p>
//               <motion.a
//                 href="#"
//                 className="inline-block text-[#fab116] underline hover:text-black"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 Read more
//               </motion.a>
//             </div>
//           </motion.div>

//           {/* Feature 3 */}
//           <motion.div
//             className="group"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <motion.img
//               className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
//               src={technicalSeoImage}
//               alt="Technical SEO"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//             <div className="mt-8">
//               <motion.h1
//                 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white"
//                 variants={textHoverEffect}
//                 whileHover="hover"
//               >
//                 Technical SEO
//               </motion.h1>
//               <p className="mt-2 text-gray-900 dark:text-gray-400">
//                 Optimize speed, structure, and responsiveness for better
//                 rankings.
//               </p>
//               <motion.a
//                 href="#"
//                 className="inline-block text-[#fab116] underline hover:text-black"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 Read more
//               </motion.a>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };
const FeaturesSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Why Choose Our SEO Services?
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              imgSrc: keywordImage,
              title: "Advanced Keyword Research",
              paragraphs: [
                "Discover high-value keywords tailored to your business goals.",
              ],
            },
            {
              imgSrc: optimizationImage,
              title: "On-Page Optimization",
              paragraphs: [
                "Enhance content and structure for optimal user experience.",
              ],
            },
            {
              imgSrc: technicalSeoImage,
              title: "Technical SEO",
              paragraphs: [
                "Optimize speed, structure, and responsiveness for better rankings.",
              ],
            },
          ].map((item, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative h-[300px]">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.imgSrc}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <motion.h1
                    className="title-font text-2xl  font-medium text-[#fab116] mb-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                  >
                    {item.title.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        className="relative inline-block"
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.05,
                          ease: "easeOut",
                        }}
                      >
                        {char}
                        <motion.span
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 0.4,
                            delay: i * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </motion.span>
                    ))}
                  </motion.h1>
                  {item.paragraphs.map((paragraph, i) => (
                    <p key={i} className="leading-relaxed text-xl mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
