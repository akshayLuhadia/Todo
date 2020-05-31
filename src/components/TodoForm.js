import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

class AddTodo extends React.Component {
    constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    }
  render(){
return (
  <form onSubmit={this.onSubmit}>
      <div>
        <label htmlFor="taskName">Task Name</label>
        <Field name="taskName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="createDate">Create Date</label>
        <Field name="createDate" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>)

  }
    onSubmit(e) {
    e.preventDefault();
    const todo = {
        name:this.state.name,
        createDate:this.state.createDate
    };
    this.props.addTodo(todo);
    this.props.history.push("/");
  }
}

export default connect(mapStateToProps,{addTodo})(AddTodo);