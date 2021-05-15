import React, { useContext, useState, useEffect } from "react";
import firebase, {auth} from '../config/firebase.config';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    function logout() {
        return auth.signOut();
    }

    function loginWithProvider(provider) {
        auth.signInWithPopup(provider).then(res => {
            return res.user;
        }).catch(error => {
            return error;
        });
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {;
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    });

    const value = {
        currentUser,
        logout,
        loginWithProvider
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
