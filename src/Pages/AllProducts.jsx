import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from '../Components/Products/ProductCard';
import ProductRow from '../Components/Products/ProductRow';

const AllProducts = () => {
    const products = useLoaderData()
    const [viewType, setViewType] = useState('card')
    const handleViewChange = (e) => {
        setViewType(e.target.value)
    }
    // dynamic title
    useEffect(() => {
        document.title = "All Products | SupplyVista";
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-4xl text-center font-bold py-4'>Discover All Products</h1>
            <div className='flex justify-end mt-4'>
                <select
                    className='select select-sm w-40'
                    value={viewType}
                    onChange={handleViewChange}
                >
                    <option value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
            </div>
            {viewType === 'card' && (
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 mx-3 md:mx-0'>
                    {
                        products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
            )}


            {/* table view */}
            {viewType === 'table' && (
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Info</th>
                                <th>Description</th>
                                <th>Brand</th>
                                <th>Price(BDT)</th>
                                <th>Rating</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                products.map((product, index) => <ProductRow index={index} product={product}></ProductRow>)
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllProducts;