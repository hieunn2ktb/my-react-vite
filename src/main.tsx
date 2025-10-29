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
import BookPage from './pages/book.tsx';
import './style/global.css';
import TodoApp from './conponents/todo/TodoApp.tsx';
import ErrorPage from './pages/error.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/users",
         element: <UserPage />,
      },
      {
        path: "/books",
        element: <BookPage />,
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  
]); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
