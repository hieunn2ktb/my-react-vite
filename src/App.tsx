import './conponents/todo/todo.css';
import TodoData from './conponents/todo/todoData';
import TodoNew from './conponents/todo/todoNew';
import reactLogo from './assets/react.svg'

function App() { 

  const propsTest = "This is props test";

  const addNewTodo = (name:String) => {
    alert("New Todo Added "+ name);
  }
  return (
    <>
      <div className="toto-container">
        <div className="todo-title"> Todo List</div>
        <TodoNew addNewTodo = {addNewTodo}/>
        <TodoData name = {propsTest} />
        <div className='todo-image'>
        <img src={reactLogo} />
        </div>
      </div>
      
    </>
  )
}

export default App
