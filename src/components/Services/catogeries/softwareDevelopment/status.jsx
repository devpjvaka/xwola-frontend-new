import React from "react";
import CountUp from "react-countup";

const Status = () => {
  return (
    <section className="container h-10 md:h-32 ">
      <div className="mx-auto my-4 grid w-full -translate-y-10 grid-cols-4 divide-x divide-slate-700 bg-black p-2 shadow-lg dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] md:-translate-y-16 md:p-8 ">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-sm font-bold text-white/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={234} suffix="+" duration={2.75} />
          </h1>
          <h1 className="sm:text-md text-xs text-white md:text-lg">Projects</h1>
        </div>
        <div className="flex  flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-white/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={10} suffix="+" duration={2.75} />
          </h1>
          <h1 className=" sm:text-md text-xs text-white md:text-lg">Years of Experience</h1>
        </div>
     
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-white/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp
              start={1}
              end={5}
              duration={2.75}
              separator=" "
              // decimals={4}
              // decimal=","
              suffix="+"
            />
          </h1>
          <h1 className="sm:text-md text-xs text-white md:text-lg">Countries Reached</h1>
        </div>
      </div>
    </section>
  );
};

export default Status;
