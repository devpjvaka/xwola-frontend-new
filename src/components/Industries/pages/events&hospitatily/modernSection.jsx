import { motion } from "framer-motion";

const ModernSection = () => {
    return (
        <section className=" py-20 px-8 bg-gradient-to-b from-gray-50 to-white text-black">
            {/* Section Heading */}
            <motion.h2
                className="text-5xl font-bold text-center text-[#fab116] mb-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                A Journey of Excellence
            </motion.h2>

            {/* Timeline Container */}
            <div className=" flex flex-col items-start mx-auto max-w-4xl">
                {[
                    {
                        
                        title: "Embarking on our journey with innovation and dedication.",
                        year: "2021",
                        isComplete: true,
                    },
                    {
                       
                        title: "Expanding horizons, offering services to global clients.",
                        year: "2022",
                        isComplete: true,
                    },
                    {
                        
                        title: "Introducing cutting-edge software solutions.",
                        year: "2023",
                        isComplete: false,
                    },
                    {
                       
                        title: "Redefining industry standards and winning prestigious awards.",
                        year: "2024",
                        isComplete: false,
                    },
                ].map((item, index) => (
                    <div className="flex items-start w-full mb-12" key={index}>
                        {/* Left: Step Info */}
                        <div className="mr-6">
                            <p className="text-lg font-bold text-gray-400">{item.step}</p>
                            <h6 className="text-lg font-bold text-gray-800">{item.year}</h6>
                        </div>

                        {/* Center: Stepper */}
                        <div className="flex flex-col items-center ml-[-10px]">
                            <div
                                className={`w-7 h-7 shrink-0 mx-[-1px] border-2 ${item.isComplete
                                        ? "border-black"
                                        : "border-black"
                                    } flex items-center justify-center rounded-full`}
                            >
                                {item.isComplete ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 fill-[#fab116]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                                    </svg>
                                ) : (
                                    <span
                                        className={`w-3 h-3 ${index === 2
                                                ? "bg-[#fab116]"
                                                : "text-gray-400"
                                            } rounded-full`}
                                    ></span>
                                )}
                            </div>
                            {index < 3 && (
                                <div
                                    className={`w-0.5 h-16 rounded-md ${item.isComplete
                                            ? "bg-black"
                                            : "bg-black"
                                        } my-1`}
                                ></div>
                            )}
                        </div>

                        {/* Right: Step Details */}
                        <div className="ml-6">
                            <h6 className="text-xl font-bold text-gray-800">
                                {item.title}
                            </h6>
                        </div>
                    </div>
                ))}
            </div>
        </section>




    );
};

export default ModernSection;
