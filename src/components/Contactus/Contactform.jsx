import React, { useState } from "react";
import contact from "../../assets/contact.png"
// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     company: "",
//     email: "",
//     phone: "",
//     message: "",
//     agreed: false,
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Submit form logic here
//   };

//   return (
//     <div className="bg-white px-6 py-24 sm:py-24 lg:px-8">
//       <div className="max-w-2xl mx-auto text-center">
//         <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
//           Contact Us
//         </h2>
//         <p className="mt-4 text-lg leading-6 text-black-700">
//           Get in touch with us, and we will gladly get back to you as soon as possible.
//           If you need a professional team, Xwola will be happy to assist you in making
//           your vision a reality.
//         </p>
//       </div>
//       <form onSubmit={handleSubmit} className="mt-16 max-w-xl mx-auto sm:mt-20">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//           <div>
//             <label
//               htmlFor="firstName"
//               className="block text-sm font-semibold leading-6 text-black"
//             >
//               First name
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               id="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="mt-2 block w-full rounded-md border-gray-300 shadow-sm bg-white text-black placeholder-gray-500 focus:ring-black focus:border-black sm:text-sm"
//               placeholder="John"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="lastName"
//               className="block text-sm font-semibold leading-6 text-black"
//             >
//               Last name
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               id="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="mt-2 block w-full rounded-md border-gray-300 shadow-sm bg-white text-black placeholder-gray-500 focus:ring-black focus:border-black sm:text-sm"
//               placeholder="Doe"
//             />
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="company"
//               className="block text-sm font-semibold leading-6 text-black"
//             >
//               Company
//             </label>
//             <input
//               type="text"
//               name="company"
//               id="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="mt-2 block w-full rounded-md border-gray-300 shadow-sm bg-white text-black placeholder-gray-500 focus:ring-black focus:border-black sm:text-sm"
//               placeholder="Your Company"
//             />
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold leading-6 text-black"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-2 block w-full rounded-md border-gray-300 shadow-sm bg-white text-black placeholder-gray-500 focus:ring-black focus:border-black sm:text-sm"
//               placeholder="you@example.com"
//             />
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="phone"
//               className="block text-sm font-semibold leading-6 text-black"
//             >
//               Phone number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               id="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="mt-2 block w-full rounded-md border-gray-300 shadow-sm bg-white text-black placeholder-gray-500 focus:ring-black focus:border-black sm:text-sm"
//               placeholder="+1234567890"
//             />
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="message"
//               className="block text-sm font-semibold leading-6 text-black"
//             >
//               How can we help you?
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               className="mt-2 block w-full rounded-md border-gray-300 shadow-sm bg-white text-black placeholder-gray-500 focus:ring-black focus:border-black sm:text-sm"
//               placeholder="Your message"
//             />
//           </div>
//           <div className="flex items-start sm:col-span-2">
//             <div className="flex h-5 items-center">
//               <input
//                 id="agreed"
//                 name="agreed"
//                 type="checkbox"
//                 checked={formData.agreed}
//                 onChange={handleChange}
//                 className="h-4 w-4 text-black border-gray-400 rounded bg-white focus:ring-black"
//               />
//             </div>
//             <div className="ml-3 text-sm">
//               <label htmlFor="agreed" className="font-medium text-black">
//                 By selecting this, you agree to our{" "}
//                 <a href="#" className="font-semibold text-black underline">
//                   privacy policy
//                 </a>
//                 .
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="mt-10">
//           <button
//             type="submit"
//             className="w-full bg-black text-white font-semibold rounded-md px-4 py-2.5 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

export default function ContactForm() {
  return (
    <div className="relative bg-white ">
      <div className="lg:absolute lg:inset-y-0 lg:left-1/2 lg:w-1/2">
        <img
          src={contact}
          alt=""
          className="h-64 w-full object-cover sm:h-80 lg:h-full lg:w-full"
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let's work together</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Get in touch with us, and we will gladly get back to you as soon as possible.
              If you need a professional team, Xwola will be happy to assist you in making
              your vision a reality.
            </p>
            <form action="#" method="POST" className="mt-12 space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
                    placeholder="Doe"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
                    placeholder="Your Company"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
                    placeholder="+1234567890"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
                    placeholder="Your message"
                  />
                </div>
               
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                  type="submit"
                  className="rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black border border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
