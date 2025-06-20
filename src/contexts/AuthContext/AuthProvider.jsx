import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from '@firebase/auth';
import { auth } from '../../firebase/firebase.init'


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create a user
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Update user information
    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }
    // sign in a user
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in
    const googleSignInUser = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    // signOut a user 
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    // set an observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        updateUser,
        signInUser,
        googleSignInUser,
        signOutUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;