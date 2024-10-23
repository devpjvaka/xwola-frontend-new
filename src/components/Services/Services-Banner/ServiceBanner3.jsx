import React from "react";
// import Banner1 from "../../assets/banner.png";
import AIDATAScience from "../../../assets/Services/Banners/AIDataScience.png";

import { motion } from "framer-motion";
import { SlideUp } from "../../../animation/animation";

const ServicesBanner3 = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"> {/* Change items-center to items-start for top alignment */}
          
          {/* Image section */}
          <div className="flex flex-col justify-start"> {/* Use justify-start to align the image at the top */}
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={AIDATAScience}
              alt="AI and Data Science"
              className="w-[95%] md:w-full mx-auto rounded-lg"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 flex justify-start flex-col"> {/* Use justify-start to align text at the top */}
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl text-yellow-500 font-handwritting underline decoration-black decoration-2"
            >
              AI & Data Science
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              animate="animate"
              className="text-gray-500 font-secondary text-xl leading-7"
            >
              AI & Data Science are at the forefront of our software services,
              empowering businesses to make smarter decisions through
              data-driven insights and automation. Our expert team leverages
              advanced machine learning algorithms, predictive analytics, and
              big data solutions to help you optimize processes, enhance
              customer experiences, and uncover hidden patterns in your data.
              Whether it's building intelligent systems or providing real-time
              analytics, we help transform your data into actionable strategies
              for business growth and innovation.
            </motion.p>

            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                animate="animate"
                className="primary-btn font-handwritting bg-black text-white 
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

export default ServicesBanner3;
