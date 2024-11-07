import React from "react";
import Brand1 from "../../assets/brands/arenase.png";
import Brand2 from "../../assets/brands/phl.png";
import Brand3 from "../../assets/brands/itopup.png";
import Brand4 from "../../assets/brands/pj.png";
import Brand5 from "../../assets/brands/eaufladen.png";
import Brand6 from "../../assets/brands/rb.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";

// const Brands = () => {
//   return (
//     <>
//       <div className="container py-14">
//         <div className="flex flex-wrap justify-center lg:justify-between gap-6">
//           <motion.img
//             variants={SlideUp(0.2)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand1}
//             alt="brand"
//             className="w-[150px]"
//           />
//           <motion.img
//             variants={SlideUp(0.4)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand2}
//             alt="brand"
//             className="w-[150px]"
//           />
//           <motion.img
//             variants={SlideUp(0.6)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand3}
//             alt="brand"
//             className="w-[150px]"
//           />
//           <motion.img
//             variants={SlideUp(0.8)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand4}
//             alt="brand"
//             className="w-[150px]"
//           />
//           <motion.img
//             variants={SlideUp(1.0)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand5}
//             alt="brand"
//             className="w-[150px]"
//           />
//         </div>
//       </div>
//     </>
//   );
// };
const logos = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];

const Brands = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="mb-2 text-center text-2xl sm:text-3xl lg:text-4xl  leading-7 sm:leading-8 ">
        Our Clients
      </h2>
      <p className="text-gray-500 text-center text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 mb-6">
        We are trusted by the world’s most innovative teams
      </p>
      
      {/* Added margin below the paragraph */}
      <div
        className="w-full inline-flex flex-nowrap overflow-hidden mb-4" // Add 'mb-4' for spacing
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
        }}
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <li key={index}>
              <img
                src={logo}
                alt={`Brand Logo ${index + 1}`}
                className="h-12 w-auto"
              />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {[...logos, ...logos].map((logo, index) => (
            <li key={index}>
              <img
                src={logo}
                alt={`Brand Logo ${index + 1}`}
                className="h-12 w-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brands;
