import React from 'react';

const TodoElement = (props) => {
  return(
    <li>
      <input
        type="checkbox"
        onChange={props.onChange} />
        
      <span style={{
        textDecoration: props.todoElement.done ? 'line-through' : 'inherit'
        }}>
        {props.todoElement.title}
      </span>

      <button onClick={props.btnOnClick}>Remove</button>
    </li>
  );
};

export default TodoElement;