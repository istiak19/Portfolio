import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
};

const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
};

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact | ISTIAK AHAMED</title>
            </Helmet>
            <motion.div className="text-gray-300 py-8" initial="hidden" animate="visible" variants={fadeIn}>
                <div className="text-center my-5">
                    <h2 className="text-4xl font-extrabold text-blue-500 mb-4">Contact Information</h2>
                    <p className="text-lg text-gray-400 mb-12">
                        Feel free to reach out to me through the following methods:
                    </p>
                </div>
                <div className="hero min-h-full">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <div className="space-y-8">
                                {[{ icon: FaEnvelope, title: "Email", info: "istiakanik79@gmail.com", link: "mailto:istiakanik79@gmail.com" },
                                { icon: FaPhone, title: "Phone", info: "+8801794270067", link: "tel:+8801794270067" },
                                { icon: FaMapMarkerAlt, title: "Location", info: "Dhaka, Bangladesh", link: "https://www.google.com/maps?q=Dhaka,+Bangladesh" }].map(({ icon: Icon, title, info, link }, index) => (
                                    <motion.div key={index} className="bg-[#252C48] p-6 rounded-lg shadow-lg w-80 mx-auto hover:bg-[#1E2636] transition-colors duration-300" variants={slideUp}>
                                        <h3 className="text-xl font-bold flex items-center text-gray-300 mb-2">
                                            <Icon className="mr-2 text-blue-500" />
                                            {title}
                                        </h3>
                                        <p className="mt-2 text-gray-300">
                                            <a href={link} className="text-blue-400 hover:text-blue-300 transition">{info}</a>
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        {/* Contact Form */}
                        <motion.div className="card w-full max-w-md shrink-0 shadow-2xl" variants={slideUp}>
                            <section className="flex justify-center items-center py-5">
                                <div className="rounded-lg p-8 w-full max-w-lg">
                                    <form>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div>
                                                <label className="block text-gray-300 font-medium mb-2" htmlFor="firstName">
                                                    First Name<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    placeholder="First Name"
                                                    className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#252C48] text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-300 font-medium mb-2" htmlFor="lastName">
                                                    Last Name<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    placeholder="Last Name"
                                                    className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#252C48] text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
                                                Email<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="Email"
                                                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#252C48] text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-gray-300 font-medium mb-2" htmlFor="phone">
                                                Phone number<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="phone"
                                                placeholder="Phone number"
                                                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#252C48] text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            />
                                        </div>
                                        <div className="mb-8">
                                            <label className="block text-gray-300 font-medium mb-2" htmlFor="message">
                                                Message<span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                rows="4"
                                                placeholder="Leave us a message"
                                                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#252C48] text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-500 text-gray-200 font-medium py-2 rounded-lg hover:bg-blue-600 transition"
                                        >
                                            Send Message →
                                        </button>
                                    </form>
                                </div>
                            </section>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Contact;