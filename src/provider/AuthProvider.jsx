import { GoogleAuthProvider, browserPopupRedirectResolver, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null) 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const loginUser = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const logOut = () =>{
        return signOut(auth);
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        return signInWithPopup(auth, provider, browserPopupRedirectResolver);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currUser =>{
            setUser(currUser);
            return()=>{
                unSubscribe();
            }
        })
    },[])

    const authInfo = {user, createUser, loginUser, googleSignIn, logOut}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;