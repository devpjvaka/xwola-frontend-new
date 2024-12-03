import React from "react";
import { motion } from "framer-motion";

const FeatureSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container px-6 py-10 mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold text-black capitalize lg:text-3xl dark:text-white"
        >
          Smart <br /> Automation{" "}
          <span className="underline decoration-[#fab116]">Solutions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-gray-900 xl:mt-6 dark:text-gray-300 text-xl"
        >
          Leverage advanced AI systems to automate workflows, optimize
          operations, and drive innovation seamlessly.
        </motion.p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 space-y-3 border-2 border-gray-400 rounded-xl"
          >
            <span className="inline-block text-[#fab116]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h14M4 14h10M4 18h6"
                />
                <circle cx="19" cy="10" r="1" fill="currentColor" />
                <circle cx="15" cy="14" r="1" fill="currentColor" />
                <circle cx="11" cy="18" r="1" fill="currentColor" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-black capitalize dark:text-white">
              Predictive Analytics
            </h1>
            <p className="text-gray-900 dark:text-gray-300">
              Use advanced models to forecast future trends and outcomes.
            </p>
            <a
              href="#"
              className="inline-flex p-2 text-black capitalize transition-colors duration-300 transform bg-[#fab116] rounded-full hover:underline hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 space-y-3 border-2 border-gray-400   rounded-xl"
          >
            <span className="inline-block text-[#fab116] dark:text-[#fab116]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-900 capitalize dark:text-white">
              Intelligent Systems{" "}
            </h1>
            <p className="text-gray-900 dark:text-gray-300">
              Automate processes and workflows with cutting-edge AI technology.
            </p>
            <a
              href="#"
              className="inline-flex p-2 text-black capitalize transition-colors duration-300 transform bg-[#fab116] rounded-full rtl:-scale-x-100  dark:text-white hover:underline "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="p-8 space-y-3 border-2 border-gray-400   rounded-xl"
          >
            <span className="inline-block text-[#fab116] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-900 capitalize dark:text-white">
              Data Insights{" "}
            </h1>
            <p className="text-gray-900 dark:text-gray-300">
              Uncover hidden patterns and turn your data into actionable
              strategies.
            </p>
            <a
              href="#"
              className="inline-flex p-2 text-black capitalize transition-colors duration-300 transform bg-[#fab116] rounded-full rtl:-scale-x-100  dark:text-white hover:underline "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureSection;
