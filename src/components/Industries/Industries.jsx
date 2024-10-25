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
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState('forward'); // Track the scroll direction

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
  // Auto slide functionality
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (direction === 'forward') {
        // When moving forward, if at last slide, reverse direction
        if (selectedIndex === images.length - 1) {
          setDirection('backward');
          emblaApi.scrollPrev();
        } else {
          scrollNext(); // Scroll to next
        }
      } else {
        // When moving backward, if at first slide, reverse direction
        if (selectedIndex === 0) {
          setDirection('forward');
          emblaApi.scrollNext();
        } else {
          scrollPrev(); // Scroll to previous
        }
      }
    }, 3000); // Change the slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [emblaApi, scrollNext, scrollPrev, direction, selectedIndex]);


  return (
    <>
      <div className="mx-auto mt-16 bg-black p-8 relative">
        {" "}
        {/* Added relative for positioning buttons */}
        {/* Carousel Viewport */}
        <div
          className="container embla w-full h-auto md:h-[500px]"
          ref={emblaRef}
        >
          <div className="embla__container flex w-full">
            {images.map((slide, index) => (
              <div
                className="embla__slide flex flex-col md:flex-row items-center p-5 w-full" // Stack on small screens, side-by-side on medium+
                key={slide.id}
                style={{
                  opacity: selectedIndex === index ? 1 : 0,
                  transform:
                    selectedIndex === index ? "scale(1)" : "scale(0.9)", // Slightly smaller scale for non-active slides
                  transition: "opacity 0.6s ease, transform 0.6s ease", // Increased transition duration
                }}
              >
                {/* Text Section */}
                <div
                  className="w-full md:w-2/3 p-4 md:p-8 rounded-lg shadow-md" // Full width on small, 2/3 on larger screens
                  style={{ backgroundColor: slide.bgColor }}
                >
                  <h2 className="text-4xl md:text-3xl font-handwritting text-justify text-gold">
                    {slide.title}
                  </h2>
                  <p className="mt-2 md:mt-4 text-base md:text-xl font-handwritting text-justify text-white">
                    {slide.subtitle}
                  </p>
                  {/* Navigation Buttons */}
                  <div className="flex items-center mt-20 md:mt-10">
                    <button
                      className="arrow-button left text-sm p-2"
                      onClick={scrollPrev}
                    >
                      &larr; {/* Left Arrow */}
                    </button>
                    <button
                      className="arrow-button right text-sm p-2"
                      onClick={scrollNext}
                    >
                      &rarr; {/* Right Arrow */}
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-lg w-24 h-24 md:w-40 md:h-40 object-contain" // Adjusted image size for mobile
                    style={{
                      transform: "scale(1)", // Initial scale
                      transition: "transform 0.5s", // Smooth scale transition
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
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
            <div className="space-y-5 flex justify-center flex-col">
              <motion.h1
                variants={SlideUp(0.2)}
                initial="initial"
                animate="animate"
                className="text-4xl text-yellow-500 font-handwritting relative" // Add relative positioning
              >
                <span className=" text-black px-2 py-1 rounded">
                  {" "}
                  {/* Add the brush stroke background here */}
                  Telecommunications
                </span>
              </motion.h1>

              <motion.p
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="text-gray-500 font-handwritting text-lg md:text-xl leading-7 text-justify"
              >
                Telecom software development provides telcos with powerful
                solutions that automate service and business operations, while
                enabling the seamless introduction of new, value-added customer
                offerings.
                <span className="block mt-4">
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
                  className="primary-btn font-handwritting bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] mt-8"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Image section */}
            <div className="flex flex-col justify-center order-1 md:order-2">
              {/* Image appears first on mobile */}
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src={Retails}
                alt="Retail"
                className="w-[95%] md:w-full mx-auto"
              />
            </div>

            {/* Text section */}
            <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px] order-2 md:order-1">
              {/* Text appears second on mobile */}
              <motion.h1
                variants={SlideUp(0.2)}
                initial="initial"
                animate="animate"
                className="text-4xl text-yellow-500 font-handwritting relative mb-5" // Added mb-5 for spacing
              >
                <span className=" text-black px-2 py-1 rounded">Retail</span>
              </motion.h1>

              <motion.p
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="text-gray-500 text-xl leading-7 font-handwritting mt-4 text-justify" // Added mt-4 for spacing
              >
                We specialize in{" "}
                <span className="font-handwritting text-xl">
                  Telecommunications
                </span>
                <br />
                <span className="font-handwritting text-md">Retail</span>,
                providing comprehensive solutions for selling telecom products
                such as SIM cards, mobile plans, devices, and accessories. Our
                goal is to create seamless retail experiences that empower
                telecom businesses to effectively manage and grow their customer
                offerings.
              </motion.p>

              <div>
                <motion.button
                  variants={SlideUp(0.6)}
                  initial="initial"
                  whileInView="animate"
                  className="primary-btn font-handwritting mt-8 bg-black text-white 
              shadow-[5px_5px_0px_0px_#6c6c6c]"
                >
                  Discover Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {" "}
          {/* Use items-start for top alignment */}
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
          <div className="space-y-5 xl:max-w-[500px]">
            {" "}
            {/* Remove justify-center and ensure width constraint */}
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl text-black-500 font-handwritting relative mb-5"
            >
              <span className=" text-black px-2 py-1 rounded">
                Events & Hospitality
              </span>
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 font-handwritting text-xl leading-7 mt-4 text-justify"
            >
              Our focus lies in{" "}
              <span className="font-handwritting text-md">
                Events & Hospitality
              </span>
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
                className="primary-btn font-handwritting mt-8 bg-black text-white 
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
        <div className="space-y-4 px-4 py-6 md:py-8 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase text-xl sm:text-2xl md:text-3xl font-handwritting text-yellow-500 underline decoration-black decoration-2 whitespace-normal">
            Speaking the language of Your Industry
          </h1>
          <p className="text-black-500 font-handwritting text-base sm:text-lg md:text-xl leading-6 sm:leading-7">
            We tailor agile and resilient IT solutions to your business by
            addressing each domain's unique risks, opportunities, and best
            practices.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-4">
          {subjectList.map((subject, index) => {
            const animations = {
              initial: {
                opacity: 0,
                x: index % 2 === 0 ? -200 : 200,
                y: index % 3 === 0 ? -50 : 50,
              },
              whileInView: { opacity: 1, x: 0, y: 0 },
              transition: {
                type: "spring",
                stiffness: 100 + index * 10,
                delay: subject.delay || index * 0.1,
              },
            };

            return (
              <motion.div
                key={subject.id}
                initial={animations.initial}
                whileInView={animations.whileInView}
                transition={animations.transition}
                viewport={{ once: false, amount: 0.01 }} // Very low threshold for instant trigger on mobile
                className="border border-secondary/20 p-3 sm:p-4 md:p-6 flex items-center gap-2 sm:gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
              >
                {/* Icon Section */}
                <div
                  style={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ color: subject.color, fontSize: "1.5rem" }}>
                    {subject.icon}
                  </div>
                </div>

                {/* Text Section with Truncate */}
                <p className="text-sm sm:text-base md:text-lg truncate">
                  {subject.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      has context menu
    </>
  );
};

export default Industries;
