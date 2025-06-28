import { Link } from "react-router";
import { motion } from "motion/react"

const Categories = ({ categories }) => {
    return (
        <div className="bg-black/40">
            <div className="max-w-7xl mx-auto py-10 px-4 md:px-0">
                <h1 className="py-5 text-center font-bold text-4xl">Discover All Categories</h1>
                <div className='grid gap-5 grid-cols-2 md:grid-cols-5'>
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
                                        <div className='border border-gray-300 rounded-3xl p-2 flex gap-2 md:gap-4 items-center hover:text-blue-500 hover:scale-105 transition-transform duration-300'>
                                            <div className="avatar">
                                                <div className="mask mask-hexagon-2 w-16 md:w-20">
                                                    <img src={category.image} className="w-full" />
                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="font-semibold text-sm md:text-lg">{category.name}</h2>
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

export default Categories;