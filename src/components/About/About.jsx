import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";

const About = () => {
    const {handleGoogleLogin, setUser} = useContext(authContext)
    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <button onClick={()=> setUser('shahidul islam')}>Google Login</button>
        </div>
    );
};

export default About;