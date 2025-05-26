import Profile from "../features/Profile/Pages/Index"
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
            path:'profile/:username',
            element:<Profile/>
        },
    ]
    
}

export {webRoutes}