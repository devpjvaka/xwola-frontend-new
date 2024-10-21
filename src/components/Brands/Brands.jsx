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
    <>
      <div className="container py-14">
        <section className="bg-white py-8 text-black">
          <h2 className="mb-2 text-center text-4xl font-bold font-serif leading-8">
            Our Clients
          </h2>
          <p className="text-gray-500 text-center font-secondary text-lg leading-7">
            We are trusted by the world’s most innovative teams
          </p>

          {/* Container for logos */}
          <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            
            {/* First logo row with equal spacing */}


            <div className="logos-slide ">
              <img className="inline h-16" src={Brand1} alt="Brand 4" />
              <img className="inline h-16" src={Brand2} alt="Brand 2" />
              <img className="inline h-16" src={Brand3} alt="Brand 1" />
              <img className="inline h-16" src={Brand4} alt="Brand 3" />
              <img className="inline h-16" src={Brand5} alt="Brand 3" />
              <img className="inline h-16 ml-16" src={Brand6} alt="Brand 6" />
            </div>

            {/* Duplicate logo row for seamless scrolling with equal spacing */}
            <div className="logos-slide">
            <img className="inline h-16" src={Brand1} alt="Brand 4" />
              <img className="inline h-16" src={Brand2} alt="Brand 4" />
              <img className="inline h-16" src={Brand3} alt="Brand 2" />
              <img className="inline h-16" src={Brand4} alt="Brand 1" />
              <img className="inline h-16" src={Brand5} alt="Brand 3" />
              <img className="inline h-16 ml-10" src={Brand6} alt="Brand 6" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};



export default Brands;
