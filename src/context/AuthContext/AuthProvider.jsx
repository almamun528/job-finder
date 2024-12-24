import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const AuthProvider = ({children}) => {
const [user, setUser]= useState(null)
const [loading, setLoading]= useState(true)


// !Create User Function
const createUser =(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
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

    };


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;