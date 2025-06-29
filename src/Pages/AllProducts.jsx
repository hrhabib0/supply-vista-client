import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import ProductCard from '../Components/Products/ProductCard';
import ProductRow from '../Components/Products/ProductRow';
import AuthContext from '../contexts/AuthContext/AuthContext';
import useAxiosSecure from '../customHooks/useAxiosSecure';

const AllProducts = () => {
    const axiosSecure = useAxiosSecure();
    const [products, setProducts] = useState([])
    // useEffect(() => {
    //     axios(`https://b2b-market-server.vercel.app/products`, {
    //         headers: {
    //             Authorization: `Bearer ${user.accessToken}`
    //         }
    //     })
    //         .then(data => {
    //             setProducts(data.data)
    //             console.log(data.data)
    //         })
    //         .catch(error => {
    //             alert(error)
    //         })
    // }, [user])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axiosSecure.get('/products').then(res => res.data);
                setProducts(data);
            } catch (error) {
                alert('fetch error', error)
            }
        }
        fetchData();
    }, [axiosSecure])
    const [viewType, setViewType] = useState('card')
    const handleViewChange = (e) => {
        setViewType(e.target.value)
    }
    // dynamic title
    useEffect(() => {
        document.title = "All Products | SupplyVista";
    }, [])
    // filter products
    const [showAvailable, setShowAvailabe] = useState(false)
    const filterProducts = showAvailable ?
        products.filter(product => product.minimumSell > 100) : products;

    return (
        <div className='max-w-7xl mx-auto my-10 px-4 lg:px-0'>
            <h1 className='text-3xl md:text-4xl text-center font-bold pb-4'>Discover All Products</h1>
            <div className='flex justify-between'>
                <div className='flex justify-start mt-4'>
                    <button onClick={() => setShowAvailabe(!showAvailable)} className='btn'>
                        {
                            showAvailable ? "Show All Products" : "Show Available Products"
                        }
                    </button>
                </div>
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
            </div>
            {viewType === 'card' && (
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7'>
                    {
                        filterProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
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
                                filterProducts.map((product, index) => <ProductRow index={index} product={product}></ProductRow>)
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllProducts;