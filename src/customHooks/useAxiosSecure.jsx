import axios from 'axios';
import React, { use } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';

const axiosInstance = axios.create({
    baseURL: 'https://b2b-market-server.vercel.app'
})
const useAxiosSecure = () => {
    const {user} = use(AuthContext);
    axiosInstance.interceptors.request.use(config=>{
        config.headers.authorization = `Bearer ${user.accessToken}`;
        return config;
    })
    return axiosInstance;
};

export default useAxiosSecure;