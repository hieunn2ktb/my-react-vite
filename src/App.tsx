import './conponents/todo/todo.css';
import Headers from './conponents/layout/header';
import Footer from './conponents/layout/footer';
import { Outlet } from 'react-router-dom';
// type Todo = { id: number; name: string };



function App() { 
  return (
    <>
      <Headers />
     
      <Outlet />
      <Footer />
    </>
  )
}

export default App
