import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import { webRoutes } from './routes/WebRoutes'
import { authRoutes } from './routes/AuthRoutes'

const router = createBrowserRouter([webRoutes,authRoutes])

function App() {
  return <RouterProvider router={router}/>
}

export default App
