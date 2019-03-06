import React from 'react';

const TodoItem = (props) => {
  const { todo, index } = props;

  return(
    <li>
      <input type="checkbox" onChange={(event) => props.todoDone(event, index)}/>
      {/* <span style={{textDecoration: todo.done ? 'line-through' : 'inherit'}}>
        {todo.title}
      </span> */}
      <span className={todo.done ? 'done' : ''}>{todo.title}</span>
      <button style={{marginLeft: '10px'}} onClick={() => props.removeTodo(index)}>
        Remove element
      </button>
    </li>
  );
};

export default TodoItem;