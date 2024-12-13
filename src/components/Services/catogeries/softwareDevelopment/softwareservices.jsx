import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "@fortawesome/fontawesome-free/css/all.min.css";

// Sample data for services
const services = [
  { icon: "fas fa-drafting-compass", title: "Architecture & design" },
  { icon: "fas fa-palette", title: "Usability & interaction design" },
  { icon: "fas fa-laptop-code", title: "Development & implementation" },
  { icon: "fas fa-search", title: "Testing & quality assurance" },
  { icon: "fas fa-cloud", title: "Reengineering & migration" },
  { icon: "fas fa-scroll", title: "Technical & user documentation" },
  { icon: "fas fa-tools", title: "Maintenance & support" },
  { icon: "fas fa-chart-line", title: "Professional IT consultancy" },
];

const SoftwareServices = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Custom Software Development Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Icon */}
              <motion.i
                className={`${service.icon} text-yellow-500 text-4xl sm:text-5xl mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              />
              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default SoftwareServices;
