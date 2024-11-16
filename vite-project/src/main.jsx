import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './component/About.jsx'
import Contact from './component/Conatct.jsx'
import Error from './component/Error.jsx'
import BookList from './component/BookList.jsx'
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
    ],
    errorElement:<Error/>,
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
