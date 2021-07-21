import React, { Component } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const TodoContainer = styled.div`
  align-items: center;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 100vh;
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

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <TodoContainer>
        <H1>Todo List</H1>
        <TodoForm addTodo={ this.addTodo } />
        <TodoList todos={ todos } />
      </TodoContainer>
    );
  }
}

export default App;
