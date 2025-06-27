import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router';

const CategoryProductCard = ({ product }) => {
    const { _id, productName, product_image, description, category, price, rating, brand } = product;
    const shortDescription = description.slice(0, 100) + '...';
    return (
        <div>
            
            <div className="card bg-base-100 shadow-sm">
                <figure className="h-72">
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="w-full h-full object-cover" />
                </figure>
                <div className="card-body p-2 lg:p-6 items-center bg-gray-400">
                    <div className=''>
                        <div>
                            <h2 className="card-title">{productName}</h2>
                            <p>{shortDescription}</p>
                            <div>
                                <Rating style={{ maxWidth: 150 }} value={rating} readOnly></Rating>
                            </div>
                        </div>
                        <div className="divider divider-error lg:divider-horizontal"></div>
                        <div>
                            <h2 className="card-title">Brand: {brand}</h2>
                            <p>Category: {category}</p>
                            <p>{price} BDT</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <Link to={`/products/${_id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProductCard;