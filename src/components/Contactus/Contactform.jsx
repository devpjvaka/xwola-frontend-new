import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      className="relative bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-6 lg:px-8 py-12">
        {/* Google Map Section */}
        <motion.div
          className="order-1 lg:order-2 w-full lg:w-1/3 flex items-center justify-center mx-auto lg:mx-0 -ml-4 lg:-ml-16" // Adjusted for mobile screens
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              border: 0,
            }}
          >
            <MapComponent />
          </div>
        </motion.div>


        {/* Contact Form Section */}
        <motion.div
          className="order-2 lg:order-1 w-full lg:w-1/2 lg:ml-40" // Changed order for responsiveness
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-xl">
            <motion.h2
              className="text-3xl sm:text-4xl tracking-tight text-black relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ display: "inline-block" }}
            >
              Let's work together
           
            </motion.h2>

            <motion.p
              className="mt-4 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get in touch with us, and we will gladly get back to you as soon
              as possible. If you need a professional team, Xwola will be happy
              to assist you in making your vision a reality.
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
                {/* First Name Input */}
                <InputField
                  label="First name"
                  id="first-name"
                  name="first-name"
                  type="text"
                  placeholder="John"
                  delay={0.6}
                />
                {/* Last Name Input */}
                <InputField
                  label="Last name"
                  id="last-name"
                  name="last-name"
                  type="text"
                  placeholder="Doe"
                  delay={0.7}
                />
                {/* Email Input */}
                <InputField
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  delay={0.8}
                  fullWidth
                />
                {/* Company Input */}
                <InputField
                  label="Company"
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company"
                  delay={0.9}
                  fullWidth
                />
                {/* Phone Input */}
                <InputField
                  label="Phone"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1234567890"
                  delay={1}
                  fullWidth
                />
                {/* Message Textarea */}
                <motion.div
                  className="sm:col-span-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-900"
                  >
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-black"
                    placeholder="Your message"
                  />
                </motion.div>
              </div>
              {/* Submit Button */}
              <motion.div
                className="mt-10 flex justify-end border-t border-gray-300 pt-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-lg transition duration-200 hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// InputField Component for Reusability
const InputField = ({
  label,
  id,
  name,
  type,
  placeholder,
  delay,
  fullWidth,
}) => (
  <motion.div
    className={fullWidth ? "sm:col-span-2" : ""}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
  >
    <label htmlFor={id} className="block text-sm text-gray-900">
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-black"
      placeholder={placeholder}
    />
  </motion.div>
);
