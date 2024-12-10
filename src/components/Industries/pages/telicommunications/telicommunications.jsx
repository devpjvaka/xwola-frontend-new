import React from 'react';
import { motion } from 'framer-motion';
import heroimg from '../../../../assets/Industries/telecommunication.webp';
import OperationsSupportSystems from './operatingSupport';
import BusinessSupportSystems from './businessSupport';
import WhyChooseXwola from './whyXwola';
import { Link } from "react-router-dom";
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
};

const Telicommunications = () => {
    return (
        <div className="bg-black text-white">
            {/* Hero Section */}
            <section
                className="h-screen flex flex-col items-center justify-center relative text-center py-8 sm:py-16 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroimg})`,
                }}
            >
                {/* Transparent Layer */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-60"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))',
                    }}
                ></div>

                {/* Content */}
                <motion.div
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    className="relative z-10 p-4 sm:p-8 rounded-lg max-w-[90%] sm:max-w-[60%]"
                >
                    <h1 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-white mb-4">
                        Revolutionizing Telecommunications
                    </h1>
                    <p className="text-sm sm:text-xl mb-6">
                        Xwola brings seamless connectivity, cutting-edge solutions, and unparalleled customer experiences to the telecommunications industry.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-8">
                        <button
                            type="button"
                            className="rounded-lg bg-white border-2 border-[#fab116] text-black px-4 py-2 text-sm sm:text-lg shadow-sm hover:bg-[#fab116] transition"
                        >
                            Explore Solutions
                        </button>
                        <Link to="/contactus">
                        <button
                            type="button"
                            className="border border-[#fab116] text-white px-4 py-2 text-sm sm:text-lg rounded-lg hover:bg-white hover:text-black transition"
                        >
                            Get in Touch
                        </button>
                        </Link>
                    </div>
                </motion.div>
            </section>




            <WhyChooseXwola />
            <OperationsSupportSystems />
            <BusinessSupportSystems />


            <div className=" py-20 px-10 bg-black mt-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
                        <div className="col-span-2">
                            <h2 className="text-white text-3xl font-extrabold"> Our Client Success Stories</h2>
                            <p className="text-sm text-gray-300 mt-6 leading-relaxed">Discover how Xwola has empowered clients across industries with innovative connectivity solutions.</p>
                        </div>


                    </div>

                    <div className="grid lg:grid-cols-3 lg:gap-20 gap-6 mt-16 max-w-8xl">
                        <div className="max-w-[500px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
                            <img src="https://readymadeui.com/team-2.webp" className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-[#fab116]" />

                            <div>
                                <h4 className="text-gray-800 text-base font-bold">John Doe</h4>
                                <p className="mt-1 text-xs text-gray-500">Founder of Rubik</p>
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-800 text-sm leading-relaxed"> Xwola enabled us to connect our city infrastructure seamlessly, enhancing sustainability and efficiency.
                                </p>
                            </div>

                            <div className="flex space-x-1 mt-4">
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
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
                        </div>

                        <div className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
                            <img src="https://readymadeui.com/team-5.webp" className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-[#fab116]" />

                            <div>
                                <h4 className="text-gray-800 text-base font-bold">Mark Adair</h4>
                                <p className="mt-1 text-xs text-gray-500">Founder of Alpha</p>
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-800 text-sm leading-relaxed">With Xwola’s AI solutions, our network efficiency improved dramatically, cutting costs by 30%.</p>
                            </div>

                            <div className="flex space-x-1 mt-4">
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
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
                        </div>

                        <div className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
                            <img src="https://readymadeui.com/team-4.webp" className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-[#fab116]" />

                            <div>
                                <h4 className="text-gray-800 text-base font-bold">Simon Konecki</h4>
                                <p className="mt-1 text-xs text-gray-500">Founder of Labar</p>
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-800 text-sm leading-relaxed">Xwola made global connectivity simple and seamless, ensuring uninterrupted service for our customers.</p>
                            </div>

                            <div className="flex space-x-1 mt-4">
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gold" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Contact Us Section */}
            <section id="contact" className="py-12 sm:py-16 bg-white text-black text-center">
                <motion.h2
                    className="text-2xl sm:text-4xl font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Revolutionize Your Telecommunication Business
                </motion.h2>
                <p className="mt-4 text-sm sm:text-lg px-4">
                    Let’s connect and innovate together in the world of telecom.
                </p>
                <Link to="/contactus">
                    <button
                        type="button"
                        className="mt-2 rounded-lg border-2 border-[#fab116] text-black px-4 py-2 text-sm sm:text-lg  hover:bg-black hover:text-white transition"
                    >
                        Get in Touch
                    </button>
                </Link>
            </section>



            {/* Technologies Section */}
            {/* <section className="py-16 px-8 bg-gray-800 relative text-white">
                <motion.div
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-[#fab116] mb-4">Explore Our Cutting-Edge Technologies</h2>
                    <p className="text-lg text-gray-400">
                        Discover the tools and technologies driving the future of telecommunications.
                    </p>
                </motion.div>

                {/* Interactive Carousel */}
            {/* <div className="relative flex gap-6 overflow-x-scroll hide-scrollbar py-8">
                    {[
                        {
                            title: "5G Connectivity",
                            description: "Experience lightning-fast internet speeds with next-gen 5G.",
                            imgSrc: "https://via.placeholder.com/300x200?text=5G+Connectivity",
                        },
                        {
                            title: "IoT Integration",
                            description: "Seamless IoT solutions for smart devices and applications.",
                            imgSrc: "https://via.placeholder.com/300x200?text=IoT+Integration",
                        },
                        {
                            title: "AI-Powered Analytics",
                            description: "Transforming data insights with cutting-edge AI tools.",
                            imgSrc: "https://via.placeholder.com/300x200?text=AI+Analytics",
                        },
                        {
                            title: "Cloud Computing",
                            description: "Scalable and secure cloud solutions for businesses.",
                            imgSrc: "https://via.placeholder.com/300x200?text=Cloud+Computing",
                        },
                    ].map((tech, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[300px] bg-black rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                            variants={fadeIn}
                            initial="initial"
                            animate="animate"
                        >
                            <img
                                src={tech.imgSrc}
                                alt={tech.title}
                                className="rounded-t-lg object-cover h-40 w-full"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-[#fab116] mb-2">
                                    {tech.title}
                                </h3>
                                <p className="text-gray-400">{tech.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div> */}
            {/* </section>  */}



        </div>
    );
};

export default Telicommunications;
