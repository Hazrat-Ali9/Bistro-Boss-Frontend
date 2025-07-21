import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// user auth
const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth
};

export default useAuth;