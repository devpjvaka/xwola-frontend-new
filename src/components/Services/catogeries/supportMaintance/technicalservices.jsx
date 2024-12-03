import React from "react";
import { motion } from "framer-motion";
import { FaBroadcastTower, FaBug, FaCogs, FaSyncAlt, FaGlobe, FaPhoneAlt, FaAward } from "react-icons/fa";

const SupportServices = () => {
  const services = [
    {
      icon: <FaBroadcastTower className="text-gold w-12 h-12" />,
      title: "Performance Monitoring",
      description: `Proactive monitoring of software performance 
to ensure stability and efficient operation, 
minimizing downtime and disruptions.`,
    },
    {
      icon: <FaBug className="text-gold w-12 h-12" />,
      title: "Bug Fixing",
      description: `Rapid identification and resolution of software bugs 
to maintain seamless functionality 
and user satisfaction.`,
    },
    {
      icon: <FaCogs className="text-gold w-12 h-12" />,
      title: "System Optimization",
      description: `Enhancing software functionalities for 
better performance and user experience, 
ensuring maximum efficiency.`,
    },
    {
      icon: <FaSyncAlt className="text-gold w-12 h-12" />,
      title: "Continuous Updates",
      description: `Regular updates to improve features, 
fix vulnerabilities, and align with 
the latest technological advancements.`,
    },
    {
      icon: <FaGlobe className="text-gold w-12 h-12" />,
      title: "Adaptation to Changing Business Needs",
      description: `Tailoring software solutions to evolving business 
requirements, ensuring relevance 
and scalability over time.`,
    },
    {
      icon: <FaPhoneAlt className="text-gold w-12 h-12" />,
      title: "Technical Assistance",
      description: `Dedicated support team available to 
address technical queries and 
provide solutions swiftly.`,
    },
    {
      icon: <FaAward className="text-gold w-12 h-12" />,
      title: "Long-term Success Assurance",
      description: `Comprehensive strategies to ensure the software 
remains reliable, secure, and 
aligned with organizational goals.`,
    },
  ];

  return (
    <section className="bg-white py-16 mt-7">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-center text-3xl font-bold mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Software maintenance and technical support services we offer:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className=" text-center flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {/* Centered Icon */}
              <div className="flex items-center justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm whitespace-pre-line">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SupportServices;
