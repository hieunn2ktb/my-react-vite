import TodoData from './todoData';
import TodoNew from './todoNew';
import reactLogo from '../../assets/react.svg'
import { useState } from 'react';
import './todo.css';
const TodoApp = () => {
  const[todoList, setTodoList] = useState([]);
  const addNewTodo = (name:string) => {
    const newTodo = {id: todoList.length + 1, name: name};
    setTodoList([...todoList, newTodo]);
  }
  const deleteTodo = (id:number) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  }
  return (
     <div className="toto-container">
        <div className="todo-title"> Todo List</div>
        <TodoNew addNewTodo = {addNewTodo}/>
        {
          todoList.length > 0 ? 
        <TodoData
          todoList={todoList}
          setTodoList={setTodoList}
          deleteTodo = {deleteTodo}
          /> 
        :
        <div className='todo-image'>
            <img src={reactLogo} />
            </div>
      }

        {/* {
          todoList.length > 0 && (
            <TodoData todoList={todoList} setTodoList={setTodoList}/>
          )
        }
      
        {
          todoList.length === 0 && (
            <div className='todo-image'>
            <img src={reactLogo} />
            </div>
          )
        } */}
        
      </div>
  );
}
export default TodoApp;