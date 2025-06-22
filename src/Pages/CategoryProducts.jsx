import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductCard from '../Components/Products/ProductCard';
import CategoryProductCard from '../Components/CategoryProducts/CategoryProductCard';

const CategoryProducts = () => {
    const { categoryName } = useParams();
    const [categoryProducts, setCategoryProduct] = useState([])
    useEffect(() => {
        if (categoryName) {
            axios.get(`http://localhost:3000/products/?category=${encodeURIComponent(categoryName)}`)
                .then(res => {
                    console.log(res.data)
                    setCategoryProduct(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [categoryName])

    console.log(categoryProducts)

    return (
        <div>
            <h1>Showing Result : {categoryProducts.length}</h1>
            <h1 className='text-4xl font-bold text-center py-5'>Category: {categoryName}</h1>
            <div>
                {
                    categoryProducts.length > 0 ?
                        <div className='grid grid-cols-3 gap-4'>
                            {categoryProducts.map(product => <CategoryProductCard product={product}></CategoryProductCard>)}
                        </div> : 
                        <div className='text-center mt-20 border border-red-500 '>
                            <h1 className='text-3xl'>This category product will be coming soon.</h1>
                            <h1>Stay with us...</h1>
                        </div>

                }
            </div>
        </div>
    );
};

export default CategoryProducts;