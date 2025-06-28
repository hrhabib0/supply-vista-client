import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import CategoryProductCard from '../Components/CategoryProducts/CategoryProductCard';

const MyAddProduct = () => {
    const { user } = use(AuthContext)
    const [myProducts, setMyProduct] = useState([])
    console.log('user', user.email)
    useEffect(() => {
        axios(`http://localhost:3000/products/?email=${user?.email}`)
            .then(data => {
                setMyProduct(data.data)
                console.log(data.data)
            })
            .catch(error => {
                alert(error)
            })
    }, [user])
    return (
        <div className='my-10'>
            <h1 className='text-2xl md:text-4xl font-bold text-center pb-5'>Our Branded Products</h1>
            <div>
                {
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-3 lg:mx-0'>
                        {myProducts.map(product => <CategoryProductCard product={product}></CategoryProductCard>)}
                    </div>

                }
            </div>
        </div>
    );
};

export default MyAddProduct;