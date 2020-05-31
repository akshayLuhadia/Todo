import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import {addTodo} from "../redux/actions"

class AddTodo extends React.Component {
    constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    }
    state={
      name:"",
      createDate:new Date()
    };
  render(){
return (
  <form onSubmit={this.onSubmit}>
      <div>
        <label htmlFor="taskName">Task Name</label>
        <input type="text" name="name" id="taskName" defaultValue={this.state.name} onChange={this.onChange} required />
      </div>
      <div>
        <label htmlFor="createDate">Create Date</label>
        {/* input */}
      </div>
      <button type="submit">Submit</button>
    </form>)

  }

   onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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

const mapStateToProps = (state, props) => {
  return { props };
};

export default connect(mapStateToProps,{addTodo})(AddTodo);