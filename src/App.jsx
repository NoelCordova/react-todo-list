import React, { Component, Fragment } from 'react';
import NewTodoForm from './components/NewTodo/NewTodo';
import TodosList from './components/TodosList/TodosList';

export default class App extends Component {
  state = {
    message: 'React TODO\'s',
    newTodo: '',
    todos: [],
  };

  handleChangeNewTodo = event => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  handleSubmitNewTodo = event => {
    event.preventDefault();
    
    if (!this.emptyNewTodo()) {
      this.setState({
        newTodo: '',
        todos: [...this.state.todos, {
          done: false,
          title: this.state.newTodo,
        }],
      });
    } else {

    }
  };

  handleToggleTodo = (event, index) => {
    let todos = [...this.state.todos];
    todos[index] = {...todos[index],
      done: event.target.checked
    };

    this.setState({ todos });
  };

  removeTodo = (index) => {
    let todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({ todos });
  }

  emptyNewTodo = () => this.state.newTodo === '';

  render() {
    return (
      <Fragment>
        <h3>{this.state.message}</h3>

        <NewTodoForm
          newTodoValue={this.state.newTodo}
          onSubmit={this.handleSubmitNewTodo}
          onChange={this.handleChangeNewTodo}
          emptyInput={this.emptyNewTodo}>
        </NewTodoForm>

        <TodosList
          todosList={this.state.todos}
          onChange={this.handleToggleTodo}
          btnOnClick={this.removeTodo}>
        </TodosList>
      </Fragment>
    );
  };
}
