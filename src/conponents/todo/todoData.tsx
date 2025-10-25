const TodoData = (props:any) => {
    const {name} = props;
    console.log("Props in TodoData component: ", props);
    return (
        <div className="todo-data">
          <div>learning React {props.name}</div>
            <div>learning Vite</div>
            {JSON.stringify(props.setTodoList)}
        </div>
    );
}

export default TodoData;