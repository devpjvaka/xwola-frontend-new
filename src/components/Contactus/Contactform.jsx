import React, { useState } from "react";

import { motion } from "framer-motion";


 
export default function ContactForm() {
  return (
    <motion.div
      className="relative bg-white"
      initial={{ opacity: 0, y: 50 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Animation on load
      transition={{ duration: 0.8, ease: "easeOut" }} // Duration and easing
    >
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center h-screen">
        <div className="w-full h-full">
          <h1 className="text-center font-handwritting">Our Company</h1>
          {/* Google Map iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15227.761978159817!2d78.3623529128652!3d17.414643109877158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9422532fb3f7%3A0xc793fad03d2e2af1!2sManikonda%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sde!4v1729685440896!5m2!1sen!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <motion.div
        className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <motion.h2
              className="text-4xl font-handwritting tracking-tight text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Let's work together
            </motion.h2>
            <motion.p
              className="mt-4 text-lg leading-8 text-gray-600 font-handwritting"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get in touch with us, and we will gladly get back to you as soon as
              possible. If you need a professional team, Xwola will be happy to
              assist you in making your vision a reality.
            </motion.p>
            <motion.form
              action="#"
              method="POST"
              className="mt-12 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-handwritting text-gray-900"
                  >
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-black font-handwritting"
                    placeholder="John"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-handwritting text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="font-handwritting mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-black"
                    placeholder="Doe"
                  />
                </motion.div>

                <motion.div
                  className="sm:col-span-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-handwritting text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="font-handwritting mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-black"
                    placeholder="you@example.com"
                  />
                </motion.div>

                <motion.div
                  className="sm:col-span-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label
                    htmlFor="company"
                    className="block text-sm font-handwritting text-gray-900"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="font-handwritting mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-black"
                    placeholder="Your Company"
                  />
                </motion.div>

                <motion.div
                  className="sm:col-span-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm font-handwritting text-gray-900"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="font-handwritting mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-black"
                    placeholder="+1234567890"
                  />
                </motion.div>

                <motion.div
                  className="sm:col-span-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-handwritting text-gray-900"
                  >
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="font-handwritting mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-black"
                    placeholder="Your message"
                  />
                </motion.div>
              </div>
              <motion.div
                className="mt-10 flex justify-end border-t border-gray-900/10 pt-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.button
                  type="submit"
                  className="primary-btn font-handwritting"
                  whileHover={{ scale: 1.05 }} // Scale effect on hover
                  whileTap={{ scale: 0.95 }} // Scale effect on tap/click
                >
                  Submit
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}