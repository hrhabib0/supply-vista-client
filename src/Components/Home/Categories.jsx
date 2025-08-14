import { Link } from "react-router";
import { motion } from "motion/react";

const Categories = ({ categories }) => {
    // Optional: fallback placeholder categories if fewer than needed
    // const displayCategories = categories.length < 10
    //     ? [
    //         ...categories,
    //         ...Array(10 - categories.length).fill({
    //             _id: Math.random(),
    //             name: "Coming Soon",
    //             image: "https://via.placeholder.com/150?text=Category"
    //         })
    //     ]
    //     : categories;

    return (
        <div className="bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto py-10 px-4 lg:px-0">
                <h1 className="text-[#2563EB] text-center font-bold text-3xl md:text-4xl pb-5">
                    Discover All Categories
                </h1>

                <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {categories.map(category => (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.2 }}
                            key={category._id}
                        >
                            <Link to={`/categories/${category.name}`}>
                                <div className="border border-gray-200 hover:border-[#2563EB] bg-white rounded-3xl p-4 flex gap-3 items-center hover:text-[#2563EB] hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-lg">
                                    <div className="avatar">
                                        <div className="mask mask-hexagon-2 w-16 md:w-20 h-16 md:h-20">
                                            <img 
                                                src={category.image} 
                                                alt={category.name} 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-base md:text-lg">
                                            {category.name}
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
