import React from "react";
import { motion } from "framer-motion";

const stepsData = [
  { title: "Share Your Vision", description: "Tell us your project goals and ideas.", icon: "📝" },
  { title: "Consultation", description: "We'll discuss your needs in detail.", icon: "💬" },
  { title: "Receive a Proposal", description: "Get a tailored plan for your project.", icon: "📋" },
  { title: "Begin the Journey", description: "Kickstart your project with Xwola.", icon: "🚀" },
];

const StepsSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">How to Get Started</h2>
      {/* Grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stepsData.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold text-gold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
