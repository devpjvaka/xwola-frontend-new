import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
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

const ClientReviews = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 font-[sans-serif] mt-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-gray-800 text-4xl sm:text-5xl font-extrabold mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What our happy clients say
        </motion.h2>

        {/* Reviews */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-8">
          {[
            {
              name: "John Doe",
              position: "IT Manager at TechCorp",
              image: "https://readymadeui.com/team-2.webp",
              review:
                "The support team at your company has been phenomenal. They resolved our issues quickly and ensured minimal downtime. Highly reliable!",
              stars: 5,
            },
            {
              name: "Jane Smith",
              position: "Operations Head at Innovate Solutions",
              image: "https://readymadeui.com/team-5.webp",
              review:
                "We’ve been using your maintenance services for over a year now, and it’s been a game changer. Our systems are always up to date and secure.",
              stars: 4,
            },
            {
              name: "Michael Lee",
              position: "CEO of Visionary Tech",
              image: "https://readymadeui.com/team-4.webp",
              review:
                "Their proactive monitoring and fast issue resolution have been critical for our operations. We’re extremely satisfied with their services.",
              stars: 5,
            },
          ].map((client, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 rounded-3xl shadow-lg p-6 relative text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Avatar */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                />
              </div>

              {/* Card Content */}
              <div className="mt-16">
                <h4 className="text-gray-800 text-base font-bold">
                  {client.name}
                </h4>
                <p className="mt-1 text-xs text-gray-500">{client.position}</p>
                <p className="text-gray-800 text-sm leading-relaxed mt-4">
                  {client.review}
                </p>
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-4 ${
                        starIndex < client.stars
                          ? "fill-[#fab116]"
                          : "fill-[#CED5D8]"
                      }`}
                      viewBox="0 0 14 13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ClientReviews;

