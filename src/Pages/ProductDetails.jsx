import { Rating } from '@smastrom/react-rating';
import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AuthContext from '../contexts/AuthContext/AuthContext';
import axios from 'axios';

const ProductDetails = () => {
    const { user } = use(AuthContext)
    const data = useLoaderData();
    const [product, setProduct] = useState(data)
    const { _id, product_image, productName, description, price, category, rating, brand, total, minimumSell } = product;
    // const [totalQuantity, setTotalQuantity] = useState(total)
    const [orderQuantity, setOrderQuantity] = useState(1);
    const [date, setDate] = useState();
    useEffect(()=>{
        const date = new Date()     // get the date
        const formatedDate = date.toISOString().split('T')[0];
        setDate(formatedDate)
    },[])

    const handleDecrement = () => {
        if (orderQuantity > 1) setOrderQuantity(orderQuantity - 1)
    }
    const handleIncrement = () => {
        setOrderQuantity(orderQuantity + 1)
    }

    const handleOrder = (e) => {
        e.preventDefault();
        const order_quantity = orderQuantity;
        if (order_quantity < minimumSell){
            alert('Increase Quantity');
            return;
        }
        // const remainingStock = total - order;
        // console.log('remaining ', remainingStock)
        const form = e.target;
        const customer = form.customer.value;
        const customer_email = form.customer_email.value;
        const buying_date = form.buying_date.value;
        console

        const orderData = {
            orderId: _id,
            customer,
            customer_email,
            order_quantity,
            buying_date
        }
        console.log(orderData)
        // save orderData to the database
        axios.post('http://localhost:3000/orders', orderData)
            .then(res => {
                if (res.data.insertedId) {
                    document.getElementById('my_modal_1').close();
                    setProduct(prev=>{
                        return {...prev, total:prev.total-order_quantity}
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
        // console.log('order quantity', order)

    }

    return (
        <div className='max-w-7xl mx-auto my-8 grid'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center bg-base-100">
                <figure>
                    <img
                        src={product_image}
                        alt="product image"
                        className='w-full' />
                </figure>
                <div className="flex flex-col gap-4 px-4 md:px-0">
                    <h2 className="text-3xl font-bold">{productName}</h2>
                    <p className='md:w-1/2 text-lg font-thin'>{description}</p>
                    <p className=''>TK {price}</p>
                    <p className=''>Total Stock: {total}</p>
                    <p className='text-2xl font-thin'>Brand: <span className='text-blue-500'>{brand}</span></p>
                    <p className='text-2xl font-thin'>Category: <span className='text-green-500'>{category}</span></p>
                    <div>
                        <Rating style={{ maxWidth: 150 }} value={rating} readOnly></Rating>
                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Buy Now</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Fill up the form!</h3>

                            <div className="">
                                <form onSubmit={handleOrder} method="dialog">
                                    <label className=''>
                                        <input type="text" placeholder="Type here" className="input mb-3" name='customer' defaultValue={user.displayName} readOnly />
                                    </label>
                                    <label className="input mb-3">
                                        <input type="email" name='customer_email' placeholder="mail@site.com" defaultValue={user.email} readOnly />
                                    </label>
                                    {/* <div className="validator-hint hidden">Enter valid email address</div> */}
                                    <label className=''>
                                        <input type="date" className="input mb-3" name='buying_date' defaultValue={date} readOnly />
                                    </label>
                                    <div className='flex items-center'>
                                        <button type='button' onClick={handleDecrement} disabled={orderQuantity === 1} className='btn btn-sm'>-</button>
                                        <input
                                            type="text"
                                            name="order_quantity"
                                            value={orderQuantity}
                                            onChange={(e) => setOrderQuantity(e.target.value)}
                                            className='w-12 text-center'
                                        />
                                        <button type='button' onClick={handleIncrement} className='btn btn-sm'>+</button>
                                    </div>
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn mt-3">Buy</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;