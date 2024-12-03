import React from 'react';
import { motion } from 'framer-motion';

const OperationsSupportSystems = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Title */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">
                        Operations Support Systems (OSS)
                    </h2>
                    <p className="text-lg text-gray-700">
                        Telecommunications software is used to organize and manage all aspects of electronic data 
                        (text, voice, video, etc.). Our solutions ensure that networks run like clockwork.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* VoIP-based Services */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="bg-white text-black p-4 rounded-full border border-black">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m2 0a2 2 0 100-4H7a2 2 0 100 4m0 0v4a2 2 0 002 2h6a2 2 0 002-2v-4"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">
                                VoIP-based Services
                            </h3>
                            <p className="text-gray-700 mt-2">
                                With extensive experience in delivering VoIP solutions, we create:
                            </p>
                            <ul className="list-disc list-inside text-gray-1700 mt-2">
                                <li>Server-side applications for softswitches</li>
                                <li>Customized SIP clients</li>
                            </ul>
                        </div>
                    </div>

                    {/* Monitoring */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="bg-white text-black p-4 rounded-full border border-black">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11 17a4 4 0 10-8 0M7 17V9m4-4v8m8 4h-2v-4h2a2 2 0 100-4h-2v-4h2a2 2 0 100-4h-6v12h6z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">
                                Monitoring
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Based on advanced platforms, our solutions allow for effective operations management:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2">
                                <li>Network resources inventory</li>
                                <li>Performance management</li>
                                <li>Multiple network integrations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default OperationsSupportSystems;
