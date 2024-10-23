import AI from "../../assets/Services/Services_/ai_1.png";
import DevOps from "../../assets/Services/Services_/support&maintenance.png";
import DigitalExperiance from "../../assets/Services/Services_/digitalexperience_1.png";

import {  easeInOut, motion } from "framer-motion";
import ServicesBanner1 from "../../components/Services/Services-Banner/ServiceBanner1";
import ServicesBanner2 from "../../components/Services/Services-Banner/ServiceBanner2";
import ServicesBanner3 from "../../components/Services/Services-Banner/ServiceBanner3";
import React, { useState, useEffect, useCallback } from "react"; // keep this import
import useEmblaCarousel from "embla-carousel-react";
// import { Thumb } from "./EmblaCarouselThumbsButton";
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

const images = [
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

const slideVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 100 },
  enter: { opacity: 1, scale: 1, x: 0 },
  exit: { opacity: 0, scale: 0.8, x: -100 },
};

const Services = () => {
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
      <ServicesBanner1 />
      <ServicesBanner2 />
      <ServicesBanner3 />
    </>
  );
};
 
export default Services;