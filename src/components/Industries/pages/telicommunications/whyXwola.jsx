'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adds delay between child animations
    },
  },
};

const WhyChooseXwola = () => {
  return (
    
    <section id="features" className="py-12 sm:py-16 bg-white">
    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            Why Choose Xwola for Telecommunication?
        </motion.h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8">
            {[
                {
                    title: "Advanced Network Solutions",
                    description: "Leverage cutting-edge technologies to deliver seamless connectivity, optimized bandwidth, and reduced latency for businesses and consumers.",
                },
                {
                    title: "24/7 Customer Support",
                    description: "Our dedicated support team ensures uninterrupted assistance around the clock, resolving issues swiftly and efficiently.",
                },
                {
                    title: "Scalable Infrastructure",
                    description: "Build flexible and future-ready systems capable of adapting to growing demands in the rapidly evolving telecom landscape.",
                },
                {
                    title: "Enhanced Security Protocols",
                    description: "Protect your network and data with state-of-the-art encryption, firewalls, and proactive threat monitoring.",
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
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#fab116]">
                        {feature.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-700">{feature.description}</p>
                </motion.div>
            ))}
        </div>
    </div>
</section>

  );
};

export default WhyChooseXwola;
