import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext)
    const links =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/products'}>All Products</NavLink></li>
            <li><NavLink to={'/add-product'}>Add Product</NavLink></li>
            <li><NavLink to={'/my-product'}>My Product</NavLink></li>
        </>
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Register Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                alert(error)
            })
    }
    return (
        <div className='bg-[#1D4ED8]'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-xl">Supply<span>Vista</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                    <div>
                        {
                            user ?
                                <div className='flex items-center gap-4'>
                                    {/* <Link to={'/my-orders'}>My Orders</Link> */}
                                    <Link to={'/my-orders'}>
                                        <FaShoppingCart size={25} />
                                    </Link>
                                    <Link to={'/my-profile'}><img className='w-12 h-12 rounded-full cursor-pointer' src={user.photoURL} alt="" title={user.displayName} /></Link>
                                    <a className='btn btn-soft btn-primary' onClick={handleSignOut}> Log Out </a>
                                </div>
                                :
                                <>
                                    <Link to={'/sign-in'} className='mr-5 btn btn-sm border-none bg-[#F97316] hover:bg-[#f97416cc]'>LogIn</Link>
                                    <Link to={'/register'} className='btn btn-sm border-none bg-[#F97316] hover:bg-[#f97416cc]'>Register</Link>
                                </>
                        }
                        {/* <Link to={'/sign-in'} className='mr-5 btn btn-sm border-none bg-[#F97316] hover:bg-[#f97416cc]'>LogIn</Link>
                    <Link to={'/register'} className='btn btn-sm border-none bg-[#F97316] hover:bg-[#f97416cc]'>Register</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;