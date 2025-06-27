import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const OrderProductCard = ({ order,handleRemoveOrder }) => {
    console.log(order)
    const { _id, productName, product_image, description, category, price, rating, brand, buying_date } = order;

    return (
        <div>
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
                            <p>Date: {buying_date}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleRemoveOrder(_id)} className="btn btn-primary">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderProductCard;