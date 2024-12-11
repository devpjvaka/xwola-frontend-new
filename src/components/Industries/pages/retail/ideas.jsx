import React from "react";
import { Link } from "react-router-dom";
import img from "../../../../assets/Industries/ideas.webp"



const Ideas = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-[#fab116] mb-6">Learn More</h1>
      <p className="text-lg text-gray-800 text-center max-w-2xl mb-8">
        Welcome to the "Learn More" page! Here, we dive deeper into how we can help you 
        transform your ideas into reality through our innovative solutions and services.
      </p>
      <img
        src={img}
        alt="Learn More Illustration"
        width={500} // Specify image dimensions
        height={300}
        className="rounded-lg shadow-lg"
      />
      <Link to="/retail">
        <button className="primary-btn  text-black mt-10 px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Ideas;
