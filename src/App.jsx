import React, { Component, Fragment } from 'react';
import TodosPage from './pages/Todos/Todos';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <TodosPage />
      </Fragment>
    );
  };
}
