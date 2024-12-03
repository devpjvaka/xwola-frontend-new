// import React from 'react';
// import { motion } from 'framer-motion';

// import heroimg from '../../../../assets/Industries/events&hospitatily-hero.webp';

// const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8 },
// };

// const EventsAndHospitalityPage = () => {
//     return (
//         <div>
//             {/* Hero Section */}
//             <section
//                 className="h-screen flex items-center justify-center relative text-center py-16 bg-cover bg-center"
//                 style={{
//                     backgroundImage: `url(${heroimg})`,
//                 }}
//             >
//                 {/* Transparent Layer */}
//                 <div
//                     className="absolute inset-0 bg-black bg-opacity-60"
//                     style={{
//                         background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))",
//                     }}
//                 ></div>

//                 {/* Content */}
//                 <motion.div 
//                     variants={{
//                         initial: { opacity: 0, y: 50 },
//                         animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//                     }}
//                     initial="initial"
//                     animate="animate"
//                     className="relative z-10 p-8"
//                 >
//                     <h1 className="text-5xl font-bold text-gold mb-6">
//                         Crafting Experiences Beyond Expectations
//                     </h1>
//                     <p className="text-xl text-gray-300 mb-8">
//                         Transforming Events & Hospitality with Innovative Technology
//                     </p>
//                     <div className="flex justify-center gap-8">
//                         <button className="bg-gold text-black py-3 px-8 rounded-lg hover:bg-gold-600 transition duration-300">
//                             Explore Solutions
//                         </button>
//                         <button className="border-2 border-gold text-gold py-3 px-8 rounded-lg hover:bg-gold-600 hover:text-black transition duration-300">
//                             Get in Touch
//                         </button>
//                     </div>
//                 </motion.div>
//             </section>

//             {/* Other Sections */}
//             <section className="bg-white text-black py-16">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-4xl font-bold text-center text-black mb-8">
//                         Our Expertise in Events & Hospitality
//                     </h2>
//                     <p className="text-lg text-center text-gray-700 mb-12">
//                         We offer cutting-edge solutions tailored to the needs of the events and hospitality
//                         industry, enabling seamless experiences.
//                     </p>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         <div className="p-6 bg-white border-2 border-black rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold text-gold mb-4">Event Management</h3>
//                             <p className="text-gray-700">
//                                 Streamline event planning and execution with our comprehensive suite of tools.
//                             </p>
//                         </div>
//                         <div className="p-6 bg-white border-2 border-black rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold text-gold mb-4">Guest Experience</h3>
//                             <p className="text-gray-700">
//                                 Enhance guest engagement with personalized services and digital solutions.
//                             </p>
//                         </div>
//                         <div className="p-6 bg-white border-2 border-black rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold text-gold mb-4">Data Analytics</h3>
//                             <p className="text-gray-700">
//                                 Leverage data insights to make informed decisions and optimize operations.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Case Studies Section */}
//             <section className="bg-black py-16">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-4xl font-bold text-center text-gold mb-12">
//                         Success Stories in Events & Hospitality
//                     </h2>
//                     <p className="text-lg text-center text-gray-300 mb-12">
//                         See how Xwola's solutions have transformed the events & hospitality industry. Our
//                         innovative technology has helped businesses streamline their operations and enhance guest experiences.
//                     </p>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         <div className="p-6 bg-white border-2 border-gold rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold text-black mb-4">International Conference</h3>
//                             <p className="text-gray-700">
//                                 We optimized event registration and guest interaction for a large-scale international conference,
//                                 improving attendee satisfaction and operational efficiency.
//                             </p>
//                         </div>
//                         <div className="p-6 bg-white border-2 border-gold rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold text-black mb-4">Luxury Hotel Integration</h3>
//                             <p className="text-gray-700">
//                                 Our guest management system integrated seamlessly into a luxury hotel's operations,
//                                 improving service delivery and guest experience.
//                             </p>
//                         </div>
//                         <div className="p-6 bg-white border-2 border-gold rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold text-black mb-4">Exclusive Event Launch</h3>
//                             <p className="text-gray-700">
//                                 Xwola's event management platform enabled flawless execution of an exclusive product launch,
//                                 enhancing brand visibility and guest engagement.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default EventsAndHospitalityPage;
import { motion } from "framer-motion";
import heroimg from '../../../../assets/Industries/events&hospitatily-hero.webp';
import image from '../../../../assets/Industries/hospitality.png';

import ModernSection from "./modernSection";
import { Link } from "react-router-dom";

const EventsAndHospitalityPage = () => {
    return (
        <div className="bg-black text-white">
            {/* Hero Section */}
            <section
                className="relative h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroimg})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-8">
                    <motion.h1
                        className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Crafting Exceptional Experiences with Xwola
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-sm sm:text-lg text-gray-300 max-w-xs sm:max-w-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Transforming hospitality and events with cutting-edge software solutions.
                    </motion.p>
                    <motion.div
                        className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <button
                            type="button"
                            className="rounded-lg bg-white border-2 border-[#fab116] px-4 py-2 text-sm sm:text-lg text-black shadow-sm hover:bg-[#fab116]"
                        >
                            Discover Our Services
                        </button>
                        <button
                            type="button"
                            className="border border-[#fab116] text-[#fab116] px-4 py-2 text-sm sm:text-lg rounded-lg hover:bg-white hover:text-black transition"
                        >
                            Learn More
                        </button>
                    </motion.div>
                </div>
            </section>







            {/* Key Features */}
            {/* <section className="py-20 px-8 bg-white text-black">
                <h2 className="text-4xl font-bold text-center text-black mb-12">
                    Key Features
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Event Management Software",
                            description: "Scheduling, attendee tracking, and analytics tools.",
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 text-black group-hover:text-white transition"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10m-6 4h2m7-13H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Hospitality Solutions",
                            description: "Enhance guest experiences with digital tools.",
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 text-black group-hover:text-white transition"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7m2-5H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Budget Tracking",
                            description: "Track your event's expenses and revenue with real-time tools.",
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 text-black group-hover:text-white transition"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 16s-2 0-3-3 1-5 5-5h4s2 0 3 3-1 5-5 5H8zm-2 5h12a2 2 0 002-2v-4m-2 6h2m-16-2h2m0-4h12m-4 2v4m-4-4v4"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Custom Integrations",
                            description: "Tailored solutions for your unique needs.",
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 text-black group-hover:text-white transition"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 16s-2 0-3-3 1-5 5-5h4s2 0 3 3-1 5-5 5H8zm-2 5h12a2 2 0 002-2v-4m-2 6h2m-16-2h2m0-4h12m-4 2v4m-4-4v4"
                                    />
                                </svg>
                            ),
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-6 border border-[#fab116] rounded-lg hover:bg-black group hover:text-white transition max-w-xl mx-auto"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="mr-4">{feature.icon}</div>
                            <h3 className="mt-4 text-xl font-bold text-[#fab116]">{feature.title}</h3>
                            <p className="mt-2 text-gray-700 group-hover:text-white">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section> */}

            <section id="features" className="py-12 sm:py-16 bg-white">
    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
             Key Features
        </motion.h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8">
            {[
                {
                    title: "Event Management Software",
                    description: "Scheduling, attendee tracking, and analytics tools.",
                    icon: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-black group-hover:text-white transition"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10m-6 4h2m7-13H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"
                            />
                        </svg>
                    ),
                },
                {
                    title: "Hospitality Solutions",
                            description: "Enhance guest experiences with digital tools.",
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 text-black group-hover:text-white transition"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7m2-5H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2z"
                                    />
                                </svg>
                            ),
                },
                {
                    title: "Budget Tracking",
                    description: "Track your event's expenses and revenue with real-time tools.",
                    icon: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-black group-hover:text-white transition"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16s-2 0-3-3 1-5 5-5h4s2 0 3 3-1 5-5 5H8zm-2 5h12a2 2 0 002-2v-4m-2 6h2m-16-2h2m0-4h12m-4 2v4m-4-4v4"
                            />
                        </svg>
                    ),
                },
                {
                    title: "Custom Integrations",
                    description: "Tailored solutions for your unique needs.",
                    icon: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-black group-hover:text-white transition"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16s-2 0-3-3 1-5 5-5h4s2 0 3 3-1 5-5 5H8zm-2 5h12a2 2 0 002-2v-4m-2 6h2m-16-2h2m0-4h12m-4 2v4m-4-4v4"
                            />
                        </svg>
                    ),
                },
            ].map((feature, index) => (
                <motion.div
                    key={index}
                    className="bg-white p-4 sm:p-6 rounded-lg border border-black text-left hover:shadow-lg"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                        ease: "easeOut",
                    }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 10px 20px rgba(250, 177, 22, 0.4)",
                    }}
                    whileTap={{
                        scale: 0.98,
                        boxShadow: "0px 5px 10px rgba(250, 177, 22, 0.3)",
                    }}
                >
                    <div className="mr-4">{feature.icon}</div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#fab116]">
                        {feature.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-700">{feature.description}</p>
                </motion.div>
            ))}
        </div>
    </div>
</section>





            {/* About Section */}
            <section className="py-20 px-6 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#fab116]">
                        Redefining Hospitality with Technology
                    </h2>
                    <p className="mt-4 text-gray-300">
                        Xwola brings seamless event management and personalized guest
                        experiences with innovative solutions. Elevate your events with our
                        tailored software tools.
                    </p>
                    <button className="mt-2 rounded-lg border border-[#fab116] text-white px-4 py-2 text-sm sm:text-lg  hover:bg-white hover:text-black transition">
                        Learn More
                    </button>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center md:justify-end"
                >
                    <img
                        src={image}
                        alt="Hospitality Solutions"
                        className="rounded-lg shadow-lg ml-0 md:ml-32 max-w-full md:max-w-none"
                    />
                </motion.div>
            </section>


            <ModernSection />
            <div className="py-20 px-8 bg-gray-100 ">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-800">Client Success Stories</h2>
                    <p className="text-sm text-gray-800 mt-4 leading-relaxed">"Xwola transformed our events with their innovative solutions."</p>
                </div>

                <div className="grid md:grid-cols-3 gap-20 max-w-8xl max-md:gap-16 max-md:max-w-lg mx-auto mt-20">
                    <div className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative border border-black">
                        <img src="https://readymadeui.com/team-2.webp" className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7" />
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-800 leading-relaxed">"Partnering with Xwola has been a game-changer for our event planning business. Their innovative event management platform streamlined everything from guest registrations to real-time analytics during events. The team’s professionalism and attention to our specific needs were unmatched. Our client satisfaction scores have never been higher!"

                            </p>
                        </div>

                        <div className="flex justify-center space-x-1 mt-6">
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>

                        <div className="mt-6 text-center">
                            <h4 className="text-sm whitespace-nowrap font-bold">John Doe</h4>
                        </div>
                    </div>

                    <div className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative  border border-black">
                        <img src="https://readymadeui.com/team-3.webp" className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7" />
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-800 leading-relaxed">"Xwola delivered a customized solution that transformed how we manage bookings, room allocation, and guest preferences. The software is intuitive, reliable, and perfectly tailored for the hospitality industry. We've seen a 40% improvement in operational efficiency and glowing reviews from our guests. Highly recommend their services!"</p>
                        </div>

                        <div className="flex justify-center space-x-1 mt-6">
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>

                        <div className="mt-6 text-center">
                            <h4 className="text-sm whitespace-nowrap font-bold">Karolina Adair</h4>
                        </div>
                    </div>

                    <div className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative  border border-black">
                        <img src="https://readymadeui.com/team-4.webp" className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7" />
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-800 leading-relaxed">"As a catering service handling multiple events daily, we needed a robust system to manage orders, track inventory, and schedule deliveries. Xwola’s solution exceeded all expectations, giving us real-time tracking and a user-friendly dashboard. Their support team was with us every step of the way. Truly exceptional!"</p>
                        </div>

                        <div className="flex justify-center space-x-1 mt-6">
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>

                        <div className="mt-6 text-center">
                            <h4 className="text-sm whitespace-nowrap font-bold">Simon Konecki</h4>
                        </div>
                    </div>
                </div>
            </div>





            {/* Contact Us */}
            <section id="contact" className="py-16 bg-black text-white text-center px-4 sm:px-8">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Let’s Create Memorable Events Together
                </motion.h2>
                <p className="mt-4 text-sm sm:text-lg max-w-md sm:max-w-lg mx-auto">
                    Reach out to us for tailored solutions in events and hospitality.
                </p>
                <Link to="/contactus">
                    <button className="mt-2 rounded-lg border border-[#fab116] text-white px-4 py-2 text-sm sm:text-lg  hover:bg-white hover:text-black transition" >
                        Get in Touch
                    </button>
                </Link>
            </section>

        </div>
    );
};

export default EventsAndHospitalityPage;
