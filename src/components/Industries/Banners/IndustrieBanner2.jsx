import { motion } from 'framer-motion';
import { SlideUp } from "../../../animation/animation";
import Retails from "../../../assets/Industries/retail1 1.jpg";

const IndustrieBanner2 = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image section */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            {/* Image appears first on mobile */}
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Retails}
              alt="Retail"
              className="w-[95%] md:w-full mx-auto"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px] order-2 md:order-1">
            {/* Text appears second on mobile */}
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl text-yellow-500 font-handwritting relative mb-5" // Added mb-5 for spacing
            >
              <span className="text-black px-2 py-1 rounded">Retail</span>
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-xl leading-7 font-handwritting mt-4 text-justify" // Added mt-4 for spacing
            >
              We specialize in{" "}
              <span className="font-handwritting text-xl">
                Telecommunications
              </span>
              <br />
              <span className="font-handwritting text-md">Retail</span>,
              providing comprehensive solutions for selling telecom products
              such as SIM cards, mobile plans, devices, and accessories. Our
              goal is to create seamless retail experiences that empower telecom
              businesses to effectively manage and grow their customer
              offerings.
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
    </div>
  );
};

// Export the function as default
export default IndustrieBanner2;
