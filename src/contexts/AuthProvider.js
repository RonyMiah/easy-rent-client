import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import loader from '../../src/images/loader.gif';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const allContext = useFirebase();
    if (!children) return { loader };

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;