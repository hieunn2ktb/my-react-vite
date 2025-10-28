import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <h1>Login Page</h1>,
  },
  {
    path: "/register",
    element: <h1>register Page</h1>,
  },
  {
    path: "/users",
    element: <h1>users Page</h1>,
  },
  {
    path: "/product",
    element: <h1>product Page</h1>,
  }
]); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
