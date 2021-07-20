import React, { Component } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  min-height: 100vh;
  align-items: center;
`;

const H1 = styled.h1`
  letter-spacing: 2px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  render() {
    return (
      <TodoContainer>
        <H1>Todo List</H1>
        <TodoForm/>
        <TodoList />
      </TodoContainer>
    );
  }
}

export default App;
