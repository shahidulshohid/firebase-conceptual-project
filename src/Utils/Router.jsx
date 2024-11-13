import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../components/MainLayout/MainLayout'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import SignUp from '../components/SignUp/SignUp'

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
            }
        ]
    }
])
export default router