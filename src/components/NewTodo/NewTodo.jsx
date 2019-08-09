import React, { Component } from 'react';
import './NewTodo.css';

export default class NewTodoForm extends Component {
  render() {
    return (
      <form className="newForm" onSubmit={this.props.onSubmit}>
        <div className="newForm__input-element">
          <label htmlFor="newTodo">New Todo</label>
          <input 
            type="text"
            id="newTodo"
            name="newTodo"
            value={this.props.newTodoValue}
            onChange={this.props.onChange} />
            
          {
            this.props.emptyInput &&
            <p>Input vacío</p>
          }
        </div>

        <div className="submitBtn">
          <button type="submit">Create TODO</button>
        </div>
      </form>
    );
  };
}
