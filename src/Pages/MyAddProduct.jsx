import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import CategoryProductCard from '../Components/CategoryProducts/CategoryProductCard';
import useApplicationApi from '../api/useApplicationApi';

const MyAddProduct = () => {
    const { user } = use(AuthContext)
    const { myProductsApi } = useApplicationApi()
    const [myProducts, setMyProduct] = useState([])
    // one way to implement jwt
    // useEffect(() => {
    //     axios(`https://b2b-market-server.vercel.app/products/?email=${user?.email}`, {
    //         headers: {
    //             Authorization: `Bearer ${user.accessToken}`
    //         }
    //     })
    //         .then(data => {
    //             setMyProduct(data.data)
    //             console.log(data.data)
    //         })
    //         .catch(error => {
    //             alert(error)
    //         })
    // }, [user])
    // another way to implement jwt
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await myProductsApi(user.email);
                setMyProduct(data);
            } catch (error) {
                console.log('fetch error', error)
            }
        }
        fetchData();
    }, [user.email])
    return (
        <div className='my-10'>
            <h1 className='text-2xl md:text-4xl font-bold text-center pb-5'>Our Branded Products</h1>
            <div>
                {
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-3 lg:mx-0'>
                        {myProducts.map(product => <CategoryProductCard key={product._id} product={product}></CategoryProductCard>)}
                    </div>

                }
            </div>
        </div>
    );
};

export default MyAddProduct;