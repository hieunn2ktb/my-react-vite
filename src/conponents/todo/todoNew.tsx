import { useState } from "react";

const TodoNew = (props:any) => {
  
  const [valueInput, setValueInput] = useState("NNH");

  const{addNewTodo} = props;

  const handleOnChange = (event:any) => {
    setValueInput(event);
  }
  const handleClick = () => {
    addNewTodo(valueInput);
  }
  //addNewTodo("Hieu NNH");
    return (
      <>
      <div className="todo-new">
          <input type="text" onChange={(event) => {handleOnChange(event.target.value)}}/>
          <button style={{cursor : "pointer"}} 
          onClick={handleClick}
          >Add</button>
        </div>
        <div>
          My text input value is : {valueInput}
        </div>
      </>
        
    );
}

export default TodoNew;