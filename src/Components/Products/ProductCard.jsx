import React from 'react';

const ProductCard = ({ product }) => {
    console.log(product)
    const { productName, product_image, description } = product;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{productName}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Update Product</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;