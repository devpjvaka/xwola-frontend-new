import React, { useState } from "react";
import { motion } from "framer-motion";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Xwola offer?",
      answer: "We specialize in custom software, mobile apps, and AI solutions.",
    },
    {
      question: "How long does the process take?",
      answer: "It depends on your project size. We’ll provide a timeline during the consultation.",
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide ongoing support and maintenance for all projects.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gold">FAQs</h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-900 rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-xl font-bold text-gold flex justify-between items-center">
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </h3>
            {openIndex === index && (
              <motion.p
                className="mt-2 text-gray-300"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
