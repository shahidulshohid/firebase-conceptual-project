/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../MainLayout/MainLayout";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext)

    console.log(children)
    if(loading){
        return <h1>Loading.......................</h1>
    }
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;