
import React from "react";
import {
  UsersIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons"; // Import Handshake Icon
import { motion ,useInView } from "framer-motion";
import { useRef} from "react";

const features = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faHandshake}
        className="text-yellow-500 w-10 h-10"
      />
    ),
    title: "Full software development outsourcing",
    description:
      "Our software product development services are delivered globally and managed locally. Your Delivery Manager will be based in the USA or Germany, where we have had a local presence for 20+ years, as a single, 24/7 point of contact to ensure high-quality, timely results.",
  },
  {
    icon: <UsersIcon className="w-10 h-10 text-yellow-500 " />,
    title: "Dedicated teams",
    description:
      "We set up the optimal development team for your project in one of our five international development centers to better match your time zone. Whether it’s San Francisco, Chicago, New York, London, Berlin, Tokyo, or Melbourne, we guarantee at least four hours of working time overlap between you and your remote team.",
  },
  {
    icon: <PuzzlePieceIcon className="w-10 h-10 text-yellow-500 " />,
    title: "Staff augmentation",
    description:
      "We prioritize a security-first approach when handling your sensitive data assets. For over 20 years, our team has been delivering high-grade solutions that excel at security and meet strict regulatory requirements and data security standards for compliance-heavy industries, including HIPAA, GDPR, PCI DSS, and other regulations.",
  },
];

const Scenario = () => {
  const ref = useRef(null); // Reference for the section
  const isInView = useInView(ref, { once: true, threshold: 0.2 }); // Animation triggers when 20% of the section is visible

  return (
    <div
      ref={ref}
      className="container mx-auto px-6 md:px-12 mt-12"
    >
      {/* Main Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Tailored Collaboration Models for Your Software Needs
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="text-gray-600 text-base md:text-lg mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Plan, design, and build quality software with expert guidance. Serving
        startups and enterprises across 30+ industries worldwide.
      </motion.p>

      {/* Grid Layout */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delayChildren: 0.2, staggerChildren: 0.2 },
          },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col p-6 bg-white shadow-lg relative rounded-lg border border-gray-200"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            {/* Icon Section */}
            <motion.div
              className="absolute -top-8 left-6 bg-white rounded-full p-2 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              {feature.icon}
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>

            {/* Angled Border Design */}
            <motion.div
              className={`absolute top-0 right-0 border-t-8 border-r-8 border-yellow-500`}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default Scenario;
