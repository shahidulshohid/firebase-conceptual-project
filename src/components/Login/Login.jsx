import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";
import { NavLink } from "react-router-dom";

const Login = () => {
    const {handleSignIn} = useContext(authContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        handleSignIn(email, password)
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
           Email: <input type="email" name="email"/>
            <br />
            Password: <input type="text" name="password"/>
            <br />
            <button type="submit">SignIn</button>
           </form>
           <NavLink to='/signUp'>SignUp</NavLink>
        </div>
    );
};

export default Login;