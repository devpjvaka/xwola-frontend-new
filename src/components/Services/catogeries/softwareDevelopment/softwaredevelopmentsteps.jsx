import React from "react";
import Steps from "../../../../assets/Services/catogeries/softwaredevelopment/sd 2.webp";

// const features = [
//   {
//     title: "Superior quality of work",
//     description:
//       "Our attention to detail and quality is unmatched in the industry. We’re not just a resource provider but also a key strategic technology partner ready to meet tasks of any complexity and deliver a high-quality project. With a client satisfaction rating of 97%, you can be confident that you’re in safe hands.",
//   },
//   {
//     title: "Flexible scaling",
//     description:
//       "You get access to a talent pool of over 2000 software specialists to scale development capacity on-demand and fully support your growing development portfolio. We’ll build an offshore software development team with the best-fit skills for your project, so your core team can focus on optimizing business as usual.",
//   },
//   {
//     title: "Geographical proximity",
//     description:
//       "As a global software development outsourcing company, we have 20 delivery centers in eight countries, including central and eastern Europe. This means our specialists are available for regular onsite visits, creating a seamless working partnership. Our experts will rapidly integrate with your in-house team, adopting your culture while transferring process and behavior-change knowledge to your internal staff.",
//   },
// ];

// const ServiceFeatures = () => {
//   return (
//     <div className="container mx-auto px-6 md:px-12 mt-12 mb-10">
//       <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
//         What you get with Our software development services
//       </h1>
//       <div className="grid md:grid-cols-12 gap-6 relative">
//         {/* Left Content */}
//         <div className="md:col-span-8 space-y-12 relative">
//           {/* Connecting Thread Line */}
//           <div
//             className="absolute left-[5.5px] w-0.5 bg overflow-hidden"
//             style={{
//               top: "1.1rem", // Start below the first dot
//               bottom: "1.1rem", // End above the last dot
//             }}
//           >
//             {/* Laser Effect */}
//             <span className="absolute inset-0  animate-laser z-0 opacity-100"></span>
//           </div>

//           {features.map((feature, index) => (
//             <div key={index} className="flex items-start relative">
//               {/* Blue Dot */}
//               <div className="relative flex items-center z-10">
//                 <span className="block w-3 h-3 bg-black rounded-full"></span>
//               </div>
//               {/* Feature Text */}
//               <div className="pl-8">
//                 <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
//                   {feature.title}
//                 </h2>
//                 <p className="mt-2 text-gray-700 text-sm md:text-base">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Image */}
//         <div className="md:col-span-4">
//           <img
//             src={Steps}
//             alt="Office Work"
//             className="rounded-lg object-cover shadow-md ml-10 items-center w-[800px] h-[400px]"
//           />
//         </div>
//       </div>

//     </div>
//   );
// };
const ServiceFeatures = () => (
  <section className="text-gray-800 body-font bg-black">
    <div className="container px-6 py-16 mx-auto">
      <div className="flex flex-wrap">
        {/* Text Section */}
        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          {[
            {
              step: "Superior Quality of Work",
              description:
                "Our attention to detail and commitment to quality ensure every project exceeds expectations. With a client satisfaction rating of 97%, you’re in expert hands.",
              iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            },
            {
              step: "Flexible Scaling",
              description:
                "Access a global talent pool of over 50 software specialists. We help you scale development capacity effortlessly while your core team focuses on business goals.",
              iconPath: "M22 12h-4l-3 9L9 3l-3 9H2",
            },
            {
              step: "Geographical Proximity",
              description:
                "With 20 delivery centers worldwide, our teams ensure seamless collaboration and regular onsite visits for a productive partnership.",
              iconPath: "M12 22V8M5 12H2a10 10 0 0020 0h-3",
              iconAdditionalPath: "M12 5a3 3 0 100-6 3 3 0 000 6z",
            },
            {
              iconPath: "M22 4L12 14.01l-3-3",
            },
          ].map((item, index) => (
            <div
              className={`flex items-start relative ${index < 3 ? "pb-12" : ""}`}
              key={item.step}
            >
              {/* Thread Line */}
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                {index < 3 && (
                  <div
                    className="thread-line h-full w-1 pointer-events-none"
                    style={{
                      position: "absolute",
                      top: "50%", // Position at the middle of the icon
                      transform: "translateY(-50%)",
                    }}
                  ></div>
                )}
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#fab116] text-black flex items-center justify-center shadow-md z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d={item.iconPath}></path>
                  {item.iconAdditionalPath && (
                    <path d={item.iconAdditionalPath}></path>
                  )}
                </svg>
              </div>

              {/* Content */}
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-[#fab116]">
                  {item.step}
                </h3>
                <p className="mt-2 text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="lg:w-3/5 md:w-1/2 w-full">
          <img
            src={Steps}
            alt="Office Work"
            className="rounded-lg object-cover shadow-md mx-auto items-center w-[490px] h-auto md:h-[400px]"
          />
        </div>
      </div>
    </div>

    {/* CSS for Continuous 3D Light Effect */}
    <style jsx>{`
      .thread-line {
        background: linear-gradient(
          to bottom,
          #333333,
          #555555,
          #444444,
          #555555,
          #333333
        );
        position: relative;
        overflow: hidden;
      }
      .thread-line::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.6) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        background-size: 100% 200%;
        animation: lightPassContinuous 2s linear infinite;
      }
      @keyframes lightPassContinuous {
        from {
          background-position: 0% 0%;
        }
        to {
          background-position: 0% 100%;
        }
      }
    `}</style>
  </section>
);



export default ServiceFeatures;
