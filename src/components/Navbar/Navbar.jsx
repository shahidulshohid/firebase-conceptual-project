import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../MainLayout/MainLayout";
const Navbar = () => {
    const {handleLogout} = useContext(authContext)
    return (
        <div>
            <NavLink style={{marginLeft: '20px'}} to='/'>Home</NavLink>
            <NavLink style={{marginLeft: '20px'}} to='/about'>About</NavLink>
            <NavLink style={{marginLeft: '20px'}} to='/login'>Login</NavLink>
            <NavLink style={{marginLeft: '20px'}} to='/profile'>Profile</NavLink>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    );
};

export default Navbar;