import React from 'react';
import useAxiosSecure from '../customHooks/useAxiosSecure';

const useOrderApi = () => {
    const axiosSecure = useAxiosSecure();
    const myOrdersApi = email => {
        return axiosSecure.get(`/orders/?email=${email}`)
            .then(res => res.data)
    }
    return {
        myOrdersApi
    };
};

export default useOrderApi;