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
      </tbody>
    </table>
    :
    <h3>No task added</h3>
    }
  </div>
);

const mapStateToProps = (state) => {
  console.log(state);
  return [];
};

export default connect(mapStateToProps)(TodoList);
