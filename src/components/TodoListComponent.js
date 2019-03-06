import React from 'react';
import TodoItem from './TodoItemComponent';

const TodoList = (props) => {
  return(
    <ul>
    {
      props.todos.map((todo, index) => {
        return(
          <TodoItem 
            key={index}
            index={index}
            todo={todo}
            todoDone={props.todoDone}
            removeTodo={props.removeTodo} />
        );
      })
    }
    </ul>
  );
};

export default TodoList;