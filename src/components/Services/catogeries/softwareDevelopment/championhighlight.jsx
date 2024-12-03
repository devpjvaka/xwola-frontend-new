import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Softwaretypes = () => {
  const gridItems = [
    {
      id: 1,
      title: "Business & Project Management",
      icon: "💡", // New AI Icon (lightbulb)
      points: [
        "ERP",
        "Project management",
        "Task management",
        "Risk and issue management",
        "Compliance management",
        "Document management",
      ],
    },
    {
      id: 2,
      title: "Sourcing & stock management",
      icon: "🛒",
      points: [
        "Supply chain management.",
        "Procurement management software.",
        "Vendor management.",
        "Transportation management.",
        "Inventory management.",
        "Warehouse management.",
      ],
    },
    {
      id: 3,
      title: "Asset management",
      icon: "📦",
      points: [
        "Asset utilization planning and control.",
        "Remote asset monitoring.",
        "MRO, including predictive maintenance, AR for maintenance.",
        "Asset warranty and contract management.",
      ],
    },
    {
      id: 4,
      title: "Sales, marketing & customer service",
      icon: "📣",
      points: [
        "Customer relationship management.",
        "Sales & marketing automation systems.",
        "AdTech & MarTech.",
        "Order management.",
        "Customer feedback tools.",
        "Promotions management software.",
        "Loyalty management.",
        "Customer service management, including call center & self-service.",
        "Product information management.",
        "Content management and digital asset management systems.",
      ],
    },
    {
      id: 5,
      title: "Corporate finance management",
      icon: "💼",
      points: [
        "Financial accounting and reporting.",
        "General ledger software.",
        "Accounts receivable automation.",
        "Billing and invoicing.",
        "Cost control software.",
        "Revenue management software.",
        "Pricing software.",
        "Treasury management.",
        "Cash management systems.",
      ],
    },
    {
      id: 6,
      title: "Data analytics",
      icon: "📈",
      points: [
        "BI solutions (DWHs, OLAP/ROLAP cubes, visualization and reporting).",
        "Big data solutions.",
        "Data science (including AI and ML) solutions.",
      ],
    },
    {
      id: 7,
      title: "Security & emergency",
      icon: "🛡️",
      points: [
        "Information security systems.",
        "Video surveillance.",
        "Incident management systems.",
        "Emergency response systems.",
      ],
    },
  ];

  const [expandedItems, setExpandedItems] = useState({});

  const toggleShowMore = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="container mx-auto py-8 px-6 lg:px-12">
      {/* Heading and Paragraph with animation */}
      <motion.div
        className="mb-6 mt-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="bg-gradient-to-r from-[#fab116]  to-white text-black py-3 rounded-lg inline-block font-semibold text-4xl">
          Laying the 
        </span>
        <span className="text-3xl text-black ml-2">
          Foundation for Future-Ready Software Solutions{" "}
        </span>
        <motion.p
          className="text-gray-600 mt-5 text-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We combine our growing expertise in software architecture and coding
          with a strong focus on understanding the industries and contexts where
          our solutions are applied.
        </motion.p>
        <motion.h1
          className="text-3xl font-bold text-gray-800 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          By business function
        </motion.h1>
      </motion.div>

      {/* Responsive Grid Section with Golden Border and Internal Animations */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full lg:max-w-4xl h-auto items-center justify-center mx-auto mt-4">
        {gridItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-white p-6 flex flex-col items-center justify-center text-center border-[1px] border-yellow-300 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-4xl bg-gray-200 rounded-full p-4 mb-4 flex items-center justify-center">
              {item.icon}
            </div>
            {/* Title and Ellipsis */}
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-xl font-semibold mr-2">{item.title}</h2>
              <span className="text-yellow-600 text-xl">...</span>
            </div>
            {/* Points List */}
            <motion.ul
              className="text-gray-700 space-y-2 text-sm sm:text-base"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <AnimatePresence>
                {!expandedItems[item.id] && (
                  <>
                    <motion.li
                      key={0}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: "easeInOut" },
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transition: { duration: 0.3, ease: "easeIn" },
                      }}
                      className="flex items-center"
                    >
                      <span className="w-3 h-3 bg-gray-500 inline-block mr-2"></span>
                      {item.points[0]}
                    </motion.li>
                    <motion.li
                      key="ellipsis"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0, transition: { duration: 0.3 } }}
                      className="text-black italic text-4xl"
                    >
                      ...
                    </motion.li>
                  </>
                )}

                {expandedItems[item.id] &&
                  item.points.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.15, // Adds delay between each point
                          duration: 0.6, // Makes the transition smoother
                          ease: "easeInOut",
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transition: {
                          delay: index * 0.15,
                          duration: 0.4,
                          ease: "easeIn",
                        },
                      }}
                      className="flex items-center"
                    >
                      <span className="w-3 h-3 bg-gray-500 inline-block mr-2"></span>
                      {point}
                    </motion.li>
                  ))}
              </AnimatePresence>
            </motion.ul>
            {/* Toggle Button */}
            <button
              onClick={() => toggleShowMore(item.id)}
              className="absolute bottom-2 right-2 text-yellow-600 rounded-md text-lg"
            >
              {expandedItems[item.id] ? (
                <span className="text-5xl">-</span>
              ) : (
                "See More"
              )}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Add padding below */}
      <div className="py-12"></div>
    </div>
  );
};

export default Softwaretypes;
