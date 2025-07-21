import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <>
            <div class="relative flex justify-center items-center md:py-40">
                <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" className='rounded-full h-28 w-28' alt="" />
            </div>
        </>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to={'/login'} state={{form:location}} replace>

        </Navigate>
    );
};

export default PrivetRouts;