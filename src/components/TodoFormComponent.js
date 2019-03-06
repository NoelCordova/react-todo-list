import React from 'react';

const TodoForm = (props) => {
  return(
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newTodo">New TODO</label>
      <input id="newTodo" type="text" value={props.newTodo} onChange={props.newTodoChanged} />
      <button type="submit">Add TODO</button>
    </form>
  );
};

export default TodoForm;