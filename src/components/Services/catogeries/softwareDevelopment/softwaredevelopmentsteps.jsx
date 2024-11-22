import React from "react";
import Steps from "../../../../assets/Services/catogeries/softwaredevelopment/step1.jpg";

const features = [
  {
    title: "Superior quality of work",
    description:
      "Our attention to detail and quality is unmatched in the industry. We’re not just a resource provider but also a key strategic technology partner ready to meet tasks of any complexity and deliver a high-quality project. With a client satisfaction rating of 97%, you can be confident that you’re in safe hands.",
  },
  {
    title: "Flexible scaling",
    description:
      "You get access to a talent pool of over 2000 software specialists to scale development capacity on-demand and fully support your growing development portfolio. We’ll build an offshore software development team with the best-fit skills for your project, so your core team can focus on optimizing business as usual.",
  },
  {
    title: "Geographical proximity",
    description:
      "As a global software development outsourcing company, we have 20 delivery centers in eight countries, including central and eastern Europe. This means our specialists are available for regular onsite visits, creating a seamless working partnership. Our experts will rapidly integrate with your in-house team, adopting your culture while transferring process and behavior-change knowledge to your internal staff.",
  },
];

const ServiceFeatures = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 mt-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        What you get with Our software development services
      </h1>
      <div className="grid md:grid-cols-12 gap-6 relative">
        {/* Left Content */}
        <div className="md:col-span-8 space-y-12 relative">
          {/* Connecting Thread Line */}
          <div
            className="absolute left-[5.5px] w-0.5 bg overflow-hidden"
            style={{
              top: "1.1rem", // Start below the first dot
              bottom: "1.1rem", // End above the last dot
            }}
          >
            {/* Laser Effect */}
            <span className="absolute inset-0  animate-laser z-0 opacity-100"></span>
          </div>

          {features.map((feature, index) => (
            <div key={index} className="flex items-start relative">
              {/* Blue Dot */}
              <div className="relative flex items-center z-10">
                <span className="block w-3 h-3 bg-black rounded-full"></span>
              </div>
              {/* Feature Text */}
              <div className="pl-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {feature.title}
                </h2>
                <p className="mt-2 text-gray-700 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="md:col-span-4">
          <img
            src={Steps}
            alt="Office Work"
            className="rounded-lg object-cover shadow-md ml-10 items-center w-[800px] h-[400px]"
          />
        </div>
      </div>
   
    </div>
  );
};

export default ServiceFeatures;
