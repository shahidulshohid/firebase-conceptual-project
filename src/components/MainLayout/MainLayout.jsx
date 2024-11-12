import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider  } from "firebase/auth";
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

    useEffect(()=>{
        console.log('user state', user)
    }, [user])

    const authData = {
        handleGoogleLogin,
        handleGithubLogin,
        user,
        setUser,
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