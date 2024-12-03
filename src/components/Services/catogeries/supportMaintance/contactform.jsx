import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <div className="bg-gradient-to-r from-[#f3f2ee] via-[#ffc93c] to-[#f7f5ef] py-12 text-center mt-10">
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Ready to Maximize Your Software's Potential?{" "}
      </motion.h3>
      <motion.button
        className="mt-4 text-[#fab116] py-3 px-8 rounded-md font-semibold transition-all"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a href="/contactus" className="inline-block">
          <button
            type="button"
            className=" mt-2 rounded-lg border border-black text-black px-4 py-2 text-sm sm:text-lg  hover:bg-white hover:text-black transition"
          >
            Get started
          </button>
        </a>
      </motion.button>
    </div>
  );
}
