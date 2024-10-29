import { motion } from 'framer-motion';
import { SlideUp } from "../../../animation/animation";
import Events from "../../../assets/Industries/events1 2.jpg";

const IndustrieBanner3 = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image section */}
        <div className="flex flex-col justify-center">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={Events}
            alt="Events and Hospitality"
            className="w-[95%] md:w-full mx-auto"
          />
        </div>

        {/* Text section */}
        <div className="space-y-5 xl:max-w-[500px]">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-4xl text-black-500 font-handwritting relative mb-5"
          >
            <span className="text-black px-2 py-1 rounded">
              Events & Hospitality
            </span>
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 font-handwritting text-xl leading-7 mt-4 text-justify"
          >
            Our focus lies in{" "}
            <span className="font-handwritting text-md">
              Events & Hospitality
            </span>
            <br />
            providing tailored solutions that enhance guest experiences and
            streamline event management. Our mission is to craft unforgettable
            moments through exceptional service, innovative technology, and
            meticulous planning.
          </motion.p>
          <div>
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn font-handwritting mt-8 bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
            >
              Discover Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrieBanner3;
