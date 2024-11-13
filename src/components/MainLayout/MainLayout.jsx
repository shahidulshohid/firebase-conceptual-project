/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, TwitterAuthProvider  } from "firebase/auth";
import {auth} from '../../firebase/firebase.config'
import Navbar from "../Navbar/Navbar";

export const authContext = createContext()

const MainLayout = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider()

    const handleGoogleLogin = ()=> {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            console.log('ERROR', error.message)
        })
    }
    const handleGithubLogin = () => {
        setLoading(true)
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            console.log('ERROR', error.message)
        })
    }

    const handleTwitterLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, twitterProvider)
        .then(res => {
            setUser(res.user)
        })
        .catch(error => {
            console.log('ERROR', error.message)
        })
    }

    const handleSignUp = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
            console.log(res.user)
        })
    }
    const handleSignIn = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            console.log(res)
        })
    }

    const handleLogout = () => {
        setLoading(true)
        signOut(auth)
        .then(res => console.log(res))
    }

    useEffect(()=>{
        console.log('user state', user)
    }, [user])

    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //         setLoading(false)
    //     })
    //     return ()=> unSubscribe()
    // }, [])

    // another approach 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
            setLoading(false)
        })
        return ()=> unSubscribe()
    }, [])

    const authData = {
        handleGoogleLogin,
        handleGithubLogin,
        handleTwitterLogin,
        user,
        loading, 
        setLoading,
        setUser,
        handleSignUp,
        handleSignIn,
        handleLogout
    }
    return (
        <div>
            <authContext.Provider value={authData}>
                <Navbar></Navbar>
            <Outlet></Outlet>
            </authContext.Provider>
        </div>
    );
};

export default MainLayout;