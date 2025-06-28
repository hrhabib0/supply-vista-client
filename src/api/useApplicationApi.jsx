import React from 'react';
import useAxiosSecure from '../customHooks/useAxiosSecure';

const useApplicationApi = () => {
    const axiosSecure = useAxiosSecure();
    const myProductsApi = email => {
        return axiosSecure.get(`/products/?email=${email}`)
            .then(res => res.data)
    }
    return {
        myProductsApi
    };
};

export default useApplicationApi;