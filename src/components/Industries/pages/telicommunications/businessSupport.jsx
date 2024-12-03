import React from 'react';

const BusinessSupportSystems = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Title */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">
                        Business Support Systems (BSS)
                    </h2>
                    <p className="text-lg text-gray-700">
                        Business Support Systems streamline telco operations by supporting customer interactions, billing, and service management. 
                        Our solutions ensure seamless customer experiences and efficient business processes.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* CRM Solutions */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="bg-white text-white p-4 rounded-full border border-black">
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
                                        d="M9 17v4H5a2 2 0 01-2-2v-4m0-6V7a2 2 0 012-2h4m10 2v4m-4 10h4a2 2 0 002-2v-4M7 7h10m0 0v10m0-10H7m6 4h2m-2-4h.01"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">
                                CRM Solutions
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Our Customer Relationship Management solutions help telcos:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2">
                                <li>Improve customer retention</li>
                                <li>Manage customer interactions seamlessly</li>
                                <li>Enhance customer insights</li>
                            </ul>
                        </div>
                    </div>

                    {/* Billing Systems */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="bg-white text-white p-4 rounded-full border border-black">
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
                                        d="M9 17v-4H5a2 2 0 01-2-2V7a2 2 0 012-2h4M15 5h4a2 2 0 012 2v4m-6 8v4m-6 0h6a2 2 0 002-2v-4M5 17H3a2 2 0 01-2-2v-4m18 8h-4"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">
                                Billing Systems
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Our billing platforms are designed to handle:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2">
                                <li>Accurate billing for diverse services</li>
                                <li>Real-time revenue management</li>
                                <li>Flexible subscription models</li>
                            </ul>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default BusinessSupportSystems;
