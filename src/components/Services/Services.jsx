import AI from "../../assets/Services/Services_/ai&datascience (1).jpg";
import DevOps from "../../assets/Services/Services_/SupportMaintenance2.jpg";
import DigitalExperiance from "../../assets/Services/Services_/digitalexperience.jpg";
import { UpdateFollower } from "react-mouse-follower";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import ServicesBanner1 from "../../components/Services/Services-Banner/ServiceBanner1";
import ServicesBanner2 from "../../components/Services/Services-Banner/ServiceBanner2";
import ServicesBanner3 from "../../components/Services/Services-Banner/ServiceBanner3";
import React, { useState, useEffect, useCallback } from "react"; // keep this import
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
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
      "Xwola specializes in creating scalable, innovative software solutions across mobile and web platforms, delivering transformative digital experiences that drive user engagement and empower businesses to thrive in a digital-first world.",
    modal: "Digital",
    bgColor: "#000000",
  },
  {
    id: 2,
    image: DevOps,
    title: "Support & Maintenance",
    subtitle:
      "Support & Maintenance ensures the smooth operation of software and IT systems through ongoing troubleshooting, timely updates, and dedicated user support, helping organizations to minimize downtime and maximize productivity.",
    bgColor: "#000000",
  },
  {
    id: 3,
    image: AI,
    title: "AI & Data Science",
    subtitle:
      "AI & Data Science leverage advanced algorithms to analyze vast amounts of data, uncover valuable insights, and enable informed decision-making across industries, driving innovation and offering significant potential for growth and efficiency.",
    bgColor: "#000000",
  },
];

;


const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }); // Set loop to false for custom logic
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState('forward'); // Track the scroll direction

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setDirection('backward');
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setDirection('forward');
    }
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
      <div className="mx-auto mt-16 bg-black p-8 relative"> {/* Added relative for positioning buttons */}
        {/* Carousel Viewport */}
        <div className="container embla w-full h-auto md:h-[500px]" ref={emblaRef}>
          <div className="embla__container flex w-full">
            {images.map((slide, index) => (
              <div
                className="embla__slide flex flex-col md:flex-row items-center p-5 w-full" // Stack on small screens, side-by-side on medium+
                key={slide.id}
                style={{
                  opacity: selectedIndex === index ? 1 : 0,
                  transform: selectedIndex === index ? 'scale(1)' : 'scale(0.9)', // Slightly smaller scale for non-active slides
                  transition: 'opacity 0.6s ease, transform 0.6s ease', // Increased transition duration
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
                      transform: 'scale(1)', // Initial scale
                      transition: 'transform 0.5s', // Smooth scale transition
                    }}
                  />
                </div>
              </div>
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
