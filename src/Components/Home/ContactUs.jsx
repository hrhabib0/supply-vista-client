import React from "react";
import Swal from "sweetalert2";
import AuthContext from "../../contexts/AuthContext/AuthContext";

const ContactUs = () => {
    const handleSendMessage = (e) => {
        e.preventDefault()
        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting us. We’ll get back to you soon.",
            confirmButtonColor: "#2563eb",
        });
        
    }
    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#2563EB]">
                    Contact Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <form className="bg-white shadow-lg rounded-xl p-6 space-y-5">
                        <div>
                            <label className="block font-semibold mb-1">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Message</label>
                            <textarea
                                placeholder="Write your message..."
                                className="textarea textarea-bordered w-full"
                                rows="4"
                                name="message"
                                required
                            ></textarea>
                        </div>

                        <button onClick={handleSendMessage} type="submit" className="btn bg-[#2563EB] text-white w-full">
                            Send Message
                        </button>
                    </form>

                    {/* Contact Information */}
                    <div className="bg-white shadow-lg rounded-xl p-6 space-y-6 flex flex-col justify-center">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Our Office</h3>
                            <p className="text-gray-600">
                                123 Business Street, Dhaka, Bangladesh
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Call Us</h3>
                            <p className="text-gray-600">+880 1234-567890</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-600">support@supplyvista.com</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                            <p className="text-gray-600">Sat - Thu: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
