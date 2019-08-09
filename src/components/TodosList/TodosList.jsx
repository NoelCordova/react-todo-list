import React, { Component } from 'react';
import TodoElement from '../TodoElement/TodoElement';

export default class TodosList extends Component {
  render() {
    return(
      <ul>
      {
        this.props.todosList.map((todo, i) => <TodoElement key={i} todoElement={todo}></TodoElement>)
      }
      </ul>
    );
  }
}
