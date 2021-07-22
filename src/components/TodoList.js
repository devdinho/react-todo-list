import React, { Component } from 'react';
import styled from 'styled-components';

const TodoUL = styled.ul`
  & li {
    list-style: none;
  }
`;
export default class TodoList extends Component {

  render() {
    const { todos } = this.props;
    return (
      <TodoUL className="todo__list">
        {
          todos.map((todo, key) => <li key={ key }>{ todo }</li>)
        }
      </TodoUL>
    )
  }
}
