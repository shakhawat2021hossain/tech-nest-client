import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const loginUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currUser => {

            setUser(currUser);
            setLoading(false)

        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, createUser, loginUser, googleSignIn, logOut, loading }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;