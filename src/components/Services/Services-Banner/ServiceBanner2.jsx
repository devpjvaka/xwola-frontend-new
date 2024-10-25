import React from "react";
import SupporMaintenance from "../../../assets/Services/Banners/SupportMaintenance.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../../animation/animation";
 
const ServiceBanner2 = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image section */}
          <div className="order-1 md:order-2">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={SupporMaintenance}
              alt="Support and Maintenance"
              className="w-[95%] md:w-full mx-auto rounded-lg"
            />
          </div>
 
          {/* Text section */}
          <div className="space-y-5 xl:max-w-[500px] order-2 md:order-1">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-3xl text-black-500 font-handwritting relative"
            >
               <span className="text-black px-2 py-1 rounded">
                Support & Maintenance
              </span>
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 font-handwritting text-xl leading-7 text-justify"
            >
              Support & Maintenance is essential to ensure the long-term success
              and smooth operation of any software solution. It goes beyond the
              initial launch, providing continuous improvements, updates, and
              technical assistance to keep the software running efficiently. A
              dedicated support and maintenance team works proactively to
              monitor performance, fix bugs, optimize system functionalities,
              and adapt the software to changing business needs and
              technological advancements.
       
            </motion.p>
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn font-handwritting mt-8 bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Get Support
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ServiceBanner2;