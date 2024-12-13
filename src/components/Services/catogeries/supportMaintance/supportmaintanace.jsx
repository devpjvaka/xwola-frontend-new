import React from "react";
import { motion } from "framer-motion";
import support from "../../../../assets/Services/catogeries/supportmaintanace/support.webp";
import TechnicalServices from "../supportMaintance/technicalservices";
import Clientsreviews from "../supportMaintance/clientreviews";
import Contact from "../supportMaintance/contactform";

const SupportMaintenance = () => {
  return (
    <>
      <section className="relative mt-16">
        {/* Background Image with Motion Effects */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <motion.img
            src={support}
            alt="Hero"
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          {/* Transparent Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70" />
        </div>

        {/* Main Content Section */}
        <div className="relative z-10 container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-6 bg-brandwhite rounded-3xl min-h-[650px]">
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            {/* Title with Animation */}
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                duration: 0.6,
                delay: 0.4,
              }}
              className="text-4xl md:text-5xl text-white"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fab116] to-white">
                Support & Maintenance Services
              </span>
            </motion.h1>

            {/* Description with Animation */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-xl text-gray-300"
            >
              Here at Xwola, we provide software maintenance and technical
              support services for all products we develop, all solutions we
              integrate for our clients, and third-party custom software.
              Besides that, you can order your clients’ technical support
              service.
            </motion.p>

            {/* Buttons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              {/* <a href="/explore-solutions" className="inline-block">
                <button
                  type="button"
                  className="rounded-lg bg-white border-2 border-[#fab116] text-black px-4 py-2 text-sm sm:text-lg  shadow-sm hover:bg-[#fab116] transition"
                >
                  Explore Services
                </button>
              </a> */}
              <a href="/contactus" className="inline-block">
                <button
                  type="button"
                  className="border-2 border-[#fab116] text-white px-4 py-2 text-sm sm:text-lg  rounded-lg  hover:text-white transition"
                >
                  Get in Touch
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <TechnicalServices />
      <Clientsreviews />
      <Contact />
    </>
  );
};


export default SupportMaintenance;
