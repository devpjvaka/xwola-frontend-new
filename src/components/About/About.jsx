// import React from "react";
 
// import aboutus from "../../assets/About/hero_abt 1.jpg";
// import { motion } from "framer-motion";
// import { SlideLeft, SlideUp, SlideRight } from "../../animation/animation";
// import Brand1 from "../../assets/brands/arenase.png";
// import Brand2 from "../../assets/brands/eaufladen.png";
// import Brand3 from "../../assets/brands/itopup.png";
// import Brand4 from "../../assets/brands/phl.png";
// import Brand5 from "../../assets/brands/pj.png";
// import Brand6 from "../../assets/brands/rb.png";
// import icon1 from "../../assets/About/icon1.png";
// import icon2 from "../../assets/About/icon2.png";
// import icon3 from "../../assets/About/icon3.png";
// import image1 from "../../assets/About/principles.jpg"
 
// // import Icon1 from "../../assets/icons/Icon1.png";
// // import Icon2 from "../../assets/icons/Icon2.png";
// // import Icon3 from "../../assets/icons/Icon3.png";
// // import Icon4 from "../../assets/icons/Icon4.png";
// // import Icon5 from "../../assets/icons/Icon5.png";
// // import Icon6 from "../../assets/icons/Icon6.png";
// // import Icon7 from "../../assets/icons/Icon7.png";
// // import Icon8 from "../../assets/icons/Icon8.png";
// import ourmission from "../../assets/About/ourmission 1.jpg";
// import ourvision from "../../assets/About/ourvision.jpg";
// import CountUp from "react-countup"; // Import CountUp for animated counter
// import { useInView } from "react-intersection-observer"; // To detect when the section is visible
 
// // const services = [
// //   { id: 1, icon: Icon1, description: "Custom Software Development" },
// //   { id: 2, icon: Icon2, description: "Web Development" },
// //   { id: 3, icon: Icon3, description: "Dedicated Development Team" },
// //   { id: 4, icon: Icon4, description: "Product Development" },
// //   { id: 5, icon: Icon5, description: "E-Commerce" },
// //   { id: 6, icon: Icon6, description: "Mobile Apps" },
// //   { id: 7, icon: Icon7, description: "Testing & QA" },
// //   { id: 8, icon: Icon8, description: "UI/UX Design" },
// // ];
// const coreValues = [
//   { id: 1, heading: "Integrity", content: "We uphold the highest standards of integrity in all our actions." },
//   { id: 2, heading: "Innovation", content: "We cultivate an environment where imagination and innovation thrive." },
//   { id: 3, heading: "Teamwork", content: "We work together, across boundaries, to meet the needs of our customers." },
//   { id: 4, heading: "Excellence", content: "We work to surpass expectations in all that we undertake." },
//   // Add more core values as needed
// ];
// const numericData = [
//   { id: 1, number: 200, label: "Projects Completed" },
//   { id: 2, number: 50, label: "Clients Served" },
//   { id: 3, number: 10, label: "Years of Experience" },
//   { id: 4, number: 5, label: "Countries Reached" },
// ];
// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Animation runs only once
//     threshold: 0.2, // Trigger when 20% of the section is visible
//   });
//   // Debugging: Check if the section is in view
//   console.log('Is the section in view?', inView);
 
//   return (
//     <>
//       <section className="relative">
//         {/* Hero Image Section */}
//         <div className="absolute inset-0">
//           <motion.img
//             src={aboutus}
//             alt="Hero"
//             className="w-full h-full object-cover"
//             initial={{ scale: 1.05 }} // Start slightly zoomed in
//             whileInView={{ scale: 1 }} // Scale back to normal
//             transition={{ duration: 1 }} // Animation duration
//           />
//           <div className="absolute inset-0 bg-black opacity-50 " />{" "}
//           {/* Transparent black overlay */}
//         </div>
 
//         {/* Content Section */}
//         <div className="bg-brandwhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px] relative z-10">
//           {" "}
//           {/* z-10 to bring content above the overlay */}
//           {/* Text section */}
//           <div className="flex flex-col justify-center xl:pr-40">
//             <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
//               <motion.h1
//                 initial={{ y: -50, opacity: 0 }} // Start slightly above and transparent
//                 whileInView={{ y: 0, opacity: 1 }} // Move into view and become visible
//                 transition={{
//                   type: "spring",
//                   stiffness: 120,
//                   duration: 0.6,
//                   delay: 0.4,
//                 }} // Springy bounce
//                 className="text-5xl font-handwritting text-white"
//               >
//                 At{" "}
//                 <span className="text-transparent  bg-clip-text bg-gradient-to-r from-gold to-white">
//                   Xwola
//                 </span>{" "}
//                 <br />
//                 Your Vision Drives Our Innovation
//               </motion.h1>
//               <motion.p
//                 initial={{ y: 20, opacity: 0 }} // Start slightly below and transparent
//                 whileInView={{ y: 0, opacity: 1 }} // Move into view and become visible
//                 transition={{ duration: 0.4, delay: 0.6 }} // Duration and delay
//                 className="text-lg text-white font-handwritting mt-4"
//               >
//                 We specialize in crafting custom technology solutions,
//                 transforming your ideas into exceptional digital experiences.
//               </motion.p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Numeric Data Section */}
//       <section className="py-24 bg-white-100" ref={ref}>
//         <div className="container mx-auto">
//           <h2 className="text-3xl xl:text-4xl font-handwritting text-center mb-10">
//             Our Achievements
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             {numericData.map((data) => (
//               <div key={data.id} className="flex flex-col items-center">
//                 {/* Log data for debugging */}
//                 {console.log('Rendering CountUp for:', data.label, data.number)}
 
//                 {/* Only render CountUp when inView is true */}
//                 {inView ? (
//                   <CountUp
//                     start={0}
//                     end={data.number}
//                     duration={2.5}
//                     separator=","
//                     className="text-4xl font-handwritting text-[#b27200]"
//                     suffix="+" // Adding the prefix "+" here
//                   />
//                 ) : (
//                   <span className="text-4xl font-handwritting text-[#b27200]">0</span>
//                 )}
//                 <p className="mt-4 text-lg font-handwritting text-gray-700">
//                   {data.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
 
//       {/* Mission & Vision Section */}
//       <div className="py-20">
//         <h2 className="text-3xl xl:text-4xl font-handwritting text-center mb-10">
//           Shaping Our Mission and Vision
//         </h2>
 
//         <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
//           {/* Mission Section */}
//           <div className="flex flex-col justify-center p-6 border border-gold rounded-lg transition-all duration-300 hover:bg-black hover:text-white group">
//             <h3 className="text-2xl font-handwritting mb-4 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Our Mission</h3>
//             <p className="text-lg text-black-600 font-handwritting transition-colors duration-300 group-hover:text-white">
//               Our mission is to empower businesses with robust and scalable custom technology solutions tailored to their unique needs. We build lasting relationships through deep industry expertise, understanding, and relentless pursuit of excellence.
//             </p>
//           </div>
 
//           {/* Image for Mission */}
//           <motion.div
//             variants={SlideLeft(0.6)}
//             whileInView={"animate"}
//             initial="initial"
//             className="flex items-center justify-center p-6 border border-black-300 rounded-lg"
//           >
//             <img
//               src={ourmission}
//               alt="Mission Image"
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </motion.div>
 
//           {/* Image for Vision (order-last on mobile) */}
//           <motion.div
//             variants={SlideRight(0.8)}
//             whileInView={"animate"}
//             initial="initial"
//             className="flex items-center justify-center p-6 border border-black-300 rounded-lg order-last md:order-none"
//           >
//             <img
//               src={ourvision}
//               alt="Vision Image"
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </motion.div>
 
//           {/* Vision Section */}
//           <div className="flex flex-col justify-center p-6 border border-gold rounded-lg transition-all duration-300 hover:bg-black hover:text-white group">
//             <h3 className="text-2xl font-handwritting mb-4 transition-colors duration-300 group-hover:text-gold">Our Vision</h3>
//             <p className="text-lg text-black-600 font-handwritting transition-colors duration-300 group-hover:text-white">
//               Our vision is fueled by a commitment to continuous innovation. We combine cutting-edge software development with strategic consulting to deliver impactful solutions that optimize business potential and drive sustainable growth.
//             </p>
//           </div>
//         </div>
//       </div>
 
//       {/* Our Clients Section */}
//       <div className="py-10 max-w-6xl w-full mx-auto mt-10">
//         <div className="flex flex-col justify-center items-center text-center">
//           <motion.h2
//             variants={SlideUp(0.2)}
//             initial="initial"
//             whileInView={"animate"}
//             className="text-3xl xl:text-4xl font-handwritting mb-5"
//           >
//             Our Clientes
//           </motion.h2>
//           <motion.p
//             variants={SlideUp(0.2)}
//             initial="initial"
//             whileInView={"animate"}
//             className="flex flex-col text-base md:text-lg lg:text-xl text-gray-500 max-w-4xl mb-5 font-handwritting leading-relaxed text-justify px-4 sm:px-6" // Added padding for mobile and larger screens
//           >
//             At Xwola, we are proud to serve a diverse clientele across various
//             industries, providing tailored software solutions that empower their
//             growth and drive innovation. Our commitment to understanding their
//             unique needs has established strong partnerships built on trust and
//             excellence.
//           </motion.p>
 
//         </div>
//       </div>
 
//       {/* Company Logos Grid */}
 
//       <div className="container py-14">
//         <div className="flex flex-wrap justify-center lg:justify-between gap-6">
//           <motion.img
//             variants={SlideUp(0.2)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand1}
//             alt="brand"
//             className="w-[150px]"
//           />
//           <motion.img
//             variants={SlideUp(0.4)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand2}
//             alt="brand"
//             className="w-[150px]"
//           />
//           <motion.img
//             variants={SlideUp(0.6)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand3}
//             alt="brand"
//             className="w-[150px]"
//           />
//           <motion.img
//             variants={SlideUp(0.8)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand4}
//             alt="brand"
//             className="w-[150px]"
//           />
//           <motion.img
//             variants={SlideUp(1.0)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand5}
//             alt="brand"
//             className="w-[150px]"
//           />
//         </div>
//       </div>
 
//       {/* Our Core Value Section */}
//       <div className="relative z-10 py-8 sm:py-10 md:py-16 lg:py-20">
//         <h2 className="text-3xl sm:text-2xl md:text-3xl xl:text-4xl font-handwritting text-center mb-4 sm:mb-6 md:mb-8 text-black">
//           Our Guiding Principles
//         </h2>
 
//         {/* Padding container */}
//         <div className="px-4 sm:px-6 md:px-8 lg:px-16">
//           {/* Background and Grid container */}
//           <div
//             className="relative bg-cover bg-center rounded-5xl overflow-hidden"
//             style={{
//               backgroundImage: `url(${image1})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               height: "50vh", // Adjusted height for mobile screens
//               maxWidth: "100%",
//               margin: "0 auto",
//             }}
//           >
//             {/* Responsive grid layout */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full h-full">
//               {coreValues.map((value, index) => (
//                 <motion.div
//                   key={value.id}
//                   className={`relative group overflow-hidden bg-black bg-opacity-60 flex flex-col justify-center sm:justify-end items-center h-full border-t border-white p-4 sm:p-6 lg:p-8 ${index % 4 !== 3 ? "border-r border-white" : ""}`}
//                   initial="initial"
//                   whileHover="hover"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     borderBottom: index < coreValues.length - 1 ? "1px solid white" : "none",
//                   }}
//                 >
//                   {/* Background overlay with hover effect */}
//                   <div className="absolute inset-0 bg-black bg-opacity-40 z-0 transition-all duration-500 group-hover:blur-md group-hover:bg-black group-hover:bg-opacity-60" />
 
//                   {/* Heading and content container */}
//                   <motion.div
//                     className="relative text-center z-10 flex flex-col items-center justify-center sm:justify-end h-full font-handwritting"
//                     initial={{ y: 0 }}
//                     whileHover={{ y: -20 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     {/* Heading with adjusted position */}
//                     <h3 className="relative text-base sm:text-lg md:text-xl lg:text-2xl font-handwritting text-white mb-2 sm:mb-3 lg:mb-4 opacity-100 transition-opacity duration-500 after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-500 group-hover:after:w-full group-hover:after:left-0">
//                       {value.heading}
//                     </h3>
 
//                     {/* Content appears on hover */}
//                     <motion.p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs sm:text-sm md:text-base lg:text-lg">
//                       {value.content}
//                     </motion.p>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
 
//       {/* Our Services Section */}
//       {/* < section className="py-20" >
//         <motion.h2
//           variants={SlideUp(0.2)}
//           initial="initial"
//           whileInView={"animate"}
//           className="text-4xl font-bold text-center mb-10"
//         >
//           Our Expertise
//         </motion.h2>
//         <p className="text-lg text-center max-w-3xl mx-auto mb-10">
//           At our core, we specialize in developing digital products with cutting-edge
//           <span className="text-black font-bold">
//             user experiences that will delight your users.
//           </span>
//         </p>
 
//         <motion.div
//           variants={SlideUp(0.4)}
//           initial="initial"
//           whileInView={"animate"}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-16"
//         >
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               className="flex flex-col items-center text-center border border-gray-300 p-4 rounded-md"
//               whileHover={{ scale: 1.1 }} // Scale up on hover
//               transition={{ duration: 0.3 }} // Transition duration
//             >
//               <img
//                 src={service.icon}
//                 alt={`Service ${service.id}`}
//                 className="w-24 h-24 mx-auto mb-4 "
//               />
//               <p className="text-lg font-medium">{service.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section > */}
//       {/* Image Section */}
 
//       {/* <section className="py-20">
//         <motion.h2
//           variants={SlideUp(0.2)}
//           initial="initial"
//           whileInView={"animate"}
//           className="text-4xl font-bold text-center mb-10"
//         >
//           Synergy in the Workplace
//         </motion.h2>
 
//         <motion.div
//           variants={SlideLeft(0.8)}
//           whileInView={"animate"}
//           initial="initial"
//           className="flex items-center justify-center mb-10"
//         >
//           <img src={Image1} alt="Empowering Technology" className="w-full h-full object-cover rounded-lg" />
//         </motion.div>
//       </section> */}
 
//       {/* why xwola section */}
 
//       <div className="py-14 max-w-6xl w-full mx-auto mt-10">
//         <div className="flex flex-col justify-center items-center text-center">
//           <motion.h1
//             variants={SlideUp(0.2)}
//             initial="initial"
//             whileInView="animate"
//             className="text-3xl xl:text-4xl font-handwritting mb-5"
//           >
//             Why Xwola
//           </motion.h1>
//           <motion.p
//             variants={SlideUp(0.4)}
//             initial="initial"
//             whileInView="animate"
//             className="text-lg md:text-xl text-gray-500 max-w-4xl mb-5 font-handwritting text-justify px-4 sm:px-6" // Added padding for mobile and larger screens
//           >
//             We leverage our extensive experience and talented resource pool to deliver
//             the top-notch IT services for businesses globally. Over the years, we have
//             succeeded in keeping up the trust placed in us by our customers and established
//             long term relations.
//           </motion.p>
 
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 font-handwritting  text-justify">
//             {[
//               {
//                 icon: icon1,
//                 title: 'One - Stop Solutions',
//                 description: 'We offer end-to-end IT services,design,development, quality assurance with a dedicated group of experts for various industry domains and technologies.',
//               },
//               {
//                 icon: icon2,
//                 title: 'Customer Focus',
//                 description: 'In this constantly changing and challenging business world, we aim to provide competent advice as per the custom needs of the client to meet their business goals.',
//               },
//               {
//                 icon: icon3,
//                 title: 'Commitment',
//                 description: 'We deliver the maximum value to our customers by becoming their reliable technology partner. Our success is defined by the success of our customer.',
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={SlideUp(0.6 + index * 0.2)} // Adjusted animation timing
//                 initial="initial"
//                 whileInView="animate"
//                 className="space-y-6 text-center md:px-6 xl:px-10 border border-gray-300 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 max-w-[300px] mx-auto" // Increased width to 300px
//               >
//                 <img src={item.icon} alt={item.title} className="w-24 h-24 mx-auto" /> {/* Centered icon */}
//                 <p className="text-3xl font-handwritting   ">{item.title}</p>
//                 <p className="text-justify">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
 
//         </div>
//       </div>
 
//     </>
//   );
// };
 
// export default About;
import React from "react";
import aboutus from "../../assets/About/hero_abt 1.jpg";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp, SlideRight } from "../../animation/animation";
 
import { useInView } from "react-intersection-observer";
 
 
import Clients from "./clients";
 
import MissionAndVision from "./missionAndvision";
import Achievements from "./achivements";
import CoreValues from "./coreValues";
 
 
 
 
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
 
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0">
          <motion.img
            src={aboutus}
            alt="Hero"
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
 
        <div className="relative z-10 container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-6 bg-brandwhite rounded-3xl min-h-[650px]">
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                duration: 0.6,
                delay: 0.4,
              }}
              className="text-4xl md:text-5xl font-handwritting text-white"
            >
              At{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">
                Xwola
              </span>
              <br />
              Your Vision Drives Our Innovation
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-lg text-white font-handwritting"
            >
              We specialize in crafting custom technology solutions,
              transforming your ideas into exceptional digital experiences.
            </motion.p>
          </div>
        </div>
      </section>
      <Achievements/>
      <MissionAndVision/>
      <Clients/>
      <CoreValues/>
    </>
  );
};
 
 
 
 
 
export default About;
