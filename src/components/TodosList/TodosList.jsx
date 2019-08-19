import React, { Component } from 'react';
import TodoElement from '../TodoElement/TodoElement';
import './TodosList.css';

export default class TodosList extends Component {
  render() {
    return(
      <ul>
      {
        this.props.todosList.map((todo, index) =>
          <TodoElement
            key={index}
            todoElement={todo}
            onChange={event => this.props.onChange(event, index)}
            btnOnClick={() => this.props.btnOnClick(index)}>
          </TodoElement>
        )
      }
      </ul>
    );
  }
}
