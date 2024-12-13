import React from "react";
import CountUp from "react-countup";

const Status = () => {
  const stats = [
    {
      count: 234,
      suffix: "+",
      duration: 2.75,
      label: "Projects",
    },
    {
      count: 10,
      suffix: "+",
      duration: 2.75,
      label: "Years of Experience",
    },
    {
      count: 5,
      suffix: "+",
      duration: 2.75,
      label: "Countries Reached",
    },
  ];

  return (
    <section className="container mx-auto max-w-4xl h-10 md:h-32">
      <div className="my-4 grid w-full -translate-y-10 grid-cols-3 divide-x bg-black p-2 shadow-lg dark:bg-gray-800 dark:text-white/70 md:-translate-y-16 md:p-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-2 sm:px-4"
          >
            <h1 className="text-sm font-bold text-white/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp
                end={stat.count}
                suffix={stat.suffix}
                duration={stat.duration}
              />
            </h1>
            <h1 className="sm:text-md text-xs text-white md:text-lg">{stat.label}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Status;

