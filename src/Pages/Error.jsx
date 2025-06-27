import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <div>
                <div className='py-50 text-center mt-10' style={{
                    backgroundImage: "url('https://i.ibb.co/27mYpMYY/404-page.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>

                </div>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold mb-4 text-purple-600'>We are sorry. Not Found</h1>
                    <Link to={'/'} className='btn btn-success'>Back to home</Link>
                </div>

            </div>
        </div>
    );
};

export default Error;