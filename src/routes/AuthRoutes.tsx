
import AuthLayout from "../features/Authentication/Components/AuthLayout"
import Login from "../features/Authentication/Pages/Login"
import SignUp from "../features/Authentication/Pages/SignUp"



const authRoutes = {
    path:'/auth',
    element:<AuthLayout/>,
    children:[
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'signup',
            element:<SignUp/>
        },
    ]
    
}

export {authRoutes}