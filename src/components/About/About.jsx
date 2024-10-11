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
  {
    id: 1,
    image: image1,
    heading: "Unified",
    content:
      "At Xwola, we believe in the power of unity, fostering a collaborative environment where diverse perspectives come together. Our commitment to a unified team ensures that we leverage collective strengths, driving innovation and delivering exceptional results for our clients.",
  },
  {
    id: 2,
    image: image2,
    heading: "Confident",
    content:
      "Confidence drives our approach to custom technology solutions. We bring unwavering certainty to every project, delivering robust, reliable, and innovative outcomes that empower businesses to excel and grow.",
  },
  {
    id: 3,
    image: image3,
    heading: "Reliable",
    content:
      "Reliability defines our approach at Xwola and guides our digital transformation services. We deliver dependable end-to-end solutions, ensuring business resilience and growth in the ever-evolving digital landscape.",
  },
  {
    id: 4,
    image: image4,
    heading: "Transformative",
    content:
      "Xwola’s transformative ethos revolutionizes industries with pioneering software development services. We empower businesses to achieve unparalleled growth and innovation in an ever-evolving digital landscape.",
  },
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
          <div className="absolute inset-0 bg-black opacity-50" />{" "}
          {/* Transparent black overlay */}
        </div>

        {/* Content Section */}
        <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px] relative z-10">
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
      <div className="py-20 max-w-6xl w-full mx-auto mt-10">
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
            className="text-lg md:text-xl text-blck-600 max-w-4xl mb-5"
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

      <div className="py-20">
        <h2 className="text-3xl xl:text-4xl font-bold text-center mb-8">
          Our Guiding Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-10">
          {coreValues.map((value) => (
            <motion.div
              key={value.id}
              className="relative group overflow-hidden"
              initial="initial"
              whileHover="hover" // Trigger both heading and content animations on hover
            >
              {/* Image with slight zoom on hover */}
              <motion.img
                src={value.image}
                alt={value.heading}
                className="w-full h-64 object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60">
                {/* Heading with zoom-out effect */}
                <motion.h3
                  className="text-2xl font-bold text-white bg-opacity-80 px-4 py-2"
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 0.9 }, // Zoom out on hover
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {value.heading}
                </motion.h3>

                {/* Content with zoom-in effect */}
                <motion.p
                  className="text-white mt-2 text-center"
                  variants={{
                    initial: { scale: 0.9, opacity: 0.5 }, // Initially zoomed out
                    hover: { scale: 1, opacity: 1 }, // Zoom in and fully visible on hover
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {value.content}
                </motion.p>
              </div>
            </motion.div>
          ))}
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
            className="text-lg md:text-xl text-blck-600 max-w-4xl mb-5"
          >
            We leverage our extensive experience and talented resource pool to
            deliver the top-notch IT services for businesses globally. Over the
            years, we have succeeded in keeping up the trust placed in us by our
            customers and established long term relations
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20">
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="space-y-6 text-center md:text-left md:px-4 xl:px-8"
            >
              <img src={icon1} alt="" className="w-24 h-24 mx-auto md:mx-0" />
              <p className="text-3xl font-semibold"> One - Stop Solutions</p>
              <p>
                We offer end-to-end IT services, design, development,quality
                assurance with a dedicated group of experts for various industry
                domains and technologies
              </p>
            </motion.div>

            <motion.div
              variants={SlideUp(0.8)}
              initial="initial"
              whileInView="animate"
              className="space-y-6 text-center md:text-left md:px-4 xl:px-8"
            >
              <img src={icon2} alt="" className="w-24 h-24 mx-auto md:mx-0" />
              <p className="text-3xl font-semibold">Customer Focus</p>
              <p>
                In this constantly changing and challenging business world, we
                aim to provide competent advice as per the custom needs of the
                client to meet their business goals
              </p>
            </motion.div>
            <motion.div
              variants={SlideUp(1.0)}
              initial="initial"
              whileInView="animate"
              className="space-y-6 text-center md:text-left md:px-4 xl:px-8"
            >
              <img src={icon3} alt="" className="w-24 h-24 mx-auto md:mx-0" />
              <p className="text-3xl font-semibold">Commitment</p>
              <p>
                We deliver the maximum value to our customers by becoming their
                reliable technology partner.Our sucess is defined by the sucess
                of our customer
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
