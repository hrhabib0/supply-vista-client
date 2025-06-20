import React, { use } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';

const MyProfile = () => {
    const {user} = use(AuthContext)
    return (
        <div className='flex justify-center items-center my-8 mx-5 sm:mx-3 xl:mx-0'>
            <div className=''>
                <div className='text-center'>
                    <img className='w-30 h-30 mx-auto' src={user.photoURL} alt="" />
                    <h1 className='text-2xl font-bold border-2 border-red-500 rounded-md my-4 p-2'>Name: {user.displayName}</h1>
                    <p className='border-2 border-red-500 rounded-md my-2 p-2'>Email: {user.email}</p>
                    <p className='text-sm underline text-blue-400 cursor-pointer border-2 border-red-500 rounded-md p-2'>User's Photo: <a href={user.photoURL}>{user.photoURL}</a></p>
                </div>
                <div className='my-6 bg-gray-200 p-4 rounded-2xl'>
                    <h1 className='text-2xl font-bold text-red-500 text-center'>Update Your Informations</h1>
                    <form className='fieldset'>
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name='name' required placeholder="Name" />
                        {/* user's photo */}
                        <label className="label">Photo URL</label>
                        <input type="url" className="input w-full" name='photo' placeholder="Photo URL" />
                        <button type='submit' className='btn btn-soft btn-secondary'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;