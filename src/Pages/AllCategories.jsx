import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { motion } from "motion/react"

const AllCategories = () => {
    const categories = useLoaderData()
    return (
        <div className="bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto py-10 px-4 lg:px-0">
                <h1 className="py-5 text-center font-bold text-4xl">Discover All Categories</h1>
                <div className='grid gap-5 grid-cols-2 md:grid-cols-4'>
                    {
                        categories.map(
                            category =>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    key={category._id}
                                >
                                    <Link to={`/categories/${category.name}`}
                                    >
                                        <div className='border border-gray-300 hover:border-[#1D4ED8] rounded-3xl p-2 flex flex-col gap-2 md:gap-4 items-center justify-center hover:text-[#1D4ED8] hover:scale-105 transition-transform duration-300'>
                                            <div className="avatar">
                                                <div className="mask mask-heart w-16 md:w-24">
                                                    <img src={category.image} className="w-full" />
                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="font-semibold text-center text-sm md:text-lg">{category.name}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCategories;