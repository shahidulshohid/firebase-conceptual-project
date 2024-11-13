import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";

const About = () => {
    const {handleGoogleLogin, setUser, user, handleLogout} = useContext(authContext)
    return (
        <div>
            <div style={{marginBottom:'30px'}}>
            {user?.displayName}
            I am about
            </div>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <button onClick={()=> setUser('shahidul islam')}>abc</button>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    );
};

export default About;