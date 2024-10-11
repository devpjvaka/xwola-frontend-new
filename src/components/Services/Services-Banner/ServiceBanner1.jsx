import React from "react";
// import Banner1 from "../../assets/banner.png";
import Software_dev from "../../../assets/Services/Banners/SoftwareDevelopment.png";

// import ServicesBanner1 from "../../../components/Services/Services-Banner/ServiceBanner1";

import { motion } from "framer-motion";
import { SlideUp } from "../../../animation/animation";

const ServicesBanner1 = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Software_dev}
              alt=""
              className="w-[95%] md:w-full mx-auto rounded-lg"
            />
          </div>

          {/* Text section */}
          <div
            className="space-y-5 flex justify-center 
          flex-col"
          >
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold font-serif"
            >
              Software Development
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              animate="animate"
              className="text-gray-500 font-secondary text-xl leading-7"
            >
              Software development is a collaborative process where creativity,
              innovation, and problem-solving come together to build solutions
              that address real-world challenges. At the heart of software
              development is teamwork, where developers, designers, and
              stakeholders work closely to bring ideas to life. Each team member
              plays a crucial role, whether in coding, testing, designing, or
              project management, ensuring that the final product is both
              functional and user-friendly.
              <span className="block mt-4">
                In a thriving software company, collaboration drives progress.
                Teams work together, leveraging diverse skill sets and
                expertise, to create cutting-edge applications and systems that
                adapt to evolving market needs. By fostering a culture of
                continuous learning and shared responsibility, the development
                process becomes not just about building software but about
                building together for success
              </span>
            </motion.p>

            {/* <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="flex gap-3"
            >
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif"> 15 </p>
                <p className="text-gray-500 text-sm"> Years of Experiance </p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif"> 350 </p>
                <p className="text-gray-500 text-sm"> Happy Clients </p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif"> 34 </p>
                <p className="text-gray-500 text-sm"> Award Gained </p>
              </div>
            </motion.div> */}

            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                animate="animate"
                className="primary-btn  bg-black text-white 
              shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Discover Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner1;
