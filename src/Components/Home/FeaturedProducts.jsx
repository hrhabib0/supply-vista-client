import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import axios from "axios";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://b2b-market-server.vercel.app/products`)
            .then(response => {
                // Take first 8 products only
                setProducts(response.data.slice(0, 8));
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div className="bg-gradient-to-b from-white to-blue-50 py-12">
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <h2 className="text-[#2563EB] text-center font-bold text-3xl md:text-4xl mb-8">
                    Featured Products
                </h2>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map(product => (
                        <motion.div
                            key={product._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden hover:scale-105 transition-transform"
                        >
                            <img 
                                src={product.product_image} 
                                alt={product.name} 
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-[#2563EB] font-bold text-lg">${product.price}</span>
                                    <Link 
                                        to={`/products/${product._id}`}
                                        className="bg-[#2563EB] text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
