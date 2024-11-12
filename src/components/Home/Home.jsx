import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider  } from "firebase/auth";
import {auth} from '../../firebase/firebase.config'

const Home = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = ()=> {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log('ERROR', error.message)
        })
    }
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log('ERROR', error.message)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <button onClick={handleGithubLogin}>Github Login</button>
        </div>
    );
};

export default Home;