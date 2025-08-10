import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductCard from '../Components/Products/ProductCard';
import CategoryProductCard from '../Components/CategoryProducts/CategoryProductCard';
import AuthContext from '../contexts/AuthContext/AuthContext';
import useAxiosSecure from '../customHooks/useAxiosSecure';

const CategoryProducts = () => {
    const { categoryName } = useParams();
    const axiosSecure = useAxiosSecure();
    const [categoryProducts, setCategoryProduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axiosSecure.get(`/products/?category=${encodeURIComponent(categoryName)}`).then(res=>res.data)
                setCategoryProduct(data);
            } catch (error) {
                alert('fetch error', error)
            }
        }
        fetchData();
    }, [categoryName,axiosSecure])
    // dynamic title
    useEffect(() => {
        document.title = `${categoryName} | SupplyVista`;
    }, [categoryName])
    return (
        <div className='max-w-7xl mx-auto px-4 lg:px-0'>
            <h1 className='text-2xl md:text-4xl font-bold text-center py-5'>Category: {categoryName}</h1>
            <div>
                {
                    categoryProducts.length > 0 ?
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-5 gap-4 mx-3 lg:mx-0'>
                            {categoryProducts.map(product => <CategoryProductCard key={product._id} product={product}></CategoryProductCard>)}
                        </div> :
                        <div className='text-center mt-20 border border-[#2563EB]'>
                            <h1 className='text-3xl'>This category product will be coming soon.</h1>
                            <h1>Stay with us...</h1>
                        </div>

                }
            </div>
        </div>
    );
};

export default CategoryProducts;