import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../components/MainLayout/MainLayout'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import SignUp from '../components/SignUp/SignUp'
import Login from '../components/Login/Login'
import Profile from '../components/Profile/Profile'

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/signUp',
                element: <SignUp></SignUp>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/profile',
                element: <Profile></Profile>
            }
        ]
    }
])
export default router