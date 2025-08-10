import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router';

const ProductRow = ({product,index}) => {
    const { _id, productName, product_image, description, category, price, rating, brand } = product;
    return (
        <tr>
            <th>{index+1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={product_image}
                                alt="Product Image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                {description?.slice(0, 80) + '...'}
            </td>
            <td>{brand}</td>
            <td>{price}</td>
            <td><Rating style={{ maxWidth: 150 }} value={rating} readOnly></Rating></td>
            <th>
                <Link to={`/update-product/${_id}`} className="btn bg-[#2563EB] text-white">Update Product</Link>
            </th>
        </tr>
    );
};

export default ProductRow;