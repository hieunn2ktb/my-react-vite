const TodoData = (props:any) => {
    const {name} = props;
    return (
        <div className="todo-data">
          <div>learning React {props.name}</div>
            <div>learning Vite</div>
        </div>
    );
}

export default TodoData;