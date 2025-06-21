import { Rating } from '@smastrom/react-rating';
import React from 'react';
import '@smastrom/react-rating/style.css'

const ProductCard = ({ product }) => {
    console.log(product)
    const { productName, product_image, description, category, price, rating, brand } = product;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="" />
            </figure>
            <div className="card-body items-center bg-gray-400">
                <div className='flex'>
                    <div className='flex-1'>
                        <h2 className="card-title">{productName}</h2>
                        <p>{description}</p>
                        <div>
                            <Rating style={{ maxWidth: 150 }} value={rating} readOnly></Rating>
                        </div>
                    </div>
                    <div className="divider divider-error lg:divider-horizontal"></div>
                    <div className='flex-1'>
                        <h2 className="card-title">Brand: {brand}</h2>
                        <p>Category: {category}</p>
                        <p>{price} BDT</p>
                    </div>
                </div>
                {/* <h2 className="card-title">{productName}</h2>
                <p>{description}</p> */}
                <div className="card-actions">
                    <button className="btn btn-primary">Update Product</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;