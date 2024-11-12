import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";

const Home = () => {
    const {handleGoogleLogin, handleGithubLogin} = useContext(authContext)
    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <button onClick={handleGithubLogin}>Github Login</button>
        </div>
    );
};

export default Home;