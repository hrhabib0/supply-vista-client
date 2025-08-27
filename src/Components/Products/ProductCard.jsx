import { Rating } from '@smastrom/react-rating';
import React from 'react';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    const { _id, productName, product_image, description, category, price, rating, brand } = product;
    const shortDescription = description?.slice(0, 100) + '...';
    return (

        <div className="card bg-base-100 shadow-sm">
            <figure className="h-52">
                <img
                    src={product_image}
                    alt="Product Image"
                    className="w-full h-full object-cover" />
            </figure>
            <div className="card-body bg-white items-start p-4 flex flex-col flex-1">
                <div>
                    <div>
                        <h2 className="card-title text-lg md:text-xl font-semibold">{productName}</h2>
                        <p className='text-gray-600 text-sm md:text-base'>{shortDescription}</p>
                        <div className='my-2'>
                            <Rating style={{ maxWidth: 150 }} value={rating} readOnly></Rating>
                        </div>
                    </div>
                    <div className="divider divider-error lg:divider-horizontal"></div>
                    <div className='flex-1'>
                        <h2 className="font-medium">Brand: {brand}</h2>
                        <p>Category: {category}</p>
                        <p className='font-semibold'>{price} BDT</p>
                    </div>
                </div>
                <div className="card-actions mt-4 w-full">
                    <Link to={`/products/${_id}`} className="bg-[#2563EB] text-white px-4 py-2 rounded-lg text-md hover:bg-blue-700 transition">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;