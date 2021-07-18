import React, { Component } from 'react';
import styled from 'styled-components';

const Forms = styled.form`
  display: flex;
  gap: 4px;
  border: 1px solid;
  padding: 10px 25px;
  background: red;
`;

const Input = styled.input`
  padding: 6px 10px;
`;

const Button = styled.button`
  font-size: 1rem;
`;

export default class Form extends Component {
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

  render() {
    const { todo } = this.state;
    return (
      <Forms>
        <Input onChange={ this.handleChange }/>
        <Button type="button">Add</Button>
      </Forms>
    );
  }
}
