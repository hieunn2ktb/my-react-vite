const TodoData = (props:any) => {
    const {todoList,deleteTodo} = props;
const handleClick = (id:number) => {
    deleteTodo(id);
  }
    return (
        <div className="todo-data">
            { todoList.map((item , index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                    <div>{item.name}</div>
                    <button onClick={() => handleClick(item.id)}>Delete</button>
                    </div>
                );  
            })}
            <div>
                 {JSON.stringify(props.setTodoList)}
            </div>
        </div>

    );
}

export default TodoData;