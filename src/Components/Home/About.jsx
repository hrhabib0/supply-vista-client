import React from 'react';
import freeDeliveryIcon from '../../assets/icons/free-delivery.png'
import { motion } from "motion/react"

const About = () => {
    return (
        <div className='max-w-7xl mx-auto md:flex gap-10 py-10 px-4'>
            <motion.div 
            className='flex-1'
            initial={{scale:0}}
            whileInView = {{scale:1}}
            transition={{duration:1.5}}
            viewport={{once: true, amount:0.2}}
            >
                <h1 className='text-4xl text-blue-500 font-bold pb-4'>About Us</h1>
                <p className='px-0 md:px-20 text-justify border-l-0 md:border-l-2 border-blue-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sunt consequuntur magnam cum soluta qui nemo delectus, labore tempora ipsam, libero eveniet nam fugit quasi nulla vitae laudantium? Ipsam, sequi commodi? Itaque vitae quod mollitia rerum aliquam eligendi eveniet accusamus eum dolores delectus! Minima, libero. Illum molestias officiis dolores minus ratione neque distinctio architecto cum quibusdam non excepturi minima rem, esse fugiat corrupti temporibus. Illum unde dicta molestias ex obcaecati laborum cum? Iure facilis facere maiores libero quae id sapiente quidem aut dolores, blanditiis quisquam labore ullam explicabo nobis cupiditate! Maiores, quas veritatis! Possimus, odio consequuntur blanditiis incidunt eum aperiam!</p>
            </motion.div>
            <motion.div 
            initial={{scale:0}}
            whileInView = {{scale:1}}
            transition={{duration:1.5, delay:0.8}}
            viewport={{once: true, amount:0.2}}
            className='flex-1 grid gap-4 grid-cols-1 md:grid-cols-2 mt-5 md:mt-0 w-1/2 md:w-full mx-auto'
            >
                <div className='border md:border-none rounded-full p-7 md:p-0 flex flex-col items-center justify-center'>
                    <img src={freeDeliveryIcon} alt="" />
                    <h1 className='text-2xl text-blue-500 font-thin text-center'>Free Deliver</h1>
                    <p className='text-center'>For all order over 2000 BDT</p>
                </div>
                <div className='border md:border-none rounded-full p-7 md:p-0 flex flex-col items-center justify-center'>
                    <img src={freeDeliveryIcon} alt="" />
                    <h1 className='text-2xl text-blue-500 font-thin text-center'>Free Deliver</h1>
                    <p className='text-center'>For all order over 2000 BDT</p>
                </div>
                <div className='border md:border-none rounded-full p-7 md:p-0 flex flex-col items-center justify-center'>
                    <img src={freeDeliveryIcon} alt="" />
                    <h1 className='text-2xl text-blue-500 font-thin text-center'>Free Deliver</h1>
                    <p className='text-center'>For all order over 2000 BDT</p>
                </div>
                <div className='border md:border-none rounded-full p-7 md:p-0 flex flex-col items-center justify-center'>
                    <img src={freeDeliveryIcon} alt="" />
                    <h1 className='text-2xl text-blue-500 font-thin text-center'>Free Deliver</h1>
                    <p className='text-center'>For all order over 2000 BDT</p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;