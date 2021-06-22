import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Task" />
        <button type="button">Add</button>
      </form>
    )
  }
}
