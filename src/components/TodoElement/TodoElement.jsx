import React, { Component } from 'react';

export default class TodoElement extends Component {
  render() {
    return <li>{this.props.todoElement.title}</li>
  };
}
