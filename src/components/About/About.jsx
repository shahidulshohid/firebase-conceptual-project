import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";
// import { Navigate } from "react-router-dom";

const About = () => {
    const {handleGoogleLogin, setUser, user, handleLogout} = useContext(authContext)
    // console.log(user)

    // if(!user){
    //     return <Navigate to="/login"></Navigate>
    // }
    return (
        <div>
            <div style={{marginBottom:'30px'}}>
            {user?.displayName} <br />
            {user?.email} <br />
            I am about
            </div>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <button onClick={()=> setUser('shahidul islam')}>abc</button>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    );
};

export default About;