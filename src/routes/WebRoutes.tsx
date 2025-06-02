import EditProfile from "../features/Profile/Pages/editProfile"
import Profile from "../features/Profile/Pages/Index"
import SearchPage from "../features/Search/Pages/Index"
import WebLayout from "../Web/components/WebLayout"
import Landing from "../Web/pages/Landing"


const webRoutes = {
    path:'/',
    element:<WebLayout/>,
    children:[
        {
            index:true,
            element:<Landing/>
        },
        {
            path:'profile/:name',
            element:<Profile/>
        },
        {
            path:'/edit/profile/:name',
            element:<EditProfile/>
        },
        {
            path:'search-pros',
            element:<SearchPage/>
        },
    ]
    
}

export {webRoutes}