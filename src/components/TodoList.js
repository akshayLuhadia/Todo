import React from "react";
import { connect } from "react-redux";

const style = {
  width: "50%",
  textAlign: "left",
};

const TodoList = ({ todos }) => (
  <div>
  {todos && todos.length>0? 
    <table style={style}>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {todos.map(todo=>{
        return(
          <tr>
          <td>{todo.name}</td>
          <td>{todo.createDate.toString()}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
    :
    <p>No task added</p>
    }
  </div>
);

const mapStateToProps = (state) => {
  const todos = state;
  return {todos};
};

export default connect(mapStateToProps)(TodoList);
