import React, { useState } from "react";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "home",
      label: "Audit",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-xl font-bold text-center text-[#fab116] relative">
            Audit
            <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-black"></span>
          </h3>{" "}
          <p className="text-gray-800 mt-4 text-center text-[15px] max-w-[90%] sm:max-w-[80%]">
            We analyze your website to identify areas of improvement, focusing
            on key metrics such as site speed, technical SEO, and overall user
            experience.
          </p>
          <p className="text-gray-800 mt-2 text-center text-[15px] max-w-[90%] sm:max-w-[80%]">
            Our audits are comprehensive, ensuring no critical aspect is
            overlooked.
          </p>
        </motion.div>
      ),
    },
    {
      id: "settings",
      label: "Optimization",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-xl font-bold text-center text-[#fab116] relative">
            Optimization
            <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-black"></span>
          </h3>{" "}
          <p className="text-gray-800 mt-4 text-center text-[15px] max-w-[90%] sm:max-w-[80%]">
            We enhance your website's on-page elements, including metadata,
            headings, and internal linking. Our goal is to improve rankings
            while delivering a seamless user experience.
          </p>
          <p className="text-gray-800 mt-2 text-center text-[15px] max-w-[90%] sm:max-w-[80%]">
            Technical optimizations, such as schema implementation and mobile
            responsiveness, are included in our strategy.
          </p>
        </motion.div>
      ),
    },
    {
      label: "Insights",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-xl font-bold text-center text-[#fab116] relative">
            Insights (Monitoring & Reporting){" "}
            <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-black"></span>
          </h3>{" "}
          <p className="text-gray-600 mt-4 text-center text-[15px] max-w-[90%] sm:max-w-[80%]">
            Our team consistently monitors your site's performance metrics,
            ensuring any changes in ranking or traffic are promptly addressed.
          </p>
          <p className="text-gray-600 mt-2 text-center text-[15px] max-w-[90%] sm:max-w-[80%]">
            We provide detailed monthly reports, highlighting progress, key
            metrics, and actionable insights for continuous improvement.
          </p>
        </motion.div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our SEO Process
        </motion.h2>
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
          <div className="flex flex-col sm:flex-row">
            {/* Tab Navigation */}
            <ul className="bg-gray-100 sm:min-w-[200px] flex sm:flex-col overflow-auto">
              {tabs.map((tab) => (
                <motion.li
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab text-gray-600 flex-1 sm:flex-none flex items-center justify-center font-semibold text-sm sm:text-[15px] px-4 py-3 border-b sm:border-b-0 sm:border-r-4 ${
                    activeTab === tab.id
                      ? "text-blue-500 bg-white border-[#fab116] font-bold"
                      : "border-gray-100 cursor-pointer hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {tab.label}
                </motion.li>
              ))}
            </ul>

            {/* Tab Content */}
            <div className="tab-content px-4 sm:px-8 py-4 sm:py-6 w-full h-[270px]">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
