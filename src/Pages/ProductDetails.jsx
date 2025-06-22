import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
    const { product_image, productName, description, price, category,rating,brand } = useLoaderData()
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }
    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }

    return (
        <div className='max-w-7xl mx-auto my-8 grid'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center bg-base-100">
                <figure>
                    <img
                        src={product_image}
                        alt="product image"
                        className='w-full' />
                </figure>
                <div className="flex flex-col gap-4 px-4 md:px-0">
                    <h2 className="text-3xl font-bold">{productName}</h2>
                    <p className='md:w-1/2 text-lg font-thin'>{description}</p>
                    <p className=''>TK {price}</p>
                    <div className='flex items-center'>
                        <button onClick={handleDecrement} disabled={quantity === 1} className='btn btn-sm'>-</button>
                        <input
                            type="text"
                            value={quantity}
                            className='w-12 text-center'
                        />
                        <button onClick={handleIncrement} className='btn btn-sm'>+</button>
                    </div>
                    <p className='text-2xl font-thin'>Brand: <span className='text-blue-500'>{brand}</span></p>
                    <p className='text-2xl font-thin'>Category: <span className='text-green-500'>{category}</span></p>
                    <div>
                        <Rating style={{ maxWidth: 150 }} value={rating} readOnly></Rating>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;