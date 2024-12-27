import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Byindustryspecific = () => {
  const gridItems = [
    {
      id: 1,
      title: "Healthcare",
      icon: "🏥",
      points: [
        "EHR/EMR.",
        "Healthcare information system (HIS).",
        "Hospital apps.",
        "Care coordination.",
        "Medical image analysis software.",
        "Lab management.",
        "In vitro diagnostics software.",
        "Telemedicine.",
        "Remote patient monitoring.",
        "Mental health apps.",
        "Wellness apps.",
        "Fitness apps.",
        "Clinical trial management.",
      ],
    },
    {
      id: 2,
      title: "Retail & Wholesale",
      icon: "🛍️",
      points: [
        "Point-of-sale systems.",
        "Inventory management.",
        "Customer loyalty programs.",
        "E-commerce platforms.",
        "Order fulfillment solutions.",
        "Retail analytics tools.",
      ],
    },
    {
      id: 3,
      title: "Telecommunications",
      icon: "📡",
      points: [
        "Network management systems.",
        "Customer billing systems.",
        "Communication platforms.",
        "Infrastructure monitoring tools.",
        "VoIP solutions.",
        "Customer relationship management for telecom.",
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
    <div className="container mx-auto py-8 px-6 lg:px-12 mt-0">
      <motion.div
        className="mb-6 mt-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          By industry specifics
        </motion.h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full lg:max-w-4xl h-auto items-center justify-center mx-auto mt-0">
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
            <div className="flex mb-4">
              <h2 className="text-xl font-semibold mr-2">{item.title}</h2>
              <span className="text-yellow-600 text-xl">...</span>
            </div>
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
                          delay: index * 0.15,
                          duration: 0.6,
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
      <div className="py-12"></div>
    </div>
  );
};

export default Byindustryspecific;
