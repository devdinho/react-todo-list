import React, { Component } from 'react';
import Todo from './Todo';
export default class TodoList extends Component {

  render() {
    const { todos } = this.props;
    return (
      <ul className="todo__list">
        {
          todos.map((todo, key) => <Todo key={ key }>{ todo }</Todo>)
        }
      </ul>
    )
  }
}
