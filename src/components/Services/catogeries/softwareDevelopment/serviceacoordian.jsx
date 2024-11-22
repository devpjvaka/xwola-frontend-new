import React, { useState } from 'react';

const ServiceAccordion = ({ sections }) => {
  const [isOpen, setIsOpen] = useState({});

  const toggleAccordion = (index) => {
    setIsOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full max-w-3xl  mt-8">
      {sections.map((section, index) => (
        <div
          key={index}
          className="mb-4 border 300 overflow-hidden "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <input
            type="checkbox"
            name="panel"
            id={`panel-${index}`}
            className="hidden"
            checked={isOpen[index] || false}
            onChange={() => toggleAccordion(index)}
          />
          <label
            htmlFor={`panel-${index}`}
            className="flex justify-between p-4 cursor-pointer transition-colors duration-300 hover:bg-yellow-300"
          >
            <span className="text-lg font-semibold text-gray-700 text-left">{section.title}</span>
            <span
              className={`transform transition-transform duration-300 ${
                isOpen[index] ? 'rotate-180' : ''
              } text-gray-500`}
            >
              +
            </span>
          </label>
          <div
            className={`accordion__content transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen[index] ? 'max-h-screen' : 'max-h-0'
            } bg-gray-100`}
          >
            <div className="p-4 text-left">
              <p className="accordion__body text-gray-600 mt-2">{section.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceAccordion;
