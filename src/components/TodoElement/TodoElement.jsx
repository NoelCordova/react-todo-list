import React, { Component } from 'react';

export default class TodoElement extends Component {
  render() {
    return(
      <li>
        <input
          type="checkbox"
          onChange={this.props.onChange} />
          
        <span style={{
          textDecoration: this.props.todoElement.done ? 'line-through' : 'inherit'
          }}>
          {this.props.todoElement.title}
        </span>

        <button onClick={this.props.btnOnClick}>Remove</button>
      </li>
    );
  };
}
