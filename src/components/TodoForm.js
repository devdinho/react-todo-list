import React, { Component } from 'react';
import styled from 'styled-components';

const Forms = styled.form`
  gap: 6px;
  display: flex;
  border: 1px solid;
  padding: 12px 24px;
  border-radius: 3px;
`;

const Input = styled.input`
  padding: 6px 10px;
  border: 1px solid grey;
  border-radius: 3px;
`;


const Button = styled.button`
  font-size: .8rem;
  font-weight: 500;
  border-radius: 3px;
  padding: 6px 10px;
`;

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ todo: value });
  }

  submitTodo = () => {
    const { todo } = this.state;
    const { addTodo } = this.props;
    addTodo(todo);
  }

  render() {
    return (
      <Forms>
        <Input
          onChange={ this.handleChange }
          placeholder='Add task'
        />
        <Button
          onClick={ this.submitTodo }
          type="button"
        >
            Add
        </Button>
      </Forms>
    );
  }
}
