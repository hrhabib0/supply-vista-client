import { Rating } from '@smastrom/react-rating';
import React from 'react';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    const { _id, productName, product_image, description, category, price, rating, brand } = product;
    const shortDescription = description.slice(0,100) +'...';
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="h-52">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="object-cover" />
            </figure>
            <div className="card-body items-center bg-gray-400">
                <div className='flex'>
                    <div className='flex-1'>
                        <h2 className="card-title">{productName}</h2>
                        <p>{shortDescription}</p>
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
                <div className="card-actions">
                    <Link to={`/update-product/${_id}`} className="btn btn-primary">Update Product</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;