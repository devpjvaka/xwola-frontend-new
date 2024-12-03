import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ShowcaseImage from "../../../../assets/Services/catogeries/ai/ai.jpg";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

// const ShowcaseSection = () => {
//   return (
//     <div className="grid md:grid-cols-2 items-center max-w-6xl mx-auto py-20 px-6 gap-8">
//       <motion.div
//         className="relative"
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <img
//           src={ShowcaseImage}
//           alt="AI & Data Science"
//           className="rounded-lg shadow-lg"
//         />
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h3 className="text-3xl font-bold text-gray-800">
//           Transform Your Data into Insights
//         </h3>
//         <p className="text-gray-900 mt-4">
//           Our solutions harness the power of machine learning and big data to
//           help you identify trends, optimize operations, and deliver better
//           results.
//         </p>
//         <button className="mt-6 bg-[#fab116] text-black py-2 px-6 rounded-md shadow hover:bg-black hover:text-white transition-all">
//           Learn More
//         </button>
//       </motion.div>
//     </div>
//   );
// };
const ShowcaseSection = () => {
  const sliderRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevDesktopRef = useRef(null);
  const nextDesktopRef = useRef(null);

  useEffect(() => {
    const slider = new KeenSlider(
      sliderRef.current,
      {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      },
      []
    );

    const handlePrev = () => slider.prev();
    const handleNext = () => slider.next();

    prevRef.current.addEventListener("click", handlePrev);
    nextRef.current.addEventListener("click", handleNext);
    prevDesktopRef.current.addEventListener("click", handlePrev);
    nextDesktopRef.current.addEventListener("click", handleNext);

    return () => {
      slider.destroy();
      prevRef.current?.removeEventListener("click", handlePrev);
      nextRef.current?.removeEventListener("click", handleNext);
      prevDesktopRef.current?.removeEventListener("click", handlePrev);
      nextDesktopRef.current?.removeEventListener("click", handleNext);
    };
  }, []);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
          {/* Text Section */}
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Our Clients Love Us{" "}
            </h2>
            <p className="mt-4 text-gray-700">
              Our clients are the heart of everything we do. Their words inspire
              us to keep delivering top-notch solutions
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                ref={prevDesktopRef}
                aria-label="Previous slide"
                className="rounded-full border border-[#fab116] p-3 text-black transition hover:bg-[#fab116] hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                ref={nextDesktopRef}
                aria-label="Next slide"
                className="rounded-full border border-[#fab116] p-3 text-black transition hover:bg-[#fab116] hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5L15.75 12l-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Slider Section */}
          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5 text-black">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-[#fab116] sm:text-3xl">
                          Stayin' Alive
                        </p>
                        <p className="mt-4 leading-relaxed text-gray-700">
                          No, Rose, they are not breathing. And they have no
                          arms or legs...
                        </p>
                      </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="rounded-full border border-[#fab116] p-4 text-black transition hover:bg-black hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 transform -rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button
            ref={nextRef}
            aria-label="Next slide"
            className="rounded-full border border-[#fab116] p-4 text-black transition hover:bg-black hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
