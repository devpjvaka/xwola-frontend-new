import Hospitality from "../../assets/Industries/events2.jpg";
import Retail from "../../assets/Industries/retail2.jpg";
import Communication from "../../assets/Industries/communications1 (1).jpg";
import Tele from "../../assets/Industries/communications 2.jpg";
import Retails from "../../assets/Industries/retail1 1.jpg";
import Events from "../../assets/Industries/events1 2.jpg";

import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { SlideUp } from "../../animation/animation";
import Banner2_ from "../../assets/banner2.png";
import { FaChartLine } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaBroadcastTower } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { GiBank } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import React, { useState, useEffect, useCallback } from "react"; // keep this import
import useEmblaCarousel from "embla-carousel-react";
import "tailwindcss/tailwind.css";
import Industriescards from "../../components/Industries/Cards/Industriescards";
import IndustrieBanner1 from "../../components/Industries/Banners/IndustrieBanner1";
import IndustrieBanner2 from "../../components/Industries/Banners/IndustrieBanner2";
import IndustrieBanner3 from "../../components/Industries/Banners/IndustrieBanner3";

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
    name: "Telecoms", // Changed name
    icon: <FaBroadcastTower />,
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
    icon: <FaShoppingCart />,
    color: "#FFD700",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Finance",
    icon: <FaMoneyBillWave />,
    color: "#FFD700",
    delay: 0.5,
  },
  {
    id: 5,
    name: "Banking",
    icon: <GiBank />,
    color: "#FFD700",
    delay: 0.6,
  },
  {
    id: 6,
    name: "Payments",
    icon: <FaWallet />,

    color: "#FFD700",
    delay: 0.7,
  },
  {
    id: 7,
    name: "Lending",
    icon: <FaCreditCard />,
    color: "#FFD700",
    delay: 0.8,
  },
  {
    id: 8,
    name: "Investment",
    icon: <FaChartLine />,
    color: "#FFD700",
    delay: 0.9,
  },
];
const images = [
  {
    id: 1,
    image: Communication,
    title: "Telecommunications",
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
  const carouselData = [
    {
      id: 1,
      image: Communication,
      title: "Telecommunications",
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

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="mx-auto mt-16 bg-black p-6 md:p-8">
        {/* Carousel Section */}
        <div className="relative flex flex-col justify-center items-center h-screen bg-black text-white overflow-hidden">
          {/* Previous Button */}
          {/* <button
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full z-10"
            onClick={prevSlide}
          >
            ❮
          </button> */}

          {/* Carousel Content */}
          <div className="flex items-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={carouselData[currentIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 items-center w-full px-8 lg:px-16 gap-8"
              >
                {/* Text Section */}
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl lg:text-6xl font-bold">
                    {carouselData[currentIndex].title}
                  </h1>
                  <p className="text-lg lg:text-2xl">
                    {carouselData[currentIndex].subtitle}
                  </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                  <img
                    src={carouselData[currentIndex].image}
                    alt={carouselData[currentIndex].title}
                    className="rounded-lg shadow-lg max-w-full max-h-[400px] object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          {/* <button
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full z-10"
            onClick={nextSlide}
          >
            ❯
          </button> */}

          {/* Dots Navigation */}
          <div className="absolute bottom-8 flex justify-center space-x-2">
            {carouselData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-500"
                } cursor-pointer`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>
      <IndustrieBanner1 />
      <IndustrieBanner2 />
      <IndustrieBanner3 />
      <Industriescards />
    </>
  );
};

export default Industries;
