import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";

const TestimonialData = [
  {
    id: 1,
    name: "Shivaya",
    designation: "Developer",
    img: "https://i.pravatar.cc/300?img=1",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Dignissimos aperiam fugit illum repellat perferendis modi accusantium
      molestias laboriosam unde sint`,
  },
  {
    id: 2,
    name: "Maha Deva",
    designation: "Designer",
    img: "https://i.pravatar.cc/300?img=2",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Dignissimos aperiam fugit illum repellat perferendis modi accusantium
      molestias laboriosam unde sint`,
  },
  {
    id: 3,
    name: "Sri Hari",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=3",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Dignissimos aperiam fugit illum repellat perferendis modi accusantium
      molestias laboriosam unde sint`,
  },
];



const Testimonial = () => {
  return (
    <div className="py-14">
      {/* heading title */}
      <div
        className="space-y-4 text-center max-w-[550px]
       mx-auto mb-8"
      ></div>

      {/* Testimonial cards  */}

      <div className="bg-black p-12">
        <div
          className=" container grid grid-cols-1 md:grid-cols-3 
        gap-6"
        >
          {TestimonialData.map((card) => {
            return (
              <div
                kex={card.id}
                className="border-[1px] border-gray-500 p-5
              text-white group hover:bg-white duration-300 "
              >
                {/* Upper Section */}

                {
                  <div
                    className="flex flex-row items-center 
                gap-3"
                  >
                    <img
                      src={card.img}
                      alt=""
                      className="w-[60px] rounded-full"
                    />
                    <div>
                      <p className="text-sm font-bold group-hover:text-black ">
                        {card.name}
                      </p>
                      <p className="text-gray-400 text-xs group-hover:text-black">
                        {card.designation}
                      </p>
                    </div>
                    <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                  </div>
                }

                {/* Button Section */}
                <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                  <p className="text-sm text-gray-300 group-hover: text-black">
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
