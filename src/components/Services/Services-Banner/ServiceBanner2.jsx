import React from "react";
import Banner2_ from "../../../assets/banner2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../../animation/animation";
import SupporMaintenance from "../../../assets/Services/Banners/SupportMaintenance.png";

const ServiceBanner2 = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">  {/* Change items-center to items-start for top alignment */}
          {/* Image section */}
          <div className="flex justify-center order-1 md:order-2">  {/* Ensure image is centered and appears first on mobile */}
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
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px] order-2 md:order-1">  {/* Text section order set for mobile and desktop */}
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl text-yellow-500 font-handwritting underline decoration-black decoration-2"
            >
              Support & Maintenance
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="font-handwritting text-xl leading-7"
            >
              Support & Maintenance is essential to ensure the long-term success
              and smooth operation of any software solution. It goes beyond the
              initial launch, providing continuous improvements, updates, and
              technical assistance to keep the software running efficiently. A
              dedicated support and maintenance team works proactively to
              monitor performance, fix bugs, optimize system functionalities,
              and adapt the software to changing business needs and
              technological advancements.
              <span className="block mt-4">
                With a focus on reliability and responsiveness, support and
                maintenance services ensure that any issues are resolved
                promptly, minimizing downtime and enhancing user satisfaction.
                This ongoing partnership ensures your software remains scalable,
                secure, and up-to-date, allowing your business to focus on
                growth while we handle the technical complexities.
              </span>
            </motion.p>

            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn font-handwritting bg-black text-white 
              shadow-[5px_5px_0px_0px_#6c6c6c]"
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
