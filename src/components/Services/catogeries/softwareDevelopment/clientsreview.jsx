import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const TestimonialData = [
  {
    id: 1,
    name: "Govinda",
    text: "Xwola excelled in collaboration, seamlessly coordinating with all stakeholders.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Krishna",
    text: "We appreciated ScienceSoft's client focus, collaborative approach, and expert insights that enhanced value and optimized costs.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Shiva",
    text: "I was particularly impressed by Xwola's collaborative approach, seamlessly coordinating with multiple teams and individuals.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Vishnu",
    text: "We value your proactive mindset and your ability to propose enhancements to potential solutions, both in terms of architecture and business strategy.",
    img: "https://picsum.photos/103/103",
  },
];

const Clientsreview = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <ul style={{ margin: "0px", color: "white" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: "white",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  return (
    <div className="py-10 my-10 bg-black">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold text-white relative inline-block hover:underline hover:decoration-yellow-400 hover:decoration-2">
            What Our Clients Value
          </h1>
        </div>

        {/* Testimonial Cards */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="px-4 mb-3">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl bg-white relative">
                  <img
                    src={data.img}
                    alt={`${data.name}'s photo`}
                    className="rounded-full w-20 h-20 mx-auto"
                  />
                  <p className="text-md text-black text-center mt-4">{data.text}</p>
                  <h1 className="text-lg font-bold text-center mt-2">{data.name}</h1>
                  <div className="absolute bottom-4 right-4 flex space-x-1 text-yellow-500">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                  <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clientsreview;
