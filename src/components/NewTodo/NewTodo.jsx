import React, { Component } from 'react';

export default class NewTodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label htmlFor="newTodo">New Todo</label>
        <input 
          type="text"
          id="newTodo"
          name="newTodo"
          value={this.props.newTodoValue}
          onChange={this.props.onChange} />

        <button type="submit">Create TODO</button>
      </form>
    );
  };
}
