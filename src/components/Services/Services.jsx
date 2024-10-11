import React from "react";
import AI from "../../assets/Services/Services_/ai.png";
import DevOps from "../../assets/Services/Services_/devops.png";
import DigitalExperiance from "../../assets/Services/Services_/digitalexperience.png";
import { UpdateFollower } from "react-mouse-follower";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import ServicesBanner1 from "../../components/Services/Services-Banner/ServiceBanner1";
import ServicesBanner2 from "../../components/Services/Services-Banner/ServiceBanner2";
import ServicesBanner3 from "../../components/Services/Services-Banner/ServiceBanner3";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const servicesData = [
  {
    id: 1,
    image: DigitalExperiance,
    title: "Software Development",
    subtitle:
      "Xwola delivers innovative, scalable software solutions, specializing in mobile and web development for transformative digital experiences.",
    price: "$40",
    modal: "Digital",
    bgColor: "#000000",
  },
  {
    id: 2,
    image: DevOps,
    title: "Support & Maintenance",
    subtitle:
      "Support & Maintenance ensures the smooth operation of software and IT systems through ongoing troubleshooting, updates, and user support",
    price: "$100",
    modal: "Zero",
    bgColor: "#000000",
  },
  {
    id: 3,
    image: AI,
    title: "AI & Data Science",
    subtitle:      
      "AI & Data Science use advanced algorithms to analyze data, uncover insights, and enable smart decision-making across industries with huge scope", 
    price: "$100",
    modal: "Cola",
    bgColor: "#000000",
  },
];

const ServiceCard = [
  {
    id: 1,
    title: "Digital Experiences",
    description: `It looks like you have a small typo in the class name mg:grid-cols-3.
    The correct breakpoint prefix should be md: for medium screens.`,
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Cloud & DevOps",
    description: `It looks like you have a small typo in the class name mg:grid-cols-3.
    The correct breakpoint prefix should be md: for medium screens.`,
    icon: <FaPenSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Data Science & AI",
    description: `It looks like you have a small typo in the class name mg:grid-cols-3.
    The correct breakpoint prefix should be md: for medium screens.`,
    icon: <AiFillDollarCircle />,
    link: "#",
    delay: 0.6,
  },
];

const Services = () => {
  const [activeData, setActiveData] = React.useState(servicesData[0]);

  const handleActiveData = (data) => {
    console.log(" handleActiveData ", data);
    setActiveData(data);
  };

  return (
    <>
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
        className="bg-brandDark text-white"
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
          {/* ______ Services Info ______ */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-5xl lg:text-6xl xl:text-7xl font-bold font-handwritting text-shadow"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-lg leading-loose text-white/80 font-handwritting"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} />
                      </div>
                    ),
                  }}
                ></UpdateFollower>
              </AnimatePresence>

              {/* Services list switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-10"
              >
                {servicesData.map((item) => {
                  return (
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: "View Details",
                        textFontSize: "3px",
                      }}
                    >
                      <div
                        key={item.id}
                        onClick={() => handleActiveData(item)}
                        className="cursor-pointer space-y-3 hover:scale-105 transition-all"
                      >
                        <div className="flex justify-center">
                          <img
                            src={item.image}
                            alt=""
                            className={`w-[80px] img-shadow ${
                              activeData.image === item.image
                                ? "opacity-100 scale-110"
                                : "opacity-50"
                            }`}
                          />
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* ______ Hero Image ______ */}
          <div className="flex flex-col justify-center items-center relative order-1 md:order-2 ">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,
                  x: -100,

                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt=""
                className="w-[150px] md:w-[200px] xl:w-[490px] img-shadow relative z-10"
              />
            </AnimatePresence>
            {/* <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,

                  transition: {
                    duration: 0.4,
                  },
                }}
                className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence> */}
          </div>
          {/* ______ WhatsApp Icon ______ */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.section>
      <ServicesBanner1 />
      <ServicesBanner2 /> 
      <ServicesBanner3 /> 
    </>
  );
};

export default Services;
