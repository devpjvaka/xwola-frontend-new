import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AI from "../../assets/Services/Services_/ai&datascience (1).jpg";
import DevOps from "../../assets/Services/Services_/SupportMaintenance2.jpg";
import DigitalExperiance from "../../assets/Services/Services_/digitalexperience.jpg";
import SEO from "../../assets/Services/Services_/seo (2).jpg";

import ServicesBanner1 from "../../components/Services/Services-Banner/ServiceBanner1";
import ServicesBanner2 from "../../components/Services/Services-Banner/ServiceBanner2";
import ServicesBanner3 from "../../components/Services/Services-Banner/ServiceBanner3";
import ServicesBanner4 from "../../components/Services/Services-Banner/ServiceBanner4";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDot, RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
// const images = [
//   {
//     id: 1,
//     image: DigitalExperiance,
//     title: "Software Development",
//     subtitle:
//       "Xwola specializes in creating scalable, innovative software solutions across mobile and web platforms, delivering transformative digital experiences that drive user engagement and empower businesses to thrive in a digital-first world.",
//     bgColor: "#000000",
//   },
//   {
//     id: 2,
//     image: DevOps,
//     title: "Support & Maintenance",
//     subtitle:
//       "Support & Maintenance ensures the smooth operation of software and IT systems through ongoing troubleshooting, timely updates, and dedicated user support, helping organizations to minimize downtime and maximize productivity.",
//     bgColor: "#000000",
//   },
//   {
//     id: 3,
//     image: AI,
//     title: "AI & Data Science",
//     subtitle:
//       "AI & Data Science leverage advanced algorithms to analyze vast amounts of data, uncover valuable insights, and enable informed decision-making across industries, driving innovation and offering significant potential for growth and efficiency.",
//     bgColor: "#000000",
//   },
// ];

// const Services = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }); // Enabled looping
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [direction, setDirection] = useState("forward");

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//   }, [emblaApi, onSelect]);

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) {
//       emblaApi.scrollPrev();
//       setDirection("backward");
//     }
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) {
//       emblaApi.scrollNext();
//       setDirection("forward");
//     }
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     const interval = setInterval(() => {
//       direction === "forward" ? scrollNext() : scrollPrev();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [emblaApi, scrollNext, scrollPrev, direction]);

//   return (
//     <>
//       <div className="mx-auto mt-16 bg-black p-6 md:p-8">
//         <div
//           className="container embla w-full h-auto md:h-[500px]"
//           ref={emblaRef}
//         >
//           <div className="embla__container flex w-full">
//             {images.map((slide, index) => (
//               <div
//                 key={slide.id}
//                 className="embla__slide flex flex-col md:flex-row items-center p-5 w-full"
//                 style={{
//                   opacity: selectedIndex === index ? 1 : 0,
//                   transform:
//                     selectedIndex === index ? "scale(1)" : "scale(0.95)",
//                   transition: "opacity 0.6s ease, transform 0.6s ease",
//                 }}
//               >
//                 {/* Text Section */}
//                 <div
//                   className="w-full md:w-2/3 p-4 md:p-8 rounded-lg shadow-md"
//                   style={{ backgroundColor: slide.bgColor }}
//                 >
//                   <h2
//                     className="text-xl md:text-3xl font-handwritting text-gold text-center md:text-left inline-block relative mt-4"
//                     style={{
//                       backgroundImage: "linear-gradient(90deg, black, #FFD700)",
//                       backgroundClip: "text",
//                       textFillColor: "transparent",
//                     }}
//                   >
//                     {slide.title}
//                     <span
//                       style={{
//                         position: "absolute",
//                         left: 0,
//                         bottom: -8,
//                         width: "100%",
//                         height: "6px",
//                         backgroundImage:
//                           "linear-gradient(90deg, #FFD700, black)",
//                         borderRadius: "2px",
//                       }}
//                     ></span>
//                   </h2>
//                   <p className="mt-7 text-sm md:text-lg text-white">
//                     {slide.subtitle}
//                   </p>

//                   {/* Arrow Buttons Below Text for Tablets and Laptops */}
//                   <div className="hidden md:flex justify-between mt-6">
//                     <button
//                       onClick={scrollPrev}
//                       className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
//                     >
//                       &larr;
//                     </button>
//                     <button
//                       onClick={scrollNext}
//                       className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
//                     >
//                       &rarr;
//                     </button>
//                   </div>
//                 </div>

//                 {/* Image Section */}
//                 <div className="w-full md:w-1/3 flex flex-col items-center">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="rounded-lg w-24 h-24 md:w-40 md:h-40 object-cover transition-transform duration-300 transform hover:scale-105"
//                   />

//                   {/* Arrow Buttons Below Image for Mobile Screens */}
//                   <div className="flex md:hidden justify-between mt-4 w-full">
//                     <button
//                       onClick={scrollPrev}
//                       className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
//                     >
//                       &larr;
//                     </button>
//                     <button
//                       onClick={scrollNext}
//                       className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
//                     >
//                       &rarr;
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <ServicesBanner1 />
//       <ServicesBanner2 />
//       <ServicesBanner3 />
//       <ServicesBanner4 />
//     </>
//   );
// };

const Services = () => {
  const carouselData = [
    {
      id: 1,
      title: "Software Development",
      subtitle:
        "Xwola specializes in creating scalable, innovative software solutions across mobile and web platforms, delivering transformative digital experiences that drive user engagement.",
      image: DigitalExperiance,
    },
    {
      id: 2,
      title: "Support & Maintenance",
      subtitle:
        "Ensures the smooth operation of software and IT systems through ongoing troubleshooting, timely updates, and dedicated user support, minimizing downtime and maximizing productivity.",
      image: DevOps,
    },
    {
      id: 3,
      title: "AI & Data Science",
      subtitle:
        "Leverage advanced algorithms to analyze vast amounts of data, uncover valuable insights, and enable informed decision-making, driving innovation and offering significant growth potential.",
      image: AI,
    },
    {
      id: 4,
      title: "Seo",
      subtitle:
        "Boost your website's visibility with optimized content tailored for search engines, driving organic traffic and user engagement.",
      image: SEO,
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
      <ServicesBanner1 />
      <ServicesBanner2 />
      <ServicesBanner3 />
      <ServicesBanner4 />
    </>
  );
};
export default Services;
