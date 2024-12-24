import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
const [user, setUser]= useState(null)
const [loading, setLoading]= useState(true)


// !Create User Function
const createUser =(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
// Login Function
const userLogin = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
// User LogOut 
const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}
// Observer To setUser 
useEffect(()=>{
 const unSubscribe=  onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return()=>{
        unSubscribe()
    }
},[])

    const authInfo = {
      user,
      loading,
      createUser,
      userLogin,
      logOut,

    };


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;