import React, { use, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import CategoryProductCard from '../Components/CategoryProducts/CategoryProductCard';
import useAxiosSecure from '../customHooks/useAxiosSecure';

const MyAddProduct = () => {
    const { user } = use(AuthContext)
    const axiosSecure = useAxiosSecure();
    const [myProducts, setMyProduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axiosSecure.get(`/products/?email=${user.email}`).then(res=>res.data);
                setMyProduct(data);
            } catch (error) {
                alert('fetch error', error)
            }
        }
        fetchData();
    }, [axiosSecure, user.email])
    return (
        <div className='max-w-7xl mx-auto my-10 px-4 lg:px-0'>
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