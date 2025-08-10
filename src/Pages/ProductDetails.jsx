import { Rating } from '@smastrom/react-rating';
import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import AuthContext from '../contexts/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    // login user from auth context
    const { user } = use(AuthContext)
    // load data by using loader
    const data = useLoaderData();
    const [product, setProduct] = useState(data)
    const { _id, product_image, productName, description, price, category, rating, brand, total, minimumSell } = product;
    const [orderQuantity, setOrderQuantity] = useState(1);
    const [date, setDate] = useState();
    useEffect(() => {
        const date = new Date()     // get the date
        const formatedDate = date.toISOString().split('T')[0];
        setDate(formatedDate)
    }, [])

    const handleDecrement = () => {
        if (orderQuantity > 1) setOrderQuantity(orderQuantity - 1)
    }
    const handleIncrement = () => {
        const convertQuantity = parseInt(orderQuantity)
        setOrderQuantity(convertQuantity + 1)
    }
    // for closing modal
    const modalRef = useRef(null)
    const handleCloseModal = () => {
        modalRef.current.close()
    }
    const handleOrder = (e) => {
        e.preventDefault();
        const order_quantity = parseInt(orderQuantity);
        if (order_quantity < minimumSell) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Sorry!",
                text: `Minimum sell quantity is ${minimumSell}. Please Increase your order.`,
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        if (order_quantity > total) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Sorry!",
                text: `Available stcok is ${total}.`,
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        const form = e.target;
        const customer = form.customer.value;
        const customer_email = form.customer_email.value;
        const buying_date = form.buying_date.value;
        const orderData = {
            orderId: _id,
            customer,
            customer_email,
            order_quantity,
            buying_date
        }
        // save orderData to the database
        axios.post('https://b2b-market-server.vercel.app/orders', orderData)
            .then(res => {
                if (res.data.insertedId) {
                    // document.getElementById('my_modal_1').close();
                    handleCloseModal()
                    setProduct(prev => {
                        return { ...prev, total: prev.total - order_quantity }
                    })
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Order Placed Successfully",
                        text: `${user.displayName || 'User'} login successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setOrderQuantity(1)
                }
            })
            .catch(error => {
                alert(error)
            })

    }
    // dynamic title
    useEffect(() => {
        document.title = `${productName} | SupplyVista`;
    }, [productName])
    return (
        <div className="bg-gradient-to-r from-gray-50 to-blue-50">
            <div className='max-w-7xl mx-auto py-8 grid'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center bg-base-100 p-4 rounded-2xl">
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
                        <p className='text-2xl font-thin'>Category: <span className='text-[#2563EB]'>{category}</span></p>
                        <div>
                            <Rating style={{ maxWidth: 150 }} value={rating} readOnly></Rating>
                        </div>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-white text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition duration-500" onClick={() => document.getElementById('my_modal_1').showModal()}>Buy Now</button>
                        <dialog ref={modalRef} id="my_modal_1" className="modal">

                            <div className="modal-box">
                                <div className='flex items-center justify-between'>
                                    <h3 className="font-bold text-lg">Fill up the form!</h3>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn">X</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="">
                                    <form onSubmit={handleOrder} method='dialog'>
                                        <label className=''>
                                            <input type="text" placeholder="Type here" className="input mb-3" name='customer' defaultValue={user.displayName} readOnly disabled />
                                        </label>
                                        <label className="input mb-3">
                                            <input type="email" name='customer_email' placeholder="mail@site.com" defaultValue={user.email} readOnly disabled />
                                        </label>
                                        {/* <div className="validator-hint hidden">Enter valid email address</div> */}
                                        <label className=''>
                                            <input type="date" className="input mb-3" name='buying_date' defaultValue={date} readOnly disabled />
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
                                        <button className="btn mt-3 bg-[#2563EB] text-white">Buy</button>
                                    </form>

                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;