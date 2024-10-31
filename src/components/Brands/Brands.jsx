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
const Brands = () => {
  return (
    <div className="container py-10 px-2 sm:px-0">
      <section className="bg-white py-6 text-black">
        <h2 className="mb-2 text-center text-2xl sm:text-3xl lg:text-4xl font-handwritting leading-7 sm:leading-8">
          Our Clients
        </h2>
        <p className="text-gray-500 text-center font-handwritting text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
          We are trusted by the world’s most innovative teams
        </p>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden py-8 sm:py-10">
          <div className="flex animate-scroll gap-8 w-[200%]">
            {/* Logo Rows */}
            {[...Array(2)].map((_, loopIndex) => (
              <div className="flex gap-8" key={loopIndex}>
                {[Brand1, Brand2, Brand3, Brand4, Brand5, Brand6].map(
                  (brand, index) => (
                    <img
                      key={`${loopIndex}-${index}`}
                      className="h-8 sm:h-12 lg:h-16"
                      src={brand}
                      alt={`Brand ${index + 1}`}
                    />
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default Brands;
