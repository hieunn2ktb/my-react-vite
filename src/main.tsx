import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.tsx';
import RegisterPage from './pages/register.tsx';
import UserPage from './pages/user.tsx';
import ProductPage from './pages/product.tsx';
import './style/global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/users",
    element: <UserPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  }
]); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
