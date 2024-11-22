import React from "react";
import bestpractise from "../../../../assets/Services/catogeries/softwaredevelopment/bestpractise.jpg";

const BestPractices = () => {
  return (
    <div
      className="relative bg-cover bg-center h-auto min-h-[30vh]"
      style={{ backgroundImage: `url(${bestpractise})` }} // Use imported image here
    >
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm "></div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col space-y-16 text-gray-800">
        {/* Section 1 */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            BEST PRACTICES MAKE A GREAT SOFTWARE
          </h2>
          <p className="text-lg">
            Our capacity to help customers is a result of implementing sound
            processes in software development. We are also open to working with
            a specific methodology, based on the project’s requirements.
          </p>
        </div>

        {/* Section 2 */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            WE UNDERSTAND YOUR BUSINESS
          </h2>
          <p className="text-lg">
            We ask all the right questions from the beginning of our
            collaboration, in order to validate assumptions and create a clear
            roadmap towards achieving the required business goals.
          </p>
        </div>

        {/* Section 3 */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We achieve project success no matter what{" "}
          </h2>
          <p className="text-lg">
            Xwola does not pass mere project administration off as project
            management, which, unfortunately, often happens on the market. We
            practice real project management, achieving project success for our
            clients no matter what.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestPractices;
