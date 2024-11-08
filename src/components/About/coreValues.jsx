import React from "react"; 
import { motion } from "framer-motion";
import image1 from "../../assets/About/principles.jpg";

const coreValues = [
  {
    id: 1,
    heading: "Integrity",
    content: "We uphold the highest standards of integrity in all our actions.",
  },
  {
    id: 2,
    heading: "Innovation",
    content: "We cultivate an environment where imagination and innovation thrive.",
  },
  {
    id: 3,
    heading: "Teamwork",
    content: "We work together, across boundaries, to meet the needs of our customers.",
  },
  {
    id: 4,
    heading: "Excellence",
    content: "We work to surpass expectations in all that we undertake.",
  },
];

// Reusable Core Values Card
const CoreValueCard = ({
  title,
  description,
  isRightBorder,
  isBottomBorder,
}) => (
  <motion.div
    className={`relative p-4 sm:p-6 lg:p-8 group overflow-hidden bg-black bg-opacity-60 flex flex-col items-center justify-center h-full border border-white transition-all duration-300 ease-in-out transform
    ${isRightBorder ? "sm:border-r" : ""}
    ${isBottomBorder ? "sm:border-b" : ""}`}
    initial={{ y: 0 }}
    whileHover={{ y: -10 }}
  >
    {/* Background overlay with opacity change on hover */}
    <div className="absolute inset-0 bg-black bg-opacity-40 z-0 transition-all duration-500 group-hover:bg-opacity-60" />
 
    {/* Title with underline effect */}
    <h3 className="relative z-10 text-base sm:text-lg md:text-xl lg:text-2xl font-handwritting text-white mb-1 group-hover:text-yellow-500 transition-colors duration-300 ">
      {title}
      <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-yellow-500 transition-all duration-500 transform -translate-x-1/2 group-hover:w-full" />
    </h3>
 
    {/* Content appears on hover */}
    <p className="relative z-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs sm:text-sm md:text-base lg:text-lg text-center mt-1 ">
      {description}
    </p>
  </motion.div>
);

const CoreValues = () => {
  return (
    <div className="relative z-10 py-8 sm:py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-2xl md:text-3xl xl:text-4xl 
      text-center mb-4 sm:mb-6 md:mb-8">
        Our Guiding Principles
      </h2>
      <div
        className="relative bg-cover bg-center rounded-5xl overflow-hidden"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 w-full h-full">
          {coreValues.map((value, index) => (
            <CoreValueCard
              key={value.id}
              title={value.heading}
              description={value.content}
              isRightBorder={index % 4 !== 3}
              isBottomBorder={index < coreValues.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
