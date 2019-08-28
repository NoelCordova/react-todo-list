import React from 'react';
import './NewTodo.css';

const NewFormTodo = (props) => {
  return (
    <form className="newForm" onSubmit={props.onSubmit}>
      <div className="newForm__input-element">
        <label htmlFor="newTodo">New Todo</label>
        <input 
          type="text"
          id="newTodo"
          name="newTodo"
          value={props.newTodoValue}
          onChange={props.onChange} />
          
        {
          props.emptyInput &&
          <p>Input vacío</p>
        }
      </div>

      <div className="submitBtn">
        <button type="submit">Create TODO</button>
      </div>
    </form>
  );
};

export default NewFormTodo;