import React, { Component } from 'react';
import styled from 'styled-components';

const Forms = styled.form`
  border: 1px solid;
  padding: 10px 25px;
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
        <input
          value={ todo }
          onChange={ this.handleChange }
          type="text"
          placeholder="Task"
        />
        <button type="button">Add</button>
      </Forms>
    );
  }
}
