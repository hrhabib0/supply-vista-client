import React, { use, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateUser, setUser, googleSignInUser } = use(AuthContext);
    const navigate = useNavigate()

    const handleRegisterUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // create a user
        createUser(email, password)
            .then(res => {
                const user = res.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Register Successfull",
                            text: `${user.displayName || 'User'} login successfully!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
            })
            .catch(error => {
                alert(error)
            })
    }

    const handleGoogleSignUp = () => {
        googleSignInUser()
            .then(result => {
                const user = result.user;
                if (result.user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Register Successfull",
                        text: `${user.displayName || 'User'} login successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                alert(error.message)
            })
    }
    // dynamic title
    useEffect(() => {
        document.title = "Register | SupplyVista";
    }, [])
    return (

        <div className="card bg-base-100 w-full max-w-md mx-auto mt-5 shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleRegisterUser}>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Your Name" required />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Your Email" required />
                        <label className="label">Photo URL</label>
                        <input type="url" name='photo' className="input w-full" placeholder="Your Profile URL" required />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className='input w-full'
                            required
                            placeholder="Password"
                            minLength="6"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />

                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
                {/* divider */}
                <div className="divider">OR</div>
                {/* google sign up button */}
                <div>
                    <button onClick={handleGoogleSignUp} className="btn bg-white w-full text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Sign Up with Google
                    </button>
                </div>
                <div>
                    <h1 className='text-xl'>Already have an account? <Link to={'/sign-in'} className='text-red-500'> Sign In </Link></h1>
                </div>
            </div>
        </div>

    );
};

export default Register;