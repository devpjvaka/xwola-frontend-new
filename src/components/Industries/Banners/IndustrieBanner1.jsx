import { motion } from 'framer-motion';
import Tele from "../../../assets/Industries/communications 2.jpg";
// import { SlideUp } from "../../animation/animation";
import { SlideUp } from "../../../animation/animation";

// Define your default component as a const function
const IndustrieBanner1 = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Tele}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 flex justify-center flex-col">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl text-yellow-500 font-handwritting relative" // Add relative positioning
            >
              <span className="text-black px-2 py-1 rounded">
                Telecommunications
              </span>
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 font-handwritting text-lg md:text-xl leading-7 text-justify"
            >
              Telecom software development provides telcos with powerful
              solutions that automate service and business operations, while
              enabling the seamless introduction of new, value-added customer
              offerings.
              <span className="block mt-4">
                We specialize in Telecommunications Retail, offering
                comprehensive solutions for the sale of telecom products,
                including SIM cards, mobile plans, devices, and accessories.
                Our focus is on providing seamless retail experiences that
                empower telecom businesses to efficiently manage and grow
                their customer offerings.
              </span>
            </motion.p>

            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                animate="animate"
                className="primary-btn font-handwritting bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] mt-8"
              >
                Discover Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrieBanner1;
