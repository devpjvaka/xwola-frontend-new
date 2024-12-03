import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import TestimonialsCard from "./reviewCard";

// const testimonials = [
//   {
//     logo: Brand1,
//     heading: "Arenase has been instrumental in driving innovation.",
//     description:
//       "Their exceptional support and maintenance services have kept our operations running smoothly and ensured continuous improvement.",
//     avatar: "https://via.placeholder.com/50",
//     name: "John Doe",
//     role: "CEO at Arenase",
//   },
//   {
//     logo: Brand2,
//     heading: "PHL exceeded our expectations with their services.",
//     description:
//       "They consistently delivered excellent support and technical expertise, helping us stay ahead in our industry.",
//     avatar: "https://via.placeholder.com/50",
//     name: "Jane Smith",
//     role: "CTO at PHL",
//   },
//   {
//     logo: Brand3,
//     heading: "iTopUp provides top-notch maintenance services.",
//     description:
//       "Their team is highly professional and ensures that our systems are always optimized and up-to-date.",
//     avatar: "https://via.placeholder.com/50",
//     name: "Michael Brown",
//     role: "Director at iTopUp",
//   },
//   {
//     logo: Brand4,
//     heading: "PJ has been a reliable partner for our software needs.",
//     description:
//       "Their proactive monitoring and maintenance have greatly enhanced our system's performance.",
//     avatar: "https://via.placeholder.com/50",
//     name: "Emily Davis",
//     role: "Manager at PJ",
//   },
//   {
//     logo: Brand5,
//     heading: "Eaufladen delivers exceptional support and innovation.",
//     description:
//       "Their team consistently goes above and beyond to adapt to our changing business needs.",
//     avatar: "https://via.placeholder.com/50",
//     name: "Sarah Wilson",
//     role: "Operations Lead at Eaufladen",
//   },
//   {
//     logo: Brand6,
//     heading: "RB's support services have been invaluable to our success.",
//     description:
//       "They ensure seamless operations with their proactive and reliable maintenance solutions.",
//     avatar: "https://via.placeholder.com/50",
//     name: "Chris Taylor",
//     role: "Founder at RB",
//   },
// ];

// const ClientsReviews = () => {
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
//     <div className="relative bg-gray-50 py-12">
//       {/* Section Heading */}
//       <h2 className="text-center text-2xl font-bold mb-8">Our Clients' Feedback</h2>

//       {/* Testimonial Card */}
//       <div className="relative max-w-4xl mx-auto px-6 py-6 bg-white shadow-md rounded-lg">
//         <div className="flex flex-col items-center">
//           {/* Logo inside testimonial */}
//           <img
//             src={testimonials[currentIndex].logo}
//             alt="Company Logo"
//             className="w-24 h-12 object-contain mb-4"
//           />
//           {/* Heading */}
//           <h3 className="text-xl font-semibold text-center">
//             {testimonials[currentIndex].heading}
//           </h3>
//           {/* Description */}
//           <p className="mt-4 text-gray-600 text-center">
//             {testimonials[currentIndex].description}
//           </p>
//           {/* Avatar and Details */}
//           <div className="flex items-center justify-center mt-6 space-x-4">
//             <img
//               src={testimonials[currentIndex].avatar}
//               alt={testimonials[currentIndex].name}
//               className="w-12 h-12 rounded-full"
//             />
//             <div>
//               <h4 className="text-sm font-bold">{testimonials[currentIndex].name}</h4>
//               <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <div className="absolute inset-y-1/2 flex justify-between w-full px-1">
//         <button
//           onClick={handlePrev}
//           className=""
//         >
//           ◀
//         </button>
//         <button
//           onClick={handleNext}
//           className=""
//         >
//           ▶
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ClientsReviews;
// const TestimonialData = [
//   {
//     id: 1,
//     name: "Prithu H.",
//     review:
//       "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     name: "Raghav Goel",
//     review:
//       "I Believe conducting the course in Hindi Language was the best part. All the concepts were explained in a very simple easy to understand way. The prompt sheets prepared are also very useful for future use. Looking forward for more such creative courses by Dhruv.",
//     rating: 4.5,
//   },
//   {
//     id: 3,
//     name: "Harsh ",
//     review:
//       "The lessons were given and organised in a fantastic way. Dhruv has the capacity to maintain the audience's attention. If you would have included how ChatGPT could be utilized for more coding-related subjects, it would be more beneficial to me personally. But I am aware that this course needs to be more inclusive to appeal to all students.",
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     name: "Prithu H.",
//     review:
//       "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
//     rating: 4.5,
//   },
//   {
//     id: 5,
//     name: "Keyur Kumbhare",
//     review:
//       "This course proved to be a game changer and helped me a lot in killing by habit of procrastination. Really enjoyed the whole vibe of the course and how Dhruv kept it short and simple without missing anything. Thank you!",
//     rating: 4.5,
//   },
//   {
//     id: 6,
//     name: "Krishnapreet ",
//     review:
//       "Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!",
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     name: "Prithu H.",
//     review:
//       "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
//     rating: 4.5,
//   },
//   {
//     id: 5,
//     name: "Keyur Kumbhare",
//     review:
//       "This course proved to be a game changer and helped me a lot in killing by habit of procrastination. Really enjoyed the whole vibe of the course and how Dhruv kept it short and simple without missing anything. Thank you!",
//     rating: 4.5,
//   },
//   {
//     id: 6,
//     name: "Krishnapreet ",
//     review:
//       "Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!",
//     rating: 4.5,
//   },
//   {
//     id: 7,
//     name: "Prithu H.",
//     review:
//       "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
//     rating: 4.5,
//   },
//   {
//     id: 8,
//     name: "Raghav Goel",
//     review:
//       "I Believe conducting the course in Hindi Language was the best part. All the concepts were explained in a very simple easy to understand way. The prompt sheets prepared are also very useful for future use. Looking forward for more such creative courses by Dhruv.",
//     rating: 4.5,
//   },
//   {
//     id: 9,
//     name: "Harsh ",
//     review:
//       "The lessons were given and organised in a fantastic way. Dhruv has the capacity to maintain the audience's attention. If you would have included how ChatGPT could be utilized for more coding-related subjects, it would be more beneficial to me personally. But I am aware that this course needs to be more inclusive to appeal to all students.",
//     rating: 4.5,
//   },
//   {
//     id: 10,
//     name: "Prithu H.",
//     review:
//       "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
//     rating: 4.5,
//   },
//   {
//     id: 11,
//     name: "Keyur Kumbhare",
//     review:
//       "This course proved to be a game changer and helped me a lot in killing by habit of procrastination. Really enjoyed the whole vibe of the course and how Dhruv kept it short and simple without missing anything. Thank you!",
//     rating: 4.5,
//   },
//   {
//     id: 12,
//     name: "Krishnapreet ",
//     review:
//       "Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!",
//     rating: 4.5,
//   },
//   {
//     id: 13,
//     name: "Prithu H.",
//     review:
//       "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
//     rating: 4.5,
//   },
//   {
//     id: 14,
//     name: "Keyur Kumbhare",
//     review:
//       "This course proved to be a game changer and helped me a lot in killing by habit of procrastination. Really enjoyed the whole vibe of the course and how Dhruv kept it short and simple without missing anything. Thank you!",
//     rating: 4.5,
//   },
//   {
//     id: 15,
//     name: "Krishnapreet ",
//     review:
//       "Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!",
//     rating: 4.5,
//   },
// ];

// const ClientsReviews = () => {
//   const [visibleTestimonials, setVisibleTestimonials] = useState(3); // Initial number of testimonials to display

//   const handleSeeMore = () => {
//     // Load more testimonials, looping infinitely
//     setVisibleTestimonials((prev) =>
//       prev + 3 > TestimonialData.length ? TestimonialData.length : prev + 3
//     );
//   };

//   return (
//     <>
//       <section className="py-12 md:py-24 bg-[#121212]">
//         <div className="container mx-auto">
//           {/* Heading */}
//           <p className="text-3xl md:text-5xl font-bold text-center uppercase text-white">
//             Our Clients' Feedback
//           </p>

//           {/* Cards Grid */}
//           <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {TestimonialData.slice(0, visibleTestimonials).map((data) => (
//               <TestimonialsCard key={data.id} {...data} />
//             ))}
//           </div>
//         </div>

//         {/* See More Button */}
//         {visibleTestimonials < TestimonialData.length && (
//           <div className="flex justify-center mt-12">
//             <button
//               onClick={handleSeeMore}
//               className="bg-white text-black rounded-2xl font-bold px-12 py-3 hover:bg-gray-200 transition"
//             >
//               See More
//             </button>
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

const reviews = [
  {
    name: "John Doe",
    review:
      "The team provided exceptional support and their quick response time saved us from several issues. Highly recommend!",
    image: "https://picsum.photos/100/100?random=1",
  },
  {
    name: "Jane Smith",
    review:
      "Their maintenance services are top-notch. They proactively identified and resolved potential issues before they became problems.",
    image: "https://picsum.photos/100/100?random=2",
  },
  {
    name: "Michael Brown",
    review:
      "A reliable team that ensures smooth operations and minimal downtime. Couldn't have asked for a better partner.",
    image: "https://picsum.photos/100/100?random=3",
  },
  {
    name: "Sarah Johnson",
    review:
      "Their professionalism and expertise are unmatched. My business runs seamlessly thanks to their maintenance support.",
    image: "https://picsum.photos/100/100?random=4",
  },
  {
    name: "Chris Davis",
    review:
      "The proactive approach and 24/7 availability have made all the difference. Truly a game-changer for us!",
    image: "https://picsum.photos/100/100?random=5",
  },
  {
    name: "Emily Clark",
    review:
      "Amazing service and support. They always go the extra mile to ensure everything is working perfectly.",
    image: "https://picsum.photos/100/100?random=6",
  },
];

const ClientsReviews = () => {
  const sliderRef = useRef(null);
  const [sliderInstance, setSliderInstance] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = new KeenSlider(sliderRef.current, {
      loop: true,
      mode: "snap",
      slides: {
        perView: 3,
        spacing: 16,
      },
      defaultAnimation: {
        duration: 750,
      },
      created: () => {
        setCurrentSlide(1);
      },
      slideChanged: (s) => {
        setCurrentSlide(s.track.details.rel + 1);
      },
    });

    setSliderInstance(slider);

    return () => slider.destroy();
  }, []);

  const handlePrev = () => sliderInstance?.prev();
  const handleNext = () => sliderInstance?.next();

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-[#fab116] via-yellow-500 to-[#fab116] text-transparent bg-clip-text drop-shadow-lg">
          Read Trusted Reviews from Our Customers
        </h2>
        <div className="mt-8 border border-black rounded-lg p-6">
          <div ref={sliderRef} className="keen-slider">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`keen-slider__slide transition-opacity duration-500 transform ${
                  currentSlide === index
                    ? "opacity-100 scale-105"
                    : "opacity-40 scale-95"
                }`}
              >
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt={review.name}
                      src={review.image}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex justify-center gap-1 text-[#fab116]">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        {review.name}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{review.review}</p>
                </blockquote>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous slide"
              className="text-white hover:text-gray-400"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <p className="text-sm text-gray-200">
              {currentSlide} / {reviews.length}
            </p>
            <button
              aria-label="Next slide"
              className="text-white hover:text-gray-400"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 19.5L15.75 12l-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsReviews;
