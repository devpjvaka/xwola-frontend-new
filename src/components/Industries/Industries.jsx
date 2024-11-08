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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState("forward");

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setDirection("backward");
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setDirection("forward");
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (direction === "forward") {
        selectedIndex === images.length - 1 ? scrollPrev() : scrollNext();
      } else {
        selectedIndex === 0 ? scrollNext() : scrollPrev();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi, scrollNext, scrollPrev, direction, selectedIndex]);

  return (
    <>
      <div className="mx-auto mt-16 bg-black p-6 md:p-8">
        <div
          className="container embla w-full h-auto md:h-[500px]"
          ref={emblaRef}
        >
          <div className="embla__container flex w-full">
            {images.map((slide, index) => (
              <div
                key={slide.id}
                className="embla__slide flex flex-col md:flex-row items-center p-5 w-full"
                style={{
                  opacity: selectedIndex === index ? 1 : 0,
                  transform:
                    selectedIndex === index ? "scale(1)" : "scale(0.95)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                {/* Text Section */}
                <div
                  className="w-full md:w-2/3 p-4 md:p-8 rounded-lg shadow-md"
                  style={{ backgroundColor: slide.bgColor }}
                >
                  <h2 className="text-xl md:text-3xl  text-gold text-center md:text-left">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-sm md:text-lg text-white text-justify ">
                    {slide.subtitle}
                  </p>
                  <div className="flex justify-between mt-8 md:mt-6">
                    <button
                      onClick={scrollPrev}
                      className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
                    >
                      &larr;
                    </button>
                    <button
                      onClick={scrollNext}
                      className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
                    >
                      &rarr;
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-lg w-24 h-24 md:w-40 md:h-40 object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <IndustrieBanner1 />
      <IndustrieBanner2 />
      <IndustrieBanner3 />
      <Industriescards />
    </>
  );
};
export default Industries;
