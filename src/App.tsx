import './conponents/todo/todo.css';
import TodoData from './conponents/todo/todoData';
import TodoNew from './conponents/todo/todoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';

function App() { 

  const propsTest = "This is props test";
  const[todoList, setTodoList] = useState([
    {id: 1, name: "Learn React"},
    {id: 2, name: "Learn Vite"},
    {id: 3, name: "Learn TypeScript"},

  ]);
  const addNewTodo = (name:String) => {
    const newTodo = {id: todoList.length + 1, name: name};
    setTodoList([...todoList, newTodo]);
  }
  return (
    <>
      <div className="toto-container">
        <div className="todo-title"> Todo List</div>
        <TodoNew addNewTodo = {addNewTodo}/>
        <TodoData
         name = {propsTest}
        setTodoList={todoList}
        />
        <div className='todo-image'>
        <img src={reactLogo} />
        </div>
      </div>
      
    </>
  )
}

export default App
