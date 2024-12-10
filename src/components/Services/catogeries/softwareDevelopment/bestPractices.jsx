import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import bestpractise from "../../../../assets/Services/catogeries/softwaredevelopment/bestpractise.jpg";

const BestPractices = () => {
  return (
    <div
      className="relative bg-cover bg-center h-auto min-h-[50vh]"
      // style={{ backgroundImage: `url(${bestpractise})` }} // Use the imported image
    >
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col space-y-16">
        {/* Section 1 */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="relative text-4xl font-extrabold text-gray-900 mb-6 tracking-wide leading-tight">
            BEST PRACTICES MAKE A GREAT SOFTWARE
            <span
              className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-16 h-1"
              style={{ backgroundColor: "#fab116" }} // Gold underline color
              aria-hidden="true"
            ></span>
          </h2>
          <p className="text-lg leading-relaxed">
            Our capacity to help customers is a result of implementing sound
            processes in software development. We are also open to working with
            a specific methodology, based on the project’s requirements.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="relative text-4xl font-extrabold text-gray-900 mb-6 tracking-wide leading-tight">
            WE UNDERSTAND YOUR BUSINESS
            <span
              className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-20 h-1"
              style={{ backgroundColor: "#fab116" }} // Gold underline color
              aria-hidden="true"
            ></span>
          </h2>
          <p className="text-lg leading-relaxed">
            We ask all the right questions from the beginning of our
            collaboration, in order to validate assumptions and create a clear
            roadmap towards achieving the required business goals.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <h2 className="relative text-4xl font-extrabold text-gray-900 mb-6 tracking-wide leading-tight">
            WE ACHIEVE PROJECT SUCCESS NO MATTER WHAT
            <span
              className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1"
              style={{ backgroundColor: "#fab116" }} // Gold underline color
              aria-hidden="true"
            ></span>
          </h2>
          <p className="text-lg leading-relaxed">
            Xwola does not pass mere project administration off as project
            management, which, unfortunately, often happens on the market. We
            practice real project management, achieving project success for our
            clients no matter what.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default BestPractices;
