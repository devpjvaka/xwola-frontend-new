import React from "react";
import Hospitality from "../../assets/Industries/event&hospitality.png";
import Retail from "../../assets/Industries/retail.png";
import Communication from "../../assets/Industries/communication.png";
import Tele from "../../assets/Industries/tele.png";
import Retails from "../../assets/Industries/reatils.png";
import Events from "../../assets/Industries/events.png";

import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { IoLogoBitbucket } from "react-icons/io5";
import { SlideUp } from "../../animation/animation";
import Banner2_ from "../../assets/banner2.png";
import { HiSpeakerphone } from "react-icons/hi";
import { FaHotel } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { PiBankDuotone } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import { TbTransactionEuro } from "react-icons/tb";
import { FaSignal } from "react-icons/fa";

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
export const SlideLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};
const headphoneData = [
  {
    id: 1,
    image: Hospitality,
    title: "Events and Hospitality ",
    subtitle:
      "Enhancing guest experiences with seamless event planning and top-tier hospitality. Our team focuses on every detail to create memorable moments that leave lasting impressions..",

    bgColor: "#000000",
  },
  {
    id: 2,
    image: Communication,
    title: "TeleCommunication",
    subtitle:
      "Delivering advanced communication solutions to connect businesses and people around the world. We ensure seamless connectivity and enhance collaboration for a global reach.",

    bgColor: "#000000",
  },
  {
    id: 3,
    image: Retail,
    title: "Retail",
    subtitle:
      "Empowering retailers with innovative solutions to enhance customer experiences and streamline operations for greater efficiency and satisfaction.",

    bgColor: "#000000",
  },
];

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

// const skillsData = [
//   {
//     name: "Events and Hospitality",
//     icon: <RiHotelFill className="text-4xl text-black" />,
//     link: "#",
//     description:
//       "Our e-cpmmerce solutions with effective navigation,personalized content,powerful search capabilities,and multichannel distribution features will help you reach more customers",
//     aosDelay: "300",
//   },
//   {
//     name: "TeleCommunication",
//     icon: <GiSatelliteCommunication className="text-4xl text-black" />,
//     link: "#",
//     description:
//       "Whether you need custom retail software tailored to your business specifics or want to enhance the existing functionality of your ERP or POS systems,Emerline is here to help.",
//     aosDelay: "500",
//   },
//   {
//     name: "Retail",
//     icon: <IoLogoBitbucket className="text-4xl text-black" />,
//     link: "#",
//     description:
//       "Telecommunication enables long-distance transmission of information, connecting people and businesses globally.",
//     aosDelay: "700",
//   },
// ];

const subjectList = [
  {
    id: 1,
    name: "Telecommunications",
    icon: <HiSpeakerphone />,
    color: "#FFD700", // Gold color for Telecommunications
    delay: 0.2,
  },
  {
    id: 2,
    name: "Event And Hospitality",
    icon: <FaHotel />,
    color: "#FFD700",
    delay: 0.3,
  },
  {
    id: 3,
    name: "Retail",
    icon: <IoLogoBitbucket />,
    color: "#FFD700",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Finance",
    icon: <GiMoneyStack />,
    color: "#FFD700",
    delay: 0.5,
  },
  {
    id: 5,
    name: "Banking",
    icon: <PiBankDuotone />,
    color: "#FFD700",
    delay: 0.6,
  },
  {
    id: 6,
    name: "Payments",
    icon: <MdOutlinePayments />,

    color: "#FFD700",
    delay: 0.7,
  },
  {
    id: 7,
    name: "Lending",
    icon: <TbTransactionEuro />,
    color: "#FFD700",
    delay: 0.8,
  },
  {
    id: 8,
    name: "Investment",
    icon: <FaSignal />,

    color: "#FFD700",
    delay: 0.9,
  },
];

const Industries = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  const handleActiveData = (data) => {
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
          {/* ______ Headphone Info ______ */}
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
                    className="text-3xl lg:text-6xl xl:text-5xl font-bold font-handwritting text-shadow"
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
                  className="text-md font-handwritting leading-loose text-white/80"
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

              {/* ______ Headphone List Separator ______ */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
              ></motion.div>

              {/* Headphone list switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-10"
              >
                {headphoneData.map((item) => {
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
                        <div className="!mt-6 space-y-1 text-center">
                          <p className="text-base line-through opacity-50">
                            {item.price}
                          </p>
                          <p className="text-xl font-bold">{item.price}</p>
                          {/* <p className="text-xs font-normal text-nowrap">
                            {item.modal}
                          </p> */}
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
            <AnimatePresence mode="wait">
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
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
      <div className="container py-14 md:py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase text-2xl font-bold font-serif text-black-500 whitespace-nowrap">
            Speaking the language of Your Industry
          </h1>
          <p className="text-black-500 font-secondary text-xl leading-7">
            We tailor agile and resilient IT solutions to your business by
            addressing each domain's unique risks, opportunities, and best
            practices.
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {subjectList.map((subject) => {
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: subject.delay,
                }}
                className="border border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
              >
                <div
                  style={{
                    backgroundColor: "black", // Circular black background
                    borderRadius: "50%", // Make it circular
                    width: "50px", // Adjust size as needed
                    height: "50px", // Adjust size as needed
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: subject.color, // Use subject.color for other icons
                      fontSize: "2rem", // Adjust this value for bigger icons
                    }}
                  >
                    {subject.icon}
                  </div>
                </div>
                <p>{subject.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image section */}
            <div className="flex flex-col justify-center">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src={Tele}
                alt=""
                className="w-[95%] md:w-full mx-auto"
              />
            </div>

            {/* Text section */}
            <div
              className="space-y-5 flex justify-center 
          flex-col"
            >
              <motion.h1
                variants={SlideUp(0.2)}
                initial="initial"
                whileInView="animate"
                className="text-4xl font-bold font-serif"
              >
                Telecommunications
              </motion.h1>

              <motion.p
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="text-gray-500 font-secondary text-xl leading-7"
              >
                Telecom software development provides telcos with powerful
                solutions that automate service and business operations, while
                enabling the seamless introduction of new, value-added customer
                offerings.
                <span className="block mt-4">
                  {" "}
                  {/* Adjust mt-4 for more or less spacing */}
                  We specialize in Telecommunications Retail, offering
                  comprehensive solutions for the sale of telecom products,
                  including SIM cards, mobile plans, devices, and accessories.
                  Our focus is on providing seamless retail experiences that
                  empower telecom businesses to efficiently manage and grow
                  their customer offerings.
                </span>
              </motion.p>

              <div>
                <motion.button
                  variants={SlideUp(0.6)}
                  initial="initial"
                  animate="animate"
                  className="primary-btn  bg-black text-white 
              shadow-[5px_5px_0px_0px_#6c6c6c]"
                >
                  Discover Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Text section */}
            <div
              className="space-y-5 flex justify-center 
          flex-col xl:max-w-[500px]"
            >
              <motion.h1
                variants={SlideUp(0.2)}
                initial="initial"
                whileInView="animate"
                className="text-4xl font-bold font-serif"
              >
                Retail
              </motion.h1>

              <motion.p
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="text-gray-500  text-xl leading-7"
              >
                We specialize in{" "}
                <span className="font-bold text-xl">Telecommunications</span>
                <br />
                <span className="font-bold text-md">Retail</span>, providing
                comprehensive solutions for selling telecom products such as SIM
                cards, mobile plans, devices, and accessories. Our goal is to
                create seamless retail experiences that empower telecom
                businesses to effectively manage and grow their customer
                offerings.
              </motion.p>

              <div>
                <motion.button
                  variants={SlideUp(0.6)}
                  initial="initial"
                  whileInView="animate"
                  className="primary-btn bg-black text-white 
              shadow-[5px_5px_0px_0px_#6c6c6c]"
                >
                  Discover Now
                </motion.button>
              </div>
            </div>

            {/* Image section */}
            <div className="flex flex-col justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src={Retails}
                alt=""
                className="w-[95%] md:w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Events}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>

          {/* Text section */}
          <div
            className="space-y-5 flex justify-center 
          flex-col"
          >
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              Events & Hospitality{" "}
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 font-secondary text-xl leading-7"
            >
              Our focus lies in{" "}
              <span className="font-bold text-md">Events & Hospitality</span>
              <br />
              providing tailored solutions that enhance guest experiences and
              streamline event management. Our mission is to craft unforgettable
              moments through exceptional service, innovative technology, and
              meticulous planning.
            </motion.p>

            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn  bg-black text-white 
              shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Discover Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
