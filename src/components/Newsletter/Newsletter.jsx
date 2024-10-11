import React from "react";

const Newsletter = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14">
      <h1 className="text-3xl font-bold font-serif text-center">
        Subscribe to our Newsletter
      </h1>
      <p className="max-w-[300px] mx-auto text-gray-500 text-sm text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel molestias
        deleniti officia minima?
      </p>

      {/* Form Section   */}
      <div className="!mt-10 flex justify-center">
        <input
          type="text"
          placeholder="Enter xour email"
          className="px-4 py-4 border-[1px] border-black "
        />
        <button className="bg-black text-white px-6 py-4 uppercase">Subscribe </button>
      </div>
    </div>
  );
};

export default Newsletter;
