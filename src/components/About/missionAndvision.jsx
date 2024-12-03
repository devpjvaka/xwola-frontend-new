import React from "react";
import { motion } from "framer-motion";
import ourmission from "../../assets/About/ourmission 1.jpg";
import ourvision from "../../assets/About/vision.png";
 
// Reusable Mission and Vision Section Component
const MissionVisionSection = ({ title, description, imageSrc, direction }) => (
    <motion.div
        className={`flex flex-col ${direction === "right" ? "md:order-last" : ""}
            items-center md:items-start space-y-6 text-center md:text-left p-6 border border-gold rounded-lg transition-all duration-300 hover:bg-black group`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <h3 className="text-2xl  mb-4 group-hover:text-gold">{title}</h3>
        <p className="text-lg text-gray-700  group-hover:text-white ">{description}</p>
        
        {/* Image within the same container */}
        <motion.img
            src={imageSrc}
            alt={`${title} Image`}
            className="w-full h-full object-cover rounded-lg border border-gray-300 mt-4 transition-transform duration-300 group-hover:scale-105"
        />
    </motion.div>
);

const MissionAndVision = () => {
    return (
        <div className="py-20">
            <h2 className="text-3xl xl:text-4xl  text-center mb-10">
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