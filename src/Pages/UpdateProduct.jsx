import axios from 'axios';
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const { _id, productName, product_image, category, total, minimumSell, description, price, rating, brand, brand_email } = useLoaderData()
    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedProduct = Object.fromEntries(formData.entries())

        // send update data to the backend
        axios.put(`http://localhost:3000/products/${_id}`, updatedProduct)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product Update Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                alert(error)
            })
    }
    // dynamic title
    useEffect(() => {
        document.title = "Update Product | SupplyVista";
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold my-4 text-center'>Update Product Informations</h1>
            <form onSubmit={handleUpdateProduct} className='max-w-4xl mx-auto text-center'>
                {/* basic info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Product Name</label>
                    <input type="text" className="input w-full" name='productName' defaultValue={productName} placeholder="Product Name" required />

                    <label className="label">Product Image</label>
                    <input type="url" className="input w-full" name='product_image' defaultValue={product_image} placeholder="Product Image URL" required />
                </fieldset>

                {/* Product Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Product Category</legend>
                    <select defaultValue={category} name='category' className="select w-full" required>
                        <option disabled={true} value="">Select Product Category</option>
                        <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                        <option value="Home & Kitchen Appliances">Home & Kitchen Appliances</option>
                        <option value="Fashion & Apparel">Fashion & Apparel</option>
                        <option value="Industrial Machinery & Tools">Industrial Machinery & Tools</option>
                        <option value="Health & Beauty">Health & Beauty</option>
                        <option value="Automotive Parts & Accessories">Automotive Parts & Accessories</option>
                        <option value="Office Supplies & Stationery">Office Supplies & Stationery</option>
                    </select>
                </fieldset>

                {/* Quantity Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Product Quantity</legend>

                    <label className="label">Total Quantity</label>
                    <input type="number" className="input w-full" name='total' defaultValue={total} placeholder="Total Quantity" />

                    <label className="label">Minimum Selling Quantity</label>
                    <input type="number" className="input w-full" name='minimumSell' defaultValue={minimumSell} placeholder="Minimum Selling Quantity" />
                </fieldset>

                {/* Product's Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Product's Description</legend>
                    <textarea className="textarea w-full" name='description' defaultValue={description} placeholder="Product's Description"></textarea>
                </fieldset>

                {/* Price info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Price Info</legend>

                    <label className="label">Product Price</label>
                    <input type="text" className="input w-full" name='price' defaultValue={price} placeholder="Product Price (per piece)" />
                </fieldset>
                {/* Rating*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Product Rating</legend>

                    <label className="label">Rating</label>
                    <input type="number" className="input w-full" name='rating' min="1" max="5" defaultValue={rating} placeholder="Product Rating(1-5)" />
                </fieldset>

                {/* Brand info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Brand Related Info</legend>

                    <label className="label">Brand Name</label>
                    <input type="text" className="input w-full" name='brand' defaultValue={brand} placeholder="Brand Name" />
                    <label className="label">Brand Email</label>
                    <input type="email" className="input w-full" name='brand_email' defaultValue={brand_email} placeholder="Brand Email" />
                </fieldset>

                {/* Submit Button */}
                <input type="submit" className='btn btn-primary w-full' value="Update Product" />
            </form>
        </div>
    );
};

export default UpdateProduct;