import React from "react";
 import { motion } from "framer-motion";
import {  SlideUp } from "../../animation/animation";

const Newsletter = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14">
      <motion.h1
       variants={SlideUp(0.2)}
       initial="initial"
       whileInView="animate" 
      className="text-3xl font-bold font-serif text-center">
        Subscribe to our Newsletter
      </motion.h1>
      <motion.p 
      variants={SlideUp(0.2)}
      initial="initial"
      whileInView="animate" 
      className="max-w-[300px] mx-auto text-black-500 text-sm text-center">
      Subscribe to Xwola's newsletter for the latest updates, industry insights, and exclusive content delivered straight to your inbox. Stay informed and inspired!
      </motion.p>

      {/* Form Section   */}
      <motion.div
      variants={SlideUp(0.2)}
      initial="initial"
      whileInView="animate"
       
      className="!mt-10 flex justify-center">
        <input
          type="text"
          placeholder="Enter xour email"
          className="px-4 py-4 border-[1px] border-black "
        />
        <button className="bg-black text-white px-6 py-4 uppercase">Subscribe </button>
      </motion.div>
    </div>
  );
}; 

export default Newsletter;