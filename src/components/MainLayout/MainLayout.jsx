import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword   } from "firebase/auth";
import {auth} from '../../firebase/firebase.config'

export const authContext = createContext()

const MainLayout = () => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = ()=> {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            console.log('ERROR', error.message)
        })
    }
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            console.log('ERROR', error.message)
        })
    }

    const handleSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
            console.log(res.user)
        })
    }

    const handleLogout = () => {
        signOut(auth)
        .then(res => console.log(res))
    }

    useEffect(()=>{
        console.log('user state', user)
    }, [user])

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return ()=> unSubscribe()
    }, [])

    const authData = {
        handleGoogleLogin,
        handleGithubLogin,
        user,
        setUser,
        handleSignUp,
        handleLogout
    }
    return (
        <div>
            <authContext.Provider value={authData}>
            <Outlet></Outlet>
            </authContext.Provider>
        </div>
    );
};

export default MainLayout;