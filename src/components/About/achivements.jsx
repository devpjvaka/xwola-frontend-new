import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
 
  const numericData = [
    { id: 1, number: 200, label: "Projects Completed" },
    { id: 2, number: 50, label: "Clients Served" },
    { id: 3, number: 10, label: "Years of Experience" },
    { id: 4, number: 5, label: "Countries Reached" },
  ];
 
  return (
    <section className="py-16 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl xl:text-4xl  mb-10">
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {numericData.map((data) => (
            <div key={data.id} className="flex flex-col items-center">
              {inView ? (
                <CountUp
                  start={0}
                  end={data.number}
                  duration={2.5}
                  separator=","
                  className="text-4xl  text-[#b27200]"
                  suffix="+"
                />
              ) : (
                <span className="text-4xl  text-[#b27200]">
                  0
                </span>
              )}
              <p className="mt-2 text-lg text-gray-700">
                {data.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Achievements;