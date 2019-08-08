import React, { Component } from 'react';

export default class TodoElement extends Component {
  render() {
    return <li>{this.props.todo.title}</li>
  };
}
