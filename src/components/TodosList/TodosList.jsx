import React from 'react';
import TodoElement from '../TodoElement/TodoElement';
import './TodosList.css';

const TodosList = (props) => {
  return(
    <ul>
    {
      props.todosList.map((todo, index) =>
        <TodoElement
          key={index}
          todoElement={todo}
          onChange={event => props.onChange(event, index)}
          btnOnClick={() => props.btnOnClick(index)}>
        </TodoElement>
      )
    }
    </ul>
  );
};

export default TodosList;