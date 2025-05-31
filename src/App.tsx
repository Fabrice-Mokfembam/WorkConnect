import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import { webRoutes } from './routes/WebRoutes'
import { authRoutes } from './routes/AuthRoutes'
import { useUser } from './hooks/useUser'
import { useEffect } from 'react'

const router = createBrowserRouter([webRoutes,authRoutes])

function App() {
  const {user} = useUser()

  useEffect(()=>{
    console.log('authuser',user)
  },[user])
  return <RouterProvider router={router}/>
}

export default App
