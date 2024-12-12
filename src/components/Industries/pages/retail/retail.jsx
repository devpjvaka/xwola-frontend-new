import React from "react";
import { motion } from "framer-motion";
import heroimg from '../../../../assets/Industries/retail-hero.webp'
import image1 from '../../../../assets/Industries/transfrom-ideas.webp'
import { Link } from "react-router-dom";


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





            {/* Features Section */}
            <section id="features" className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Why Choose Xwola for Retail?
                    </motion.h2>
                    <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8">
                        {[
                            {
                                title: "Real-time Inventory Management",
                                description: "Stay ahead with accurate stock insights.",
                            },
                            {
                                title: "Customer Insights Analytics",
                                description: "Understand your customers like never before.",
                            },
                            {
                                title: "Secure Payment Gateways",
                                description: "Fast and secure transactions.",
                            },
                            {
                                title: "Custom Retail Software Solutions",
                                description: "Tailored to your unique needs.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-4 sm:p-6 rounded-lg border border-black text-left hover:shadow-lg focus:shadow-lg"
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
                                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#fab116]">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-xs sm:text-sm text-gray-700">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>





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






            <div className="py-24 px-4 sm:px-8 md:px-20 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-gray-900 text-3xl font-extrabold">What our happy client say</h2>
                        <p className="text-sm text-gray-800 mt-6 leading-relaxed">
                            See how Xwola’s solutions have empowered businesses across various industries to achieve exceptional results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mt-16">

                        <div className="w-full max-w-[350px] mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] p-4 sm:p-6 lg:p-8 rounded-md bg-white relative border-2 border-black">
                            <div className="bg-black flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full absolute -top-5 -right-5 border-2 border-[#fab116]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-[#fab116]" viewBox="0 0 475.082 475.081">
                                    <path d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z" data-original="#000000"></path>
                                </svg>
                            </div>
                            <div className="flex items-center flex-wrap sm:flex-nowrap">
                                <img
                                    src="https://readymadeui.com/team-1.webp"
                                    className=" w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-xl border-2 border-black mx-auto sm:mx-0"
                                    alt="John Doe"
                                />
                                <div className="ml-0 mt-4 sm:ml-4 sm:mt-0 text-center sm:text-left">
                                    <h4 className="text-sm md:text-base font-extrabold text-black">
                                        John Doe
                                    </h4>
                                    <div className="flex justify-center sm:justify-start space-x-1 mt-2">
                                        <svg className="w-4 md:w-5 fill-gold" viewBox="0 0 14 13">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"></path>
                                        </svg>
                                        <svg className="w-4 md:w-5 fill-gold" viewBox="0 0 14 13">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"></path>
                                        </svg>
                                        <svg className="w-4 md:w-5 fill-gold" viewBox="0 0 14 13">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-sm leading-relaxed text-gray-900">Xwola’s AI solutions transformed our approach to customer engagement and increased sales by 20%.</p>
                            </div>
                        </div>
                        <div className="w-full max-w-[350px] mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] p-4 sm:p-6 lg:p-8 rounded-md bg-white relative border-2 border-black">
                            <div className="bg-black flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full absolute -top-5 -right-5 border-2 border-[#fab116]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-[#fab116]" viewBox="0 0 475.082 475.081">
                                    <path d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z" data-original="#000000"></path>
                                </svg>
                            </div>
                            <div className="flex items-center">
                                <img src="https://readymadeui.com/team-2.webp" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-xl border-2 border-black" />
                                <div className="ml-4">
                                    <h4 className="text-sm font-extrabold text-black">Mark Adair</h4>
                                    <div className="flex space-x-1 mt-2">
                                        <svg className="w-4 fill-gold" viewBox="0 0 14 13">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"></path>
                                        </svg>
                                        <svg className="w-4 fill-gold" viewBox="0 0 14 13">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"></path>
                                        </svg>
                                        <svg className="w-4 fill-gold" viewBox="0 0 14 13">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-sm leading-relaxed text-gray-900">Xwola’s AI solutions transformed our approach to customer engagement and increased sales by 20%.</p>
                            </div>
                        </div>
                        <div className="w-full max-w-[350px] mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] p-4 sm:p-6 lg:p-8 rounded-md bg-white relative border-2 border-black">
                            <div className="bg-black flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full absolute -top-5 -right-5 border-2 border-[#fab116]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-[#fab116]" viewBox="0 0 475.082 475.081">
                                    <path d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z" data-original="#000000"></path>
                                </svg>
                            </div>
                            <div className="flex items-center">
                                <img src="https://readymadeui.com/team-3.webp" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-xl border-2 border-black" />
                                <div className="ml-4">
                                    <h4 className="text-sm font-extrabold text-black">Simo Konecki</h4>
                                    <div className="flex space-x-1 mt-2">
                                        <svg className="w-4 fill-gold" viewBox="0 0 14 13">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"></path>
                                        </svg>
                                        <svg className="w-4 fill-gold" viewBox="0 0 14 13">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"></path>
                                        </svg>
                                        <svg className="w-4 fill-gold" viewBox="0 0 14 13">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-sm leading-relaxed text-gray-900">Xwola’s AI solutions transformed our approach to customer engagement and increased sales by 20%.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



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
