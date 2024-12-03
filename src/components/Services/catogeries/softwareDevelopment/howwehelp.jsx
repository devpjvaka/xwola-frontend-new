import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const features = [
  {
    title: "Software consulting",
    description:
      "We combine deep multi-domain expertise, client-centric thinking, and an innovative approach to design and plan reliable solutions that perfectly fit the needs and behavior of their users.",
  },
  {
    title: "Custom software development",
    description:
      "We create software with long-term business value – tailored uniquely to your business processes and adjustable to future needs.",
  },
  {
    title: "Enterprise software engineering",
    description:
      "We engineer multi-faceted enterprise solutions that easily withstand the highest loads, scale up as your business grows, and flexibly accommodate functional extensions.",
  },
  {
    title: "Support and maintenance",
    description:
      "We ensure the smooth functioning and relevancy of your software via ongoing performance monitoring, proactive optimization, fast issue resolution, delivery of new features and integrations.",
  },
];

const Howwehelp = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  // Animation variants for list items
  const featureVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.4 },
    }),
  };

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto p-6 md:p-8 min-h-[30vh]">
        {/* Heading and Introductory Text */}
        <div className="mb-12">
          <motion.h2
            className="text-4xl text-white mb-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { scale: 0.5, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 300, damping: 25 },
              },
            }}
            viewport={{ once: false }} // Only trigger animation once
          >
            <span className="bg-[#fab116] text-black px-3 py-3 rounded-lg inline-block">
              How
            </span>{" "}
            We Help
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: false }} // Trigger animation when the section comes into view
          >
            At Xwola, we are ready to offer end-to-end software
            engineering that covers everything from business analysis to
            software delivery and support, help modernize your legacy software,
            or provide expert advisory at any stage of SDLC.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white items-center">
          {/* Titles Column (Left Side) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="bg-black-800 p-6 rounded-lg space-y-4"
            viewport={{ once: false }} // Trigger animation when the section comes into view
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={featureVariant}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg cursor-pointer"
              >
                <motion.button
                  onClick={() =>
                    setSelectedFeature(selectedFeature === index ? null : index)
                  }
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    selectedFeature === index
                      ? "bg-gray-800 text-white"
                      : "bg-gray-800 text-white"
                  } hover:bg-gray-700 flex items-center justify-between`}
                >
                  <span>{feature.title}</span>
                  <motion.div
                    animate={{
                      rotate: selectedFeature === index ? 45 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <BsArrowUpRight />
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Description Column (Right Side) */}
          <motion.div
            className="flex flex-col justify-center p-6 rounded-lg transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: selectedFeature !== null ? 1 : 0,
              x: selectedFeature !== null ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} // Trigger animation when the section comes into view
          >
            {selectedFeature !== null && (
              <motion.div>
                <motion.h3
                  className="font-display text-3xl font-medium tracking-tight text-white mb-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {features[selectedFeature].title}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-300 text-center mb-6 ml-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {features[selectedFeature].description}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Howwehelp;
