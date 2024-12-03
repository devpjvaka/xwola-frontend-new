import React, { useState } from "react"; // Add useState to the import
import { motion } from "framer-motion";
import MapComponent from "./mapComponent";
export default function ContactForm() {
  return (
    <motion.div
      className="relative bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-6 lg:px-8 py-24">
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

// const ContactForm = () => {
//   return (
//     <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(250,177,22,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-20 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-[#fab116] before:h-full max-md:before:hidden mb-2">
//       {/* Left Section */}
//       <div>
//         <motion.h2
//           className="text-3xl sm:text-4xl tracking-tight text-black relative inline-block font-sans"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           style={{ display: "inline-block" }}
//         >
//           Let's work together
//         </motion.h2>
//         <motion.p
//           className="mt-4 text-lg leading-8 text-gray-600 font-sans"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           Get in touch with us, and we will gladly get back to you as soon as
//           possible. If you need a professional team, Xwola will be happy to
//           assist you in making your vision a reality.
//         </motion.p>

//         <form>
//           <div className="space-y-4 mt-8">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#fab116] outline-none"
//             />
//             <input
//               type="text"
//               placeholder="Street"
//               className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#fab116] outline-none"
//             />
//             <div className="grid grid-cols-2 gap-6">
//               <input
//                 type="text"
//                 placeholder="City"
//                 className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#fab116] outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Postcode"
//                 className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#fab116] outline-none"
//               />
//             </div>
//             <input
//               type="number"
//               placeholder="Phone No."
//               className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#fab116] outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#fab116] outline-none"
//             />
//             <textarea
//               placeholder="Write Message"
//               className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#fab116] outline-none"
//             ></textarea>
//           </div>

//           <button
//             type="button"
//             className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-[#fab116] hover:bg-[#e3a814] text-black"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16px"
//               height="16px"
//               fill="black"
//               className="mr-2"
//               viewBox="0 0 548.244 548.244"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
//                 clipRule="evenodd"
//                 data-original="#000000"
//               />
//             </svg>
//             Submit
//           </button>
//         </form>

//         <ul className="mt-4 flex flex-wrap justify-center gap-6">
//           <li className="flex items-center text-[#fab116]">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16px"
//               height="16px"
//               fill="currentColor"
//               viewBox="0 0 479.058 479.058"
//             >
//               <path
//                 d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
//                 data-original="#000000"
//               />
//             </svg>
//             <a href="mailto:info@example.com" className="text-sm ml-4">
//               <strong>info@example.com</strong>
//             </a>
//           </li>
//           {/* <li className="flex items-center text-[#fab116]">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16px"
//               height="16px"
//               fill="currentColor"
//               viewBox="0 0 482.6 482.6"
//             >
//               <path
//                 d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7z"
//                 data-original="#000000"
//               ></path>
//             </svg>
//             <a href="tel:+158996888" className="text-sm ml-4">
//               <strong>+158 996 888</strong>
//             </a>
//           </li> */}
//         </ul>
//       </div>

//       {/* Right Section */}
//       <div className="z-10 relative h-full max-md:min-h-[350px]">
//         <MapComponent />
//       </div>
//     </div>
//   );
// };
