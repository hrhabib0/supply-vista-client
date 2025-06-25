import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from '../Components/Products/ProductCard';

const AllProducts = () => {
    const products = useLoaderData()
    return (
        <div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    products.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;