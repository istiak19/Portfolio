import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

const Contact = () => {
    return (
        <div>
            <div className="text-center my-5">
                <h2 className="text-4xl font-bold text-blue-600 mb-4">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-12">
                    Feel free to reach out to me through the following methods:
                </p>
            </div>
            <div className="hero min-h-full">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="space-y-5">
                            {/* Email */}
                            <div className="bg-white p-6 rounded-lg shadow-lg w-72">
                                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                                    <FaEnvelope className="mr-2 text-blue-600" />
                                    Email
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    <a href="mailto:istiakanik79@gmail.com" className="text-blue-600">
                                    istiakanik79@gmail.com
                                    </a>
                                </p>
                            </div>
                            {/* Phone */}
                            <div className="bg-white p-6 rounded-lg shadow-lg w-72">
                                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                                    <FaPhone className="mr-2 text-blue-600" />
                                    Phone
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    <a href="tel:+1234567890" className="text-blue-600">
                                        +8801794270067
                                    </a>
                                </p>
                            </div>
                            {/* Location */}
                            <div className="bg-white p-6 rounded-lg shadow-lg w-72">
                                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-blue-600" />
                                    Location
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    <a
                                        href="https://www.google.com/maps?q=Your+Location+Address"
                                        className="text-blue-600"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Dhaka, Bangladesh
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                        <section className="flex justify-center items-center py-12">
                            <div className="rounded-lg p-8 w-full max-w-lg">
                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">
                                                First Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                placeholder="First Name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">
                                                Last Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                placeholder="Last Name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                            Email<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                                            Phone number<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="phone"
                                            placeholder="Phone number"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                                            Message<span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            placeholder="Leave us a message"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
                                    >
                                        Send Message →
                                    </button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;