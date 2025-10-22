import { useState } from "react";

const TodoNew = (props) => {
  console.log("Props value from App component: ", props.addNewTodo);
  const {addNewTodo} = props;
  const handleClick = () => {
    alert("Button clicked!");
  }


  const [valueInput, setValueInput] = useState("NNH");


  const handleOnChange = (event:any) => {
    setValueInput(event);
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