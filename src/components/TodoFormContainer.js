import React from 'react'
import AddTodo from './TodoForm'

export default class TodoFormContainer extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <AddTodo onSubmit={this.submit} />
  }
}