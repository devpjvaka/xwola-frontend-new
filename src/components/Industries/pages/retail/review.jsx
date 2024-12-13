import React from "react";
import { motion } from "framer-motion";
const Review = () => {
    return (
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
       
    );
};

export default Review;
