import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import MapComponent from "./mapComponent";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    address: "",
    city: "",
    pinCode: "",
    country: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [wordCount, setWordCount] = useState(0);

  // Validation function
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Enforce 250-character limit for all fields except "email"
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Update word count for the "message" field
    if (name === "message") {
      const words = value.trim().split(/\s+/).filter((word) => word.length > 0);
      setWordCount(words.length);
    }



    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      // Clear error message if all fields are filled
      const isEmptyField = Object.values(updatedData).some(
        (fieldValue) => fieldValue.trim() === ""
      );
      if (!isEmptyField) {
        setError(""); // Clear error if all fields are filled
      }

      return updatedData;
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if all fields are filled
    const isEmptyField = Object.values(formData).some(
      (value) => value.trim() === ""
    );
    if (isEmptyField) {
      setError("All fields are required. Please fill out every field.");
      return;
    }

    // Validate the length of the text fields
    const isTextFieldExceedingLimit = ["firstName", "lastName", "company", "address", "city", "country"].some(
      (key) => formData[key].length > 250
    );
    if (isTextFieldExceedingLimit) {
      setError("Each text field must be within 250 characters.");
      return;
    }

    // Validate phone number for Indian standards
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid Indian phone number with 10 digits.");
      return;
    }

    setError(""); // Clear previous error
    setIsSubmitting(true);

    emailjs
      .send(
        "service_11o2qmh",
        "template_6z5eho2",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          pinCode: formData.pinCode,
          website: formData.website,
          country: formData.country,
          message: formData.message,
        },
        "YwUFfuofNoTrpvgr9"
      )
      .then(
        (response) => {
          console.log("Email sent to admin successfully:", response);
          setIsSubmitting(false);
          setIsSuccess(true);

          // Reset form data and word count
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            phone: "",
            message: "",
            address: "",
            city: "",
            pinCode: "",
            country: "",
            website: "",
          });
          setWordCount(0); // Reset word count to 0

          setTimeout(() => setIsSuccess(false), 1000);
        },
        (error) => {
          console.error("Failed to send email to admin:", error);
          setIsSubmitting(false);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    setIsSuccess(false);
    setError("");
  }, []);


  return (
    <motion.div
      className="relative bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-6 lg:px-8 py-24">
        <motion.div
          className="order-1 lg:order-2 w-full lg:w-1/3 flex items-center justify-center mx-auto lg:mx-0 -ml-4 lg:-ml-16"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{ width: "100%", height: "100%", border: 0 }}>
            <MapComponent />
          </div>
        </motion.div>

        <motion.div
          className="order-2 lg:order-1 w-full lg:w-1/2 lg:ml-40"
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
              as possible.
            </motion.p>


            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div className="mt-3">
                  <label className="font-semibold">First Name</label>
                  <input
                    className={`mt-2 rounded-md w-full py-2 px-3 ${error && !formData.firstName ? 'border-2 border-red-500 error-form' : 'border'
                      }`}
                    name="firstName"
                    type="text"
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {error && !formData.firstName && (
                    <div className="text-red-500 text-sm">First name is required.</div>
                  )}
                </div>
                <div className="mt-3">
                  <label className="font-semibold">Last Name</label>
                  <input
                    className={`mt-2 rounded-md w-full py-2 px-3 ${error && !formData.lastName ? 'border-2 border-red-500 error-form' : 'border'
                      }`}
                    name="lastName"
                    type="text"
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {error && !formData.lastName && (
                    <div className="text-red-500 text-sm">Last name is required.</div>
                  )}
                </div>
                <div className="mt-3">
                  <label className="font-semibold">Email</label>
                  <input
                    className={`mt-2 rounded-md w-full py-2 px-3 ${error && !isValidEmail(formData.email) ? 'border-2 border-red-500 error-form' : 'border'
                      }`}
                    name="email"
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {error && !isValidEmail(formData.email) && (
                    <div className="text-red-500 text-sm">Invalid email format.</div>
                  )}
                </div>
                <div className="mt-3">
                  <label className="font-semibold">Phone</label>
                  <input
                    className={`mt-2 rounded-md w-full py-2 px-3 ${error && !/^[6-9]\d{9}$/.test(formData.phone) ? 'border-2 border-red-500 error-form' : 'border'
                      }`}
                    name="phone"
                    type="tel"
                    placeholder="91+0123456789"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {error && !/^[6-9]\d{9}$/.test(formData.phone) && (
                    <div className="text-red-500 text-sm">Invalid phone number.</div>
                  )}
                </div>
                <div className="mt-3">
                  <label className="font-semibold">Company</label>
                  <input
                    className={`mt-2 rounded-md w-full py-2 px-3 ${error && !formData.company ? 'border-2 border-red-500 error-form' : 'border'
                      }`}
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {error && !formData.company && (
                    <div className="text-red-500 text-sm">company name is required.</div>
                  )}
                </div>
                <div className="mt-3">
                  <label className="font-semibold">Address</label>
                  <input
                    className={`mt-2 rounded-md w-full py-2 px-3 ${error && !formData.address ? 'border-2 border-red-500 error-form' : 'border'
                      }`}
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {error && !formData.address && (
                    <div className="text-red-500 text-sm"> Address is required.</div>
                  )}
                </div>
                <div className="mt-3">
                  <label className="font-semibold">City</label>
                  <input
                    className={`mt-2 rounded-md w-full py-2 px-3 ${error && !formData.city ? 'border-2 border-red-500 error-form' : 'border'
                      }`}
                    name="city"
                    type="text"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {error && !formData.city && (
                    <div className="text-red-500 text-sm"> City is required.</div>
                  )}
                </div>
                <div className="mt-3">
                  <label className="font-semibold">Pin Code</label>
                  <input
                    className={`mt-2 rounded-md w-full py-2 px-3 ${error && !/^\d{6}$/.test(formData.pinCode) ? 'border-2 border-red-500 error-form' : 'border'
                      }`}
                    name="pinCode"
                    type="text"
                    placeholder="123456"
                    value={formData.pinCode}
                    onChange={handleChange}
                  />
                  {error && !/^\d{6}$/.test(formData.pinCode) && (
                    <div className="text-red-500 text-sm">Pin Code must be a 6-digit number.</div>
                  )}
                </div>

                <div className="mt-3">
                  <label className="font-semibold">Country</label>
                  <input
                    className={`mt-2 rounded-md w-full py-2 px-3 ${error && !formData.country ? 'border-2 border-red-500 error-form' : 'border'
                      }`}
                    name="country"
                    type="text"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  {error && !formData.country && (
                    <div className="text-red-500 text-sm"> Country is required.</div>
                  )}
                </div>
                <div className="mt-3">
                  <label className="font-semibold">Website</label>
                  <input
                    className={`mt-2 rounded-md w-full py-2 px-3 ${error && !formData.website ? 'border-2 border-red-500 error-form' : 'border'}`}
                    name="website"
                    type="url"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={handleChange}
                  />
                  {error && !formData.website && (
                    <div className="text-red-500 text-sm">Website is required.</div>
                  )}
                </div>
                {/* Message */}
                <div className="mt-3 sm:col-span-2">
                  <label className="font-semibold">Message</label>
                  <textarea
                    className={`mt-2 rounded-md w-full py-2 px-3 ${error && !formData.message ? 'border-2 border-red-500 error-form' : 'border'
                      }`}
                    name="message"
                    placeholder="Write your message here"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  />
                  <div className="text-sm text-gray-600 mt-1">
                    Word count: {wordCount} / 300
                  </div>
                  {wordCount > 300 && (
                    <div className="text-red-500 text-sm">
                      Word count exceeded. Please limit to 300 words.
                    </div>
                  )}
                  {error && !formData.message && (
                    <div className="text-red-500 text-sm">Message is required.</div>
                  )}
                </div>
              </div>

              <div className="mt-10 flex justify-end border-t border-gray-300 pt-8">
                <div className="mt-10 flex justify-end border-t border-gray-300 pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white px-6 py-3 rounded-lg transition duration-200 hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        Sending
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          fill="#fff"
                          className="ml-2 inline animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                            data-original="#000000"
                          />
                        </svg>
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>

              {isSuccess && <p className="text-green-500 mt-4">Message sent successfully!</p>}
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// InputField Component
const InputField = ({ label, id, name, type, placeholder, value, onChange }) => (
  <motion.div>
    <label htmlFor={id} className="block text-sm text-gray-900">
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-black"
    />
  </motion.div>
);

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import MapComponent from "./mapComponent";

// export default function ContactSection() {
//   const [parallax, setParallax] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {

//       setParallax(window.scrollY * 0.2);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative bg-white text-black overflow-hidden py-24 px-6 lg:px-12">
//       {/* Main Content */}
//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
//         {/* Map Section */}
//         <motion.div
//           className="relative w-full h-[28rem] rounded-xl overflow-hidden shadow-lg"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <MapComponent />

//         </motion.div>

//         {/* Form Section */}
//         <motion.div
//           className="relative bg-white p-8 lg:p-12 rounded-xl shadow-2xl border border-gray-200"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           {/* Heading */}
//           <h2 className="text-4xl font-bold text-[#fab116] mb-4">
//             Let’s build something amazing!
//           </h2>
//           <p className="text-gray-600 text-lg leading-7 mb-8">
//             Share your project details, and we’ll connect with you to discuss how we can help.
//           </p>

//           {/* Form */}
//           <form action="#" method="POST" className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Input Fields */}
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="w-full p-3 rounded-lg bg-gray-100 text-black border border-gray-300 focus:ring-2 focus:ring-[#fab116] focus:border-[#fab116]"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="w-full p-3 rounded-lg bg-gray-100 text-black border border-gray-300 focus:ring-2 focus:ring-[#fab116] focus:border-[#fab116]"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full p-3 rounded-lg bg-gray-100 text-black border border-gray-300 focus:ring-2 focus:ring-[#fab116] focus:border-[#fab116]"
//             />ec
//             <textarea
//               placeholder="Your Message"
//               className="w-full p-3 rounded-lg bg-gray-100 text-black border border-gray-300 focus:ring-2 focus:ring-[#fab116] focus:border-[#fab116] resize-none"
//               rows={5}
//             ></textarea>
//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-3 rounded-lg bg-[#fab116] text-white font-semibold shadow-md hover:bg-[#e9a60f] transition duration-200"
//             >
//               Send Message
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </div>


//   );
// }

// import React from "react";
// import MapComponent from "./mapComponent";

// const ContactForm = () => {
//   return (
//     <div className="flex flex-col w-full min-h-screen bg-gray-50">
//       {/* Split Screen Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
//         {/* Left Sidebar */}
//         <div className="p-8  bg-white flex flex-col justify-center shadow-md">
//           <h2 className="text-4xl font-bold mb-6 text-gray-900">
//             Let’s get in touch with us
//           </h2>
//           <p className="text-lg font-semibold mb-4 text-gray-700">
//             Feel free to say hello with us!
//           </p>
//           <div className="space-y-4">
//             <div>
//               <h4 className="text-gray-600 font-semibold">Phone</h4>
//               <p>+1 (5) 534-093-762</p>
//             </div>
//             <div>
//               <h4 className="text-gray-600 font-semibold">Email</h4>
//               <p>hello@company.com</p>
//             </div>
//             <div>
//               <h4 className="text-gray-600 font-semibold">Office</h4>
//               <p>230 Norman Street, New York, QC (USA) H8R 1A1</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Contact Form */}
//         <div className="p-8 bg-gray-900 text-white flex flex-col justify-center mt-20">
//           <p className="mb-4 text-gray-400">
//             Great! We’re excited to hear from you and let’s start something
//             special together.
//           </p>
//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm mb-1">Email</label>
//               <input
//                 type="email"
//                 placeholder="youremail@company.com"
//                 className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-1">Phone number</label>
//               <input
//                 type="text"
//                 placeholder="+1 (555) 444-0000"
//                 className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-1">Message</label>
//               <textarea
//                 rows="4"
//                 placeholder="Type your message"
//                 className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom Map Section */}
//       <div className="w-full h-50">
//         <MapComponent />
//       </div>
//     </div>
//   );
// };

// export default ContactForm;



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
