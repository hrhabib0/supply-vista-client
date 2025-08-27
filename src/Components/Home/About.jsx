import React from 'react';
import freeDeliveryIcon from '../../assets/icons/free-delivery.png';
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto md:flex gap-10 py-8 md:py-12 px-4">
      {/* Text Section */}
      <motion.div
        className="flex-1"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl text-blue-500 font-bold mb-6">
          About Us
        </h1>
        <p className="px-0 md:px-12 text-justify leading-relaxed text-gray-700 border-l-0 md:border-l-4 border-blue-500 pl-0 md:pl-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sunt
          consequuntur magnam cum soluta qui nemo delectus, labore tempora ipsam,
          libero eveniet nam fugit quasi nulla vitae laudantium? Ipsam, sequi
          commodi? Itaque vitae quod mollitia rerum aliquam eligendi eveniet
          accusamus eum dolores delectus! Minima, libero. Illum molestias
          officiis dolores minus ratione neque distinctio architecto cum quibusdam
          non excepturi minima rem, esse fugiat corrupti temporibus. Illum unde
          dicta molestias ex obcaecati laborum cum? Iure facilis facere maiores
          libero quae id sapiente quidem aut dolores, blanditiis quisquam labore
          ullam explicabo nobis cupiditate! Maiores, quas veritatis! Possimus,
          odio consequuntur blanditiis incidunt eum aperiam!
        </p>
      </motion.div>

      {/* Icon / Info Section */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-1 grid gap-6 grid-cols-1 md:grid-cols-2 mt-8 md:mt-0 w-3/4 md:w-full mx-auto"
      >
        {[1, 2, 3, 4].map((item, idx) => (
          <div
            key={idx}
            className="border md:border-none rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition"
          >
            <img src={freeDeliveryIcon} alt="icon" className="w-16 h-16 mb-3" />
            <h2 className="text-xl md:text-2xl text-blue-500 font-semibold text-center">
              Free Delivery
            </h2>
            <p className="text-center text-gray-600 text-sm md:text-base">
              For all orders over 2000 BDT
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
