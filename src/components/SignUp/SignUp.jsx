import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";

const SignUp = () => {
    const {handleSignUp} = useContext(authContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const conPassword = e.target.conPassword.value
        console.log(email, password, conPassword)

        // validation here
        if(password.length < 6){
            alert('password must be 6 characters')
            return
        }
        if(password != conPassword){
            alert("password didn't match")
            return 
        }

        handleSignUp(email, password)
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
           Email: <input type="email" name="email"/>
            <br />
            Password: <input type="text" name="password"/>
            <br />
            ConEmail: <input type="text" name="conPassword"/>
            <br />
            <button type="submit">SignUp</button>
           </form>
        </div>
    );
};

export default SignUp;