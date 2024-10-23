import Hospitality from "../../assets/Industries/event&hospitality_1.png";
import Retail from "../../assets/Industries/retail_1.png";
import Communication from "../../assets/Industries/communications_1.png";
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
import React, { useState, useEffect, useCallback } from "react"; // keep this import
import useEmblaCarousel from "embla-carousel-react";
import "tailwindcss/tailwind.css";

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
    image: Communication,
    title: "TeleCommunication",
    subtitle:
      "Delivering advanced communication solutions to connect businesses and people around the world. We ensure seamless connectivity and enhance collaboration for a global reach.",

    bgColor: "#000000",
  },
  {
    id: 2,
    image: Retail,
    title: "Retail",
    subtitle:
      "Empowering retailers with innovative solutions to enhance customer experiences and streamline operations for greater efficiency and satisfaction.",

    bgColor: "#000000",
  },

  {
    id: 3,
    image: Hospitality,
    title: "Events & Hospitality ",
    subtitle:
      "Enhancing guest experiences with seamless event planning and top-tier hospitality. Our team focuses on every detail to create memorable moments that leave lasting impressions..",

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
const images = [
  {
    id: 1,
    image: Communication,
    title: "TeleCommunication",
    subtitle:
      "We provide advanced communication solutions that connect businesses and individuals across the globe, fostering seamless connectivity. Our services enhance collaboration, enabling organizations to operate efficiently and expand their reach worldwide.",

    bgColor: "#000000",
  },
  {
    id: 2,
    image: Retail,
    title: "Retail",
    subtitle:
      "We empower retailers by providing innovative solutions designed to enhance customer experiences and streamline operational processes. Our approach focuses on maximizing efficiency and ensuring greater satisfaction for both businesses and their customers.",

    bgColor: "#000000",
  },

  {
    id: 3,
    image: Hospitality,
    title: "Events & Hospitality ",
    subtitle:
      "We enhance guest experiences through seamless event planning and exceptional hospitality, ensuring every detail is meticulously handled. Our dedicated team is committed to creating memorable moments that leave lasting impressions on all attendees.",

    bgColor: "#000000",
  },
];
const slideVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 100 },
  enter: { opacity: 1, scale: 1, x: 0 },
  exit: { opacity: 0, scale: 0.8, x: -100 },
};

const Industries = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className=" mx-auto mt-16 bg-black p-8">
        {/* Carousel Viewport */}
        <div
          className="container embla w-full h-auto md:h-[500px]"
          ref={emblaRef}
        >
          <div className="embla__container flex w-full">
            {images.map((slide, index) => (
              <motion.div
                className="embla__slide flex flex-col md:flex-row items-center p-5 w-full" // Stack on small screens, side-by-side on medium+
                key={slide.id}
                initial="hidden"
                animate={selectedIndex === index ? "enter" : "exit"}
                variants={slideVariants}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} // Smooth cubic-bezier transition
              >
                {/* Text Section */}
                <div
                  className="w-full md:w-2/3 p-4 md:p-8 rounded-lg shadow-md" // Full width on small, 2/3 on larger screens
                  style={{ backgroundColor: slide.bgColor }}
                >
                  <h2 className="text-2xl md:text-3xl font-handwritting text-gold">
                    {slide.title}
                  </h2>
                  <p className="mt-2 md:mt-4 text-base md:text-xl font-handwritting text-white">
                    {slide.subtitle}
                  </p>
                  {/* Navigation Buttons */}
                  <div className="flex items-center mt-4 md:mt-8">
                    <button
                      className="arrow-button left text-sm p-2"
                      onClick={scrollPrev}
                    >
                      &larr;
                    </button>
                    <button
                      className="arrow-button right text-sm p-2"
                      onClick={scrollNext}
                    >
                      &rarr;
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
                  {" "}
                  {/* Stack below text on small screens */}
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-lg w-24 h-24 md:w-40 md:h-40 object-contain" // Adjusted image size for mobile
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{ duration: 0.5 }} // Smooth scale transition
                  />
                </div>
              </motion.div>
            ))}
          </div>
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
      <div className="container py-14 md:py-24">
        {/* Header Section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase text-2xl md:text-3xl font-bold font-serif text-black-500 whitespace-nowrap">
            Speaking the Language of Your Industry
          </h1>
          <p className="text-black-500 font-secondary text-xl leading-7">
            We tailor agile and resilient IT solutions to your business by
            addressing each domain's unique risks, opportunities, and best
            practices.
          </p>
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
                className="border border-secondary/20 p-4 flex flex-col sm:flex-row justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
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
                <p className="text-center sm:text-left">{subject.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Industries;
