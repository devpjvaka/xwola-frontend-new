// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "John Doe",
//       review:
//         "This SEO service has significantly increased our website traffic and conversions!",
//       avatar: "https://readymadeui.com/team-2.webp",
//     },
//     {
//       name: "Jane Smith",
//       review:
//         "Their team is highly professional and delivered amazing results for our business.",
//       avatar: "https://readymadeui.com/team-2.webp",
//     },
//     {
//       name: "Alex Johnson",
//       review:
//         "Thanks to their efforts, we are now ranking on the first page of Google.",
//       avatar: "https://readymadeui.com/team-2.webp",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <section className="py-20 bg-gradient-to-r from-gray-100 to-white">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           className="text-4xl font-extrabold text-center text-gray-800"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           What Our Clients Say
//         </motion.h2>

//         {/* Testimonial Display */}
//         <div className="relative mt-12">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-500 ${
//                 index === currentIndex ? "opacity-100" : "opacity-0"
//               } flex justify-center items-center`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: index === currentIndex ? 1 : 0 }}
//             >
//               <div className="p-6 bg-white rounded-lg shadow-lg w-full md:w-2/3">
//                 <div className="flex justify-center">
//                   <img
//                     src={testimonial.avatar}
//                     alt={`${testimonial.name}'s Avatar`}
//                     className="w-14 h-14 rounded-full"
//                   />
//                 </div>
//                 <p className="mt-6 text-gray-600 text-center italic">
//                   "{testimonial.review}"
//                 </p>
//                 <h3 className="mt-4 text-lg font-bold text-center text-black">
//                   {testimonial.name}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}

//           {/* Navigation Buttons */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
//           >
//             &#8592;
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
//           >
//             &#8594;
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialsSection = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto relative">
        <Swiper slidesPerView={1} ref={sliderRef}>
          <SwiperSlide>
            <SingleTestimonial
              image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
              details="Thanks to their SEO expertise, we're now ranking on the first page of Google for key search terms. Highly recommend their services!"
              name="Larry Diamond"
              position="Chief Executive Officer."
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleTestimonial
              image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
              details="Their SEO efforts delivered exceptional results, improving our visibility and driving high-quality traffic to our site.!"
              name="Jane Smith"
              position="CTO."
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleTestimonial
              image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
              details="Thanks to their SEO expertise, we're now ranking on the first page of Google for key search terms. Highly recommend their services!"
              name="Larry Diamond"
              position="Chief Executive Officer."
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleTestimonial
              image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
              details="Their SEO efforts delivered exceptional results, improving our visibility and driving high-quality traffic to our site.!"
              name="Jane Smith"
              position="CTO."
            />
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-5 sm:bottom-0">
          {/* Prev Button */}
          <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
            <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 transition-all hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M13.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L9.414 10l4.293 4.293a1 1 0 010 1.414z" />
              </svg>
            </button>
          </div>

          {/* Next Button */}
          <div className="next-arrow cursor-pointer" onClick={handleNext}>
            <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 transition-all hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M6.293 14.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L10.586 10l-4.293 4.293a1 1 0 000 1.414z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

const SingleTestimonial = ({
  image,
  reviewImg,
  reviewAlt,
  details,
  name,
  position,
}) => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12">
        <div className="w-full items-center md:flex">
          <div className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
            <img src={image} alt="image" className="w-full" />
            <span className="absolute -left-6 -top-6 z-[-1] hidden sm:block">
              <DotShape />
            </span>
            <span className="absolute -bottom-6 -right-6 z-[-1]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                  stroke="black"
                  strokeWidth="6"
                />
              </svg>
            </span>
          </div>
          <div className="w-full">
            <div>
              <div className="mb-7">
                <img src={reviewImg} alt={reviewAlt} />
              </div>

              <p className="mb-11 text-base font-normal italic leading-[1.81] text-body-color dark:text-dark-6 sm:text-[22px]">
                {details}
              </p>

              <h4 className="mb-2 text-[22px] font-semibold leading-[27px] text-dark dark:text-white">
                {name}
              </h4>
              <p className="text-base text-body-color dark:text-dark-6">
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DotShape = () => {
  return (
    <>
      <svg
        width="77"
        height="77"
        viewBox="0 0 77 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="1.66343"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 1.66343 74.5221)"
          fill="#fab116"
        />
        <circle
          cx="1.66343"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 1.66343 30.94)"
          fill="#fab116"
        />
        <circle
          cx="16.3016"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 16.3016 74.5221)"
          fill="#fab116"
        />
        <circle
          cx="16.3016"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 16.3016 30.94)"
          fill="#fab116"
        />
        <circle
          cx="30.9398"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 30.9398 74.5221)"
          fill="#fab116"
        />
        <circle
          cx="30.9398"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 30.9398 30.94)"
          fill="#fab116"
        />
        <circle
          cx="45.578"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 45.578 74.5221)"
          fill="#fab116"
        />
        <circle
          cx="45.578"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 45.578 30.94)"
          fill="#fab116"
        />
        <circle
          cx="60.2162"
          cy="74.5216"
          r="1.66343"
          transform="rotate(-90 60.2162 74.5216)"
          fill="#fab116"
        />
        <circle
          cx="74.6634"
          cy="74.5216"
          r="1.66343"
          transform="rotate(-90 74.6634 74.5216)"
          fill="#fab116"
        />
        <circle
          cx="60.2162"
          cy="30.9398"
          r="1.66343"
          transform="rotate(-90 60.2162 30.9398)"
          fill="#fab116"
        />
        <circle
          cx="74.6634"
          cy="30.9398"
          r="1.66343"
          transform="rotate(-90 74.6634 30.9398)"
          fill="#fab116"
        />
        <circle
          cx="1.66343"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 1.66343 59.8839)"
          fill="#fab116"
        />
        <circle
          cx="1.66343"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 1.66343 16.3017)"
          fill="#fab116"
        />
        <circle
          cx="16.3016"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 16.3016 59.8839)"
          fill="#fab116"
        />
        <circle
          cx="16.3016"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 16.3016 16.3017)"
          fill="#fab116"
        />
        <circle
          cx="30.9398"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 30.9398 59.8839)"
          fill="#fab116"
        />
        <circle
          cx="30.9398"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 30.9398 16.3017)"
          fill="#fab116"
        />
        <circle
          cx="45.578"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 45.578 59.8839)"
          fill="#fab116"
        />
        <circle
          cx="45.578"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 45.578 16.3017)"
          fill="#fab116"
        />
        <circle
          cx="60.2162"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 60.2162 59.8839)"
          fill="#fab116"
        />
        <circle
          cx="74.6634"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 74.6634 59.8839)"
          fill="#fab116"
        />
        <circle
          cx="60.2162"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 60.2162 16.3017)"
          fill="#fab116"
        />
        <circle
          cx="74.6634"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 74.6634 16.3017)"
          fill="#fab116"
        />
        <circle
          cx="1.66343"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 1.66343 45.2455)"
          fill="#fab116"
        />
        <circle
          cx="1.66343"
          cy="1.66342"
          r="1.66343"
          transform="rotate(-90 1.66343 1.66342)"
          fill="#fab116"
        />
        <circle
          cx="16.3016"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 16.3016 45.2455)"
          fill="#fab116"
        />
        <circle
          cx="16.3016"
          cy="1.66342"
          r="1.66343"
          transform="rotate(-90 16.3016 1.66342)"
          fill="#fab116"
        />
        <circle
          cx="30.9398"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 30.9398 45.2455)"
          fill="#fab116"
        />
        <circle
          cx="30.9398"
          cy="1.66342"
          r="1.66343"
          transform="rotate(-90 30.9398 1.66342)"
          fill="#fab116"
        />
        <circle
          cx="45.578"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 45.578 45.2455)"
          fill="#fab116"
        />
        <circle
          cx="45.578"
          cy="1.66344"
          r="1.66343"
          transform="rotate(-90 45.578 1.66344)"
          fill="#fab116"
        />
        <circle
          cx="60.2162"
          cy="45.2458"
          r="1.66343"
          transform="rotate(-90 60.2162 45.2458)"
          fill="#fab116"
        />
        <circle
          cx="74.6634"
          cy="45.2458"
          r="1.66343"
          transform="rotate(-90 74.6634 45.2458)"
          fill="#fab116"
        />
        <circle
          cx="60.2162"
          cy="1.66371"
          r="1.66343"
          transform="rotate(-90 60.2162 1.66371)"
          fill="#fab116"
        />
        <circle
          cx="74.6634"
          cy="1.66371"
          r="1.66343"
          transform="rotate(-90 74.6634 1.66371)"
          fill="#fab116"
        />
      </svg>
    </>
  );
};
