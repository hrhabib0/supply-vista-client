import React, { use } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const { user } = use(AuthContext)
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())
        data.total = Number(data.total);
        data.minimumSell = Number(data.minimumSell);
        data.price = Number(data.price);
        data.rating = Number(data.rating)

        // send data to the database
        axios.post('https://b2b-market-server.vercel.app/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product Add Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }

            })
            .catch(error => {
                alert(error)
            })
    }
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold my-4 text-center'>Add Your Product</h1>
            <form onSubmit={handleAddProduct} className='max-w-4xl mx-auto text-center'>
                {/* basic info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Product Name</label>
                    <input type="text" className="input w-full" name='productName' placeholder="Product Name" required />

                    <label className="label">Product Image</label>
                    <input type="url" className="input w-full" name='product_image' placeholder="Product Image URL" required />
                </fieldset>

                {/* Product Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Product Category</legend>
                    <select defaultValue="" name='category' className="select w-full" required>
                        <option disabled={true} value="">Product Category</option>
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
                    <input type="number" className="input w-full" name='total' placeholder="Total Quantity" />

                    <label className="label">Minimum Selling Quantity</label>
                    <input type="number" className="input w-full" name='minimumSell' placeholder="Minimum Selling Quantity" />
                </fieldset>

                {/* Product's Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Product's Description</legend>
                    <textarea className="textarea w-full" name='description' placeholder="Product's Description"></textarea>
                </fieldset>

                {/* Price info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Price Info</legend>

                    <label className="label">Product Price</label>
                    <input type="text" className="input w-full" name='price' placeholder="Product Price (per piece)" />
                </fieldset>
                {/* Rating*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Product Rating</legend>

                    <label className="label">Rating</label>
                    <input type="number" className="input w-full" name='rating' min="1" max="5" placeholder="Product Rating(1-5)" />
                </fieldset>

                {/* Brand info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Brand Related Info</legend>

                    <label className="label">Brand Name</label>
                    <input type="text" className="input w-full" name='brand' defaultValue={user.displayName} readOnly placeholder="Brand Name" />
                    <label className="label">Brand Email</label>
                    <input type="email" className="input w-full" name='brand_email' defaultValue={user.email} readOnly placeholder="Brand Email" />
                </fieldset>

                {/* Submit Button */}
                <input type="submit" className='btn btn-primary w-full' value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;