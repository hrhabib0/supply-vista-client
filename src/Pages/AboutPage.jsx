import React from "react";
import About from "../Components/Home/About";


const AboutPage = () => {
  return (
    <div className="pt-12 md:pt-16"> {/* pt-20 so content does not hide behind sticky navbar */}
      <About />
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to provide the best service for our customers, ensuring
          fast delivery, high-quality products, and excellent support. We strive
          to make shopping simple, reliable, and enjoyable.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
