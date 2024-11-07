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
      {/* Google Map Section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center h-96 lg:h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15227.761978159817!2d78.3623529128652!3d17.414643109877158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9422532fb3f7%3A0xc793fad03d2e2af1!2sManikonda%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sde!4v1729685440896!5m2!1sen!2sde"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <motion.div
        className="pb-20 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <motion.h2
              className="text-3xl sm:text-4xl  tracking-tight text-black relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ display: "inline-block" }} // Ensure it doesn't stretch beyond content width
            >
              Let's work together
           
            </motion.h2>

            <motion.p
              className="mt-4 text-lg leading-8 text-gray-600 "
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
                    className="block text-sm  text-gray-900"
                  >
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-black "
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
        </div>
      </motion.div>
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
    <label
      htmlFor={id}
      className="block text-sm font-handwritting text-gray-900"
    >
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-black font-handwritting"
      placeholder={placeholder}
    />
  </motion.div>
);
