import React, { Component } from 'react';
import styled from 'styled-components';

const TodoLi = styled.li`
  list-style: none;
`;

export default class Todo extends Component {
  render() {
    const { children } = this.props;
    return <TodoLi>{ children }</TodoLi>
  }
}
