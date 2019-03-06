import React, { Component } from 'react';
import TodoForm from './components/TodoFormComponent';
import TodoList from './components/TodoListComponent';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      message: 'Todo List',
      newTodo: '',
      todos: [{ title: 'Learn React', done: false }]
    }
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  newTodoChanged(event) {
    this.setState({ newTodo: event.target.value });
  }

  todoDone(event, index) {
    const todos = [...this.state.todos];
    todos[index].done = event.target.checked;
    
    this.setState({ todos });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({ todos });
  }

  allDone(event) {
    let todos = [...this.state.todos];
    todos.forEach((value, index) => todos[index].done = event.target.checked);

    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>

        <TodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)} />

        <label htmlFor="allDone">All done?</label>
        <input id="allDone" type="checkbox" onChange={(event) => this.allDone(event)}/>

        <TodoList 
          todos={this.state.todos}
          todoDone={this.todoDone.bind(this)} 
          removeTodo={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
