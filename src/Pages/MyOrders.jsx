import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import OrderProductCard from '../Components/OrderProducts/OrderProductCard';
import Swal from 'sweetalert2';

const MyOrders = () => {
    const { user } = use(AuthContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios(`https://b2b-market-server.vercel.app/orders/?email=${user?.email}`)
            .then(data => {
                setOrders(data.data)
            })
            .catch(error => {
                alert(error)
            })
    }, [user])

    const handleRemoveOrder = (id) => {
        console.log('remove id',id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // fetch data to delete from database
                axios.delete(`https://b2b-market-server.vercel.app/orders/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // filter remaining orders and update ui
                            const remainingOrders = orders.filter(order => order._id !== id);
                            setOrders(remainingOrders)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        });
    }
    // dynamic title
    useEffect(() => {
        document.title = "My Orders | SupplyVista";
    }, [])
    return (
        <div>
            <h1 className='text-2xl md:text-4xl text-center font-bold py-5'>Your all products is here</h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 mx-3 lg:mx-0'>
                {
                    orders.map(order => <OrderProductCard key={order._id} order={order} handleRemoveOrder={handleRemoveOrder}></OrderProductCard>)
                }
            </div>

        </div>
    );
};

export default MyOrders;