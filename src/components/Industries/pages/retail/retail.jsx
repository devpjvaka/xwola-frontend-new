import React from "react";
import { motion } from "framer-motion";
import heroimg from '../../../../assets/Industries/retail-hero.webp'
import image1 from '../../../../assets/Industries/transfrom-ideas.webp'
import { Link } from "react-router-dom";
import Features from "./features";
import Review from "./review";


const Retail = () => {
    return (

        <div className="bg-black text-white">

            {/* Hero Section */}
            <section
                id="hero"
                className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 bg-black bg-cover bg-center text-center"
                style={{
                    backgroundImage: `url(${heroimg})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content Container */}
                <div className="relative z-10 max-w-[90%] sm:max-w-3xl mx-auto text-white">
                    {/* Animated Heading */}
                    <motion.h1
                        className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Empowering Retail Innovation
                    </motion.h1>

                    {/* Subheading */}
                    <p className="mt-4 text-sm sm:text-lg text-white">
                        Seamless solutions tailored for modern retail businesses.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-8">
                        {/* <button
                            type="button"
                            className="rounded bg-indigo-50 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                        >
                            Contact
                        </button> */}

                        <Link to="/contactus">
                            <button
                                type="button"
                                className=" mt-2 rounded-lg border border-[#fab116] text-white px-4 py-2 text-sm sm:text-lg  hover:bg-white hover:text-black transition"
                            >
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Features />









            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-black">
                            Transform Ideas into Reality
                        </h2>
                        <p className="mt-4 text-gray-900">
                            We blend creativity and technology to bring your vision to life. From innovative solutions to cutting-edge services, we're here to make a difference.
                        </p>
                        <Link to="/ideas">
                            <button
                                className="mt-6 bg-white border-2 border-[#fab116] text-black hover:bg-[#fab116] text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                            >
                                Learn More
                            </button>
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="mt-8 md:mt-0 md:w-1/2">
                        <img
                            src={image1}
                            alt="Technology Illustration"
                            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </section>


            <Review />



           



            {/* Our Values Section */}
            {/* <section id="values" className="py-16 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-center text-[#fab116]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Core Values
                    </motion.h2>
                    <p className="mt-4 text-lg text-center text-black">
                        At Xwola, we uphold the principles that define our vision for retail excellence.
                    </p>

                    {/* Values List */}
            {/* <div className="mt-12">
                        {[
                            {
                                title: "Customer First",
                                description: "We prioritize your needs to deliver unparalleled retail solutions.",
                            },
                            {
                                title: "Innovation",
                                description: "Embracing cutting-edge technology for your business growth.",
                            },
                            {
                                title: "Integrity",
                                description: "Building trust through honest and transparent practices.",
                            },
                            {
                                title: "Excellence",
                                description: "Striving for the highest quality in everything we offer.",
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-black p-6 rounded-lg border border-[#fab116] text-left mb-8 hover:shadow-lg"
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
                            >
                                <h3 className="text-xl font-bold text-[#fab116]">{value.title}</h3>
                                <p className="mt-2 text-white">{value.description}</p>
                            </motion.div>
                        ))}
                    </div> */}
            {/* </div>
            </section>  */}
            {/* Visionary Future Section */}
            {/* <section
                id="visionary-future"
                className="relative py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden"
            >
                {/* Subtle Animated Gradient */}
            {/* <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#fab116] via-transparent to-[#fab116] opacity-10 blur-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div> */}

            {/* <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <motion.h2
                        className="text-5xl font-extrabold text-[#fab116] leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Pioneering the Future of Retail
                    </motion.h2>

                    <motion.p
                        className="mt-6 text-lg text-gray-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Step into a world where retail thrives on innovation, technology, and customer-centric excellence. Together, we craft experiences that inspire.
                    </motion.p>

                    {/* Animated Button */}
            {/* <motion.div
                        className="mt-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button className="px-6 py-3 font-bold text-black bg-[#fab116] rounded-lg hover:bg-white hover:text-black transition-all">
                            Discover Our Vision
                        </button>
                    </motion.div> */}
            {/* </div> */}
            {/* </section>   */}


            {/* Call-to-Action Section */}
            <section id="contact" className="py-16 bg-black text-white text-center">
                <motion.h2
                    className="text-4xl font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Ready to Transform Your Retail Business?
                </motion.h2>
                <p className="mt-4 text-lg">
                    Let’s work together to create impactful solutions.
                </p>
                <Link to="/contactus">
                    <button className="mt-2 rounded-lg border border-[#fab116] text-white px-4 py-2 text-sm sm:text-lg  hover:bg-white hover:text-black transition"
                    >
                        Get in Touch
                    </button>
                </Link>
            </section>



        </div>
    );
};

export default Retail;
