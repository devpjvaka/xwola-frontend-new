import React from "react";
import Needs from "../../../../assets/Services/catogeries/softwaredevelopment/needs.jpg";

const backgroundStyle = {
  backgroundImage: `url(${Needs})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Discussyourneeds = () => {
  return (
    <>
      <div className="py-14" style={backgroundStyle}>
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              {/* text section */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
                We are excited to discuss your software engineering needs!{" "}
              </h1>
            </div>
            {/* Empty div */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discussyourneeds;
