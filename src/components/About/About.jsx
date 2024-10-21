import React from "react";

import aboutus from "../../assets/About/aboutus.jpg";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp, SlideRight } from "../../animation/animation";
import Brand1 from "../../assets/brands/arenase.png";
import Brand2 from "../../assets/brands/eaufladen.png";
import Brand3 from "../../assets/brands/itopup.png";
import Brand4 from "../../assets/brands/phl.png";
import Brand5 from "../../assets/brands/pj.png";
import Brand6 from "../../assets/brands/rb.png";
import icon1 from "../../assets/About/icon1.png";
import icon2 from "../../assets/About/icon2.png";
import icon3 from "../../assets/About/icon3.png";
import image1 from "../../assets/About/image1.jpg";
import image2 from "../../assets/About/image2.jpg";
import image3 from "../../assets/About/image3.jpg";
import image4 from "../../assets/About/image4.jpg";
import Icon1 from "../../assets/icons/Icon1.png";
import Icon2 from "../../assets/icons/Icon2.png";
import Icon3 from "../../assets/icons/Icon3.png";
import Icon4 from "../../assets/icons/Icon4.png";
import Icon5 from "../../assets/icons/Icon5.png";
import Icon6 from "../../assets/icons/Icon6.png";
import Icon7 from "../../assets/icons/Icon7.png";
import Icon8 from "../../assets/icons/Icon8.png";
import ourmission from "../../assets/About/ourmission.png";
import ourvision from "../../assets/About/ourvision.png";
//import count from  "../../components/About/count";

const services = [
  { id: 1, icon: Icon1, description: "Custom Software Development" },
  { id: 2, icon: Icon2, description: "Web Development" },
  { id: 3, icon: Icon3, description: "Dedicated Development Team" },
  { id: 4, icon: Icon4, description: "Product Development" },
  { id: 5, icon: Icon5, description: "E-Commerce" },
  { id: 6, icon: Icon6, description: "Mobile Apps" },
  { id: 7, icon: Icon7, description: "Testing & QA" },
  { id: 8, icon: Icon8, description: "UI/UX Design" },
];
const coreValues = [
  { id: 1, heading: "Integrity", content: "We uphold the highest standards of integrity in all our actions." },
  { id: 2, heading: "Innovation", content: "We foster a culture of creativity and innovation." },
  { id: 3, heading: "Teamwork", content: "We work together, across boundaries, to meet the needs of our customers." },
  { id: 4, heading: "Excellence", content: "We strive to exceed expectations in everything we do." },
  // Add more core values as needed
];

const About = () => {
  return (
    <>
      <section className="relative">
        {/* Hero Image Section */}
        <div className="absolute inset-0">
          <motion.img
            src={aboutus}
            alt="Hero"
            className="w-full h-full object-cover rounded-3xl"
            initial={{ scale: 1.05 }} // Start slightly zoomed in
            whileInView={{ scale: 1 }} // Scale back to normal
            transition={{ duration: 1 }} // Animation duration
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl" />{" "}
          {/* Transparent black overlay */}
        </div>

        {/* Content Section */}
        <div className="bg-brandwhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px] relative z-10">
          {" "}
          {/* z-10 to bring content above the overlay */}
          {/* Text section */}
          <div className="flex flex-col justify-center xl:pr-40">
            <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
              <motion.h1
                initial={{ y: -50, opacity: 0 }} // Start slightly above and transparent
                whileInView={{ y: 0, opacity: 1 }} // Move into view and become visible
                transition={{
                  type: "spring",
                  stiffness: 120,
                  duration: 0.6,
                  delay: 0.4,
                }} // Springy bounce
                className="text-5xl font-handwritting text-white"
              >
                At{" "}
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-gold to-white">
                  Xwola
                </span>{" "}
                <br />
                Your Vision Drives Our Innovation
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }} // Start slightly below and transparent
                whileInView={{ y: 0, opacity: 1 }} // Move into view and become visible
                transition={{ duration: 0.4, delay: 0.6 }} // Duration and delay
                className="text-lg text-white font-handwritting mt-4"
              >
                We specialize in crafting custom technology solutions,
                transforming your ideas into exceptional digital experiences.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
     
      

      {/* Mission & Vision Section */}
      <div className="py-20">
        <h2 className="text-3xl xl:text-4xl font-bold text-center mb-8">
          Shaping Our Mission and Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2  max-w-6xl mx-auto">
          {/* Mission Section */}
          <div className="flex flex-col justify-center p-6 border border-black-300 rounded-lg transition-all duration-300 hover:bg-black hover:text-white">
            <h3 className="text-2xl font-bold mb-4 ">Our Mission</h3>
            <p className="text-lg text-black-600">
              Our mission is to empower businesses with robust and scalable
              custom technology solutions tailored to their unique needs. We
              build lasting relationships through deep industry expertise,
              understanding, and relentless pursuit of excellence.
            </p>
          </div>
          {/* Image for Mission */}
          <motion.div
            variants={SlideLeft(0.6)}
            whileInView={"animate"}
            initial="initial"
            className="flex items-center justify-center p-6 border border-black-300  rounded-lg"
          >
            <img
              src={ourmission}
              alt="Mission Image"
              className="w-full h-full object-cover  rounded-lg"
            />
          </motion.div>
          {/* Image for Vision */}
          <motion.div
            variants={SlideRight(0.8)}
            whileInView={"animate"}
            initial="initial"
            className="flex items-center justify-center p-6 border border-black-300 rounded-lg"
          >
            <img
              src={ourvision}
              alt="Vision Image"
              className="w-full h-full object-cover  rounded-lg"
            />
          </motion.div>

          {/* Vision Section */}
          <div className="flex flex-col justify-center p-6 border border-black-300 rounded-lg transition-all duration-300 hover:bg-black hover:text-white">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg text-black-600">
              Our vision is fueled by a commitment to continuous innovation. We
              combine cutting-edge software development with strategic
              consulting to deliver impactful solutions that optimize business
              potential and drive sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="py-24 max-w-6xl w-full mx-auto mt-10">
        <div className="flex flex-col justify-center items-center text-center">
          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl xl:text-4xl font-bold mb-5"
          >
            Our Clientele
          </motion.h2>
          <motion.p
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-lg md:text-xl text-gray-500 max-w-4xl mb-5"
          >
            At Xwola, we are proud to serve a diverse clientele across various
            industries, providing tailored software solutions that empower their
            growth and drive innovation. Our commitment to understanding their
            unique needs has established strong partnerships built on trust and
            excellence.
          </motion.p>
        </div>
      </div>

      {/* Company Logos Grid */}

      <div className="container py-14">
        <div className="flex flex-wrap justify-center lg:justify-between gap-6">
          <motion.img
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            src={Brand1}
            alt="brand"
            className="w-[150px]"
          />
          <motion.img
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            src={Brand2}
            alt="brand"
            className="w-[150px]"
          />
          <motion.img
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView={"animate"}
            src={Brand3}
            alt="brand"
            className="w-[150px]"
          />
          <motion.img
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView={"animate"}
            src={Brand4}
            alt="brand"
            className="w-[150px]"
          />
          <motion.img
            variants={SlideUp(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={Brand5}
            alt="brand"
            className="w-[150px]"
          />
        </div>
      </div>

      {/* Our Core Value Section */}
      <div className="relative z-10 py-20 sm:py-20">
        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6 sm:mb-8 text-black">
          Our Guiding Principles
        </h2>

        {/* Padding container */}
        <div className="px-4 sm:px-8 lg:px-16">
          {/* Background and Grid container */}
          <div
            className="relative bg-cover bg-center rounded-5xl overflow-hidden"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: "150% auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "60vh", // Adjust height for desktop
              maxWidth: "100%", // Ensure full width on smaller screens
              margin: "0 auto",
            }}
          >
            {/* Content grid for desktop */}
            <div className="hidden lg:grid grid-cols-4 w-full h-full">
              {coreValues.map((value, index) => {
                return (
                  <motion.div
                    key={value.id}
                    className="relative group overflow-hidden bg-black bg-opacity-60 flex flex-col justify-end items-center h-full border-t border-white p-6 lg:p-8"
                    initial="initial"
                    whileHover="hover"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderBottom: index < coreValues.length - 1 ? "1px solid white" : "none",
                    }}
                  >
                    {/* Background layer with transition effect */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-0 transition-all duration-500 group-hover:blur-md group-hover:bg-black group-hover:bg-opacity-60" />

                    {/* Heading and Content container */}
                    <motion.div
                      className="relative text-center z-10 flex flex-col items-center justify-end h-full"
                      initial={{ y: 0 }} // Initial position
                      whileHover={{ y: -100 }} // Move up on hover
                      transition={{ duration: 0.6 }} // Smooth transition
                    >
                      {/* Heading always visible */}
                      <h3 className="text-xl font-bold text-white mb-4 opacity-100 transition-opacity duration-500">
                        {value.heading}
                      </h3>

                      {/* Content initially hidden */}
                      <motion.p
                        className="text-white"
                        initial={{ opacity: 0 }} // Initially hidden
                        animate={{ opacity: 1 }} // Become visible when the parent moves
                        transition={{ duration: 0.6 }} // Smooth transition for content
                      >
                        {value.content}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Content grid for mobile */}
            <div className="lg:hidden grid grid-cols-1 w-full h-auto">
              {coreValues.map((value, index) => {
                return (
                  <motion.div
                    key={value.id}
                    className="relative group overflow-hidden bg-black bg-opacity-60 flex flex-col justify-end items-center border-b border-white p-6"
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-0 transition-all duration-500 group-hover:blur-md group-hover:bg-black group-hover:bg-opacity-60" />

                    <motion.div
                      className="relative text-center z-10"
                      variants={{
                        initial: { y: 150, opacity: 1 },
                        hover: { y: -150, opacity: 1 },
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.h3 className="text-xl font-bold text-white mb-4">
                        {value.heading}
                      </motion.h3>
                      <motion.p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {value.content}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>







      {/* Our Services Section */}
      {/* < section className="py-20" >
        <motion.h2
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView={"animate"}
          className="text-4xl font-bold text-center mb-10"
        >
          Our Expertise
        </motion.h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-10">
          At our core, we specialize in developing digital products with cutting-edge
          <span className="text-black font-bold">
            user experiences that will delight your users.
          </span>
        </p>

        <motion.div
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView={"animate"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="flex flex-col items-center text-center border border-gray-300 p-4 rounded-md"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              transition={{ duration: 0.3 }} // Transition duration
            >
              <img
                src={service.icon}
                alt={`Service ${service.id}`}
                className="w-24 h-24 mx-auto mb-4 "
              />
              <p className="text-lg font-medium">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section > */}
      {/* Image Section */}

      {/* <section className="py-20">
        <motion.h2
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView={"animate"}
          className="text-4xl font-bold text-center mb-10"
        >
          Synergy in the Workplace
        </motion.h2>

        <motion.div
          variants={SlideLeft(0.8)}
          whileInView={"animate"}
          initial="initial"
          className="flex items-center justify-center mb-10"
        >
          <img src={Image1} alt="Empowering Technology" className="w-full h-full object-cover rounded-lg" />
        </motion.div>
      </section> */}

      {/* why xwola section */}

      <div className="py-20 max-w-6xl w-full mx-auto mt-10">
        <div className="flex flex-col justify-center items-center text-center">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl xl:text-4xl font-bold mb-5" 
          >
            Why Xwola
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-lg md:text-xl text-gray-500 max-w-4xl mb-5"
          >
            We leverage our extensive experience and talented resource pool to deliver
            the top-notch IT services for businesses globally. Over the years, we have
            succeeded in keeping up the trust placed in us by our customers and established
            long term relations.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20">
            {[
              {
                icon: icon1,
                title: 'One - Stop Solutions',
                description: 'We offer end-to-end IT services, design, development, quality assurance with a dedicated group of experts for various industry domains and technologies.',
              },
              {
                icon: icon2,
                title: 'Customer Focus',
                description: 'In this constantly changing and challenging business world, we aim to provide competent advice as per the custom needs of the client to meet their business goals.',
              },
              {
                icon: icon3,
                title: 'Commitment',
                description: 'We deliver the maximum value to our customers by becoming their reliable technology partner. Our success is defined by the success of our customer.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={SlideUp(0.6 + index * 0.2)} // Adjusted animation timing
                initial="initial"
                whileInView="animate"
                className="space-y-6 text-center md:px-4 xl:px-8"
              >
                <img src={item.icon} alt="" className="w-24 h-24 mx-auto" /> {/* Center icon */}
                <p className="text-3xl font-semibold">{item.title}</p>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
