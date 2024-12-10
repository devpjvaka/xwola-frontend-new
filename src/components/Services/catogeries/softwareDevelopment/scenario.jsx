
import React from "react";
import {
  UsersIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons"; // Import Handshake Icon
import { motion ,useInView } from "framer-motion";
import { useRef} from "react";
import Dubai from "../../../../assets/dubai.jpg"
// const features = [
//   {
//     icon: (
//       <FontAwesomeIcon
//         icon={faHandshake}
//         className="text-yellow-500 w-10 h-10"
//       />
//     ),
//     title: "Full software development outsourcing",
//     description:
//       "Our software product development services are delivered globally and managed locally. Your Delivery Manager will be based in the USA or Germany, where we have had a local presence for 20+ years, as a single, 24/7 point of contact to ensure high-quality, timely results.",
//   },
//   {
//     icon: <UsersIcon className="w-10 h-10 text-yellow-500 " />,
//     title: "Dedicated teams",
//     description:
//       "We set up the optimal development team for your project in one of our five international development centers to better match your time zone. Whether it’s San Francisco, Chicago, New York, London, Berlin, Tokyo, or Melbourne, we guarantee at least four hours of working time overlap between you and your remote team.",
//   },
//   {
//     icon: <PuzzlePieceIcon className="w-10 h-10 text-yellow-500 " />,
//     title: "Staff augmentation",
//     description:
//       "We prioritize a security-first approach when handling your sensitive data assets. For over 20 years, our team has been delivering high-grade solutions that excel at security and meet strict regulatory requirements and data security standards for compliance-heavy industries, including HIPAA, GDPR, PCI DSS, and other regulations.",
//   },
// ];

// const Scenario = () => {
//   const ref = useRef(null); // Reference for the section
//   const isInView = useInView(ref, { once: true, threshold: 0.2 }); // Animation triggers when 20% of the section is visible

//   return (
//     <div
//       ref={ref}
//       className="container mx-auto px-6 md:px-12 mt-12"
//     >
//       {/* Main Title */}
//       <motion.h1
//         className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
//         initial={{ opacity: 0, y: -20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.5 }}
//       >
//         Tailored Collaboration Models for Your Software Needs
//       </motion.h1>

//       {/* Paragraph */}
//       <motion.p
//         className="text-gray-600 text-base md:text-lg mb-8"
//         initial={{ opacity: 0, y: -20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6, delay: 0.2 }}
//       >
//         Plan, design, and build quality software with expert guidance. Serving
//         startups and enterprises across 30+ industries worldwide.
//       </motion.p>

//       {/* Grid Layout */}
//       <motion.div
//         className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         variants={{
//           hidden: { opacity: 0, scale: 0.8 },
//           visible: {
//             opacity: 1,
//             scale: 1,
//             transition: { delayChildren: 0.2, staggerChildren: 0.2 },
//           },
//         }}
//       >
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col p-6 bg-white shadow-lg relative rounded-lg border border-gray-200"
//             whileHover={{
//               scale: 1.05,
//               transition: { duration: 0.3 },
//             }}
//           >
//             {/* Icon Section */}
//             <motion.div
//               className="absolute -top-8 left-6 bg-white rounded-full p-2 shadow-lg"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.4 }}
//             >
//               {feature.icon}
//             </motion.div>

//             {/* Text Section */}
//             <motion.div
//               className="mt-10"
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ delay: 0.2, duration: 0.4 }}
//             >
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                 {feature.title}
//               </h2>
//               <p className="text-gray-600 text-sm">{feature.description}</p>
//             </motion.div>

//             {/* Angled Border Design */}
//             <motion.div
//               className={`absolute top-0 right-0 border-t-8 border-r-8 border-yellow-500`}
//               style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
//               initial={{ scaleX: 0 }}
//               animate={isInView ? { scaleX: 1 } : {}}
//               transition={{ duration: 0.5 }}
//             ></motion.div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };
// export default Scenario;
import { useState } from "react";
import AI from "../../../../assets/Services/Services_/ai&datascience (1).jpg";
import DevOps from "../../../../assets/Services/Services_/SupportMaintenance2.jpg";
import DigitalExperiance from "../../../../assets/Services/Services_/digitalexperience.jpg";
// const services = [
//   {
//     id: 1,
//     title: "AI & Data Science",
//     description:
//       "Leverage advanced algorithms to analyze vast amounts of data, uncover valuable insights, and enable informed decision-making, driving innovation and offering significant growth potential.",
//     image: AI,
//   },
//   {
//     id: 2,
//     title: "DevOps & Maintenance",
//     description:
//       "Ensures the smooth operation of software and IT systems through ongoing troubleshooting, timely updates, and dedicated user support, minimizing downtime and maximizing productivity.",
//     image: DevOps,
//   },
//   {
//     id: 3,
//     title: "Digital Experience",
//     description:
//       "We craft exceptional digital experiences across web and mobile platforms, helping businesses engage users and thrive in a digital-first world.",
//     image: DigitalExperiance,
//   },
// ];

// const Scenario = () => {
//   const [activeService, setActiveService] = useState(services[0]);

//   return (
//     <section className="container mx-auto px-6 py-12 bg-gray-50">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">
//         Get comprehensive custom software development services
//       </h1>
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Vertical Navigation */}
//         <div className="md:w-1/4">
//           <ul className="space-y-4 border-l border-gray-300">
//             {services.map((service) => (
//               <li
//                 key={service.id}
//                 className={`pl-4 cursor-pointer ${
//                   activeService.id === service.id
//                     ? "text-red-500 font-semibold border-l-2 border-red-500"
//                     : "text-gray-800"
//                 }`}
//                 onClick={() => setActiveService(service)}
//               >
//                 {service.title}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Text Content */}
//         <div className="md:w-2/4">
//           <h2 className="text-xl font-bold mb-4 text-gray-800">
//             {activeService.title}
//           </h2>
//           <p className="text-gray-600">{activeService.description}</p>
//         </div>

//         {/* Image Section */}
//         <div className="md:w-1/4">
//           <img
//             src={activeService.image}
//             alt={activeService.title}
//             className="rounded-lg shadow-md w-full h-auto object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
const Scenario = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="max-w-7xl w-full h-[800px] grid lg:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Section */}
        <div className="p-10 flex flex-col justify-between relative">
          <div>
            <motion.p
              className="text-gray-500 text-sm mb-2 mt-60 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Building Your Dreams
            </motion.p>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Real Estate in Dubai: <br />
              Ideal for Living and Investing
            </motion.h1>
          </div>
          <div className="absolute bottom-10 left-10 flex items-center gap-6">
            <motion.button
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Contact Us Now
            </motion.button>
            <motion.button
              className="flex items-center gap-2 text-gray-900"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Explore All Our Properties
              <span className="inline-block bg-gray-300 p-2 rounded-full">
                →
              </span>
            </motion.button>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="relative overflow-hidden rounded-lg h-[750px] mt-6 mr-7">
          {/* Image */}
          <motion.img
            src={Dubai} // Replace with the path to your uploaded image
            alt="Real Estate in Dubai"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          {/* Text on Image */}
          <div className="absolute top-4 left-4 text-white">
            <motion.p
              className="text-sm mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              More than 1500 real estate properties
            </motion.p>
            <motion.p
              className="text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              From $145,000 with a yield of 10% per annum
            </motion.p>
          </div>
          {/* Download Button */}
          <motion.div
            className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm">Catalog Download</p>
            <button className="bg-gray-300 p-2 rounded-full">↓</button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Scenario;
