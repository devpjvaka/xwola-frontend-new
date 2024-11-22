import React from "react";

// Sample data for services
const services = [
  { icon: "🖥️", title: "Architecture & design" },
  { icon: "👁️", title: "Usability & interaction design" },
  { icon: "💻", title: "Development & implementation" },
  { icon: "🐞", title: "Testing &  quality assurance" },
  { icon: "☁️", title: "Reengineering & migration" },
  { icon: "📄", title: "Technical & user documentation" },
  { icon: "⚙️", title: "Maintenance & support" },
  { icon: "📋", title: "Professional IT consultancy" },
];

const SoftwareServices = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto ">
        {/* Heading */}
        <h2 className="text-3xl text-gray-800 mb-8">
          Our Custom Software Development Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-3  lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center text-center space-y-4 p-4 transition-transform transform hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl text-yellow-500">{service.icon || "🔧"}</div>
              {/* Title */}
              <h3 className="text-lg font-medium text-gray-700">
                {service.title || "Service Title"}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareServices;
