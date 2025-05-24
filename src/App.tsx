import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import { webRoutes } from './routes/WebRoutes'

const router = createBrowserRouter([webRoutes])

function App() {
  return <RouterProvider router={router}/>
}

export default App
