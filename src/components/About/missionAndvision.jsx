import React from "react";
import { motion } from "framer-motion";
import ourmission from "../../assets/About/ourmission 1.jpg";
import ourvision from "../../assets/About/ourvision.jpg";
 
// Reusable Mission and Vision Section Component
const MissionVisionSection = ({ title, description, imageSrc, direction }) => (
    <div
        className={`flex flex-col ${direction === "right" ? "md:order-last" : ""
            } items-center md:items-start space-y-6 text-center md:text-left`}
    >
        <motion.div className="p-6 border border-gold rounded-lg transition-all duration-300 hover:bg-black group">
            <h3 className="text-2xl font-handwritting mb-4 group-hover:text-white">{title}</h3>
            <p className="text-lg text-gray-700 font-handwritting group-hover:text-white">{description}</p>
        </motion.div>
        <motion.img
            src={imageSrc}
            alt={`${title} Image`}
            className="w-full h-full object-cover rounded-lg border border-gray-300"
        />
    </div>
);
 
const MissionAndVision = () => {
    return (
        <div className="py-20">
            <h2 className="text-3xl xl:text-4xl font-handwritting text-center mb-10">
                Our Mission and Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto px-6 gap-6">
                <MissionVisionSection
                    title="Our Mission"
                    description="Our mission is to empower businesses with robust and scalable custom technology solutions tailored to their unique needs."
                    imageSrc={ourmission}
                    direction="left"
                />
                <MissionVisionSection
                    title="Our Vision"
                    description="Our vision is fueled by a commitment to continuous innovation. We combine cutting-edge software development with strategic consulting."
                    imageSrc={ourvision}
                    direction="right"
                />
            </div>
        </div>
    );
};
 
 
export default MissionAndVision;