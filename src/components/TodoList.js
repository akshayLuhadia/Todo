import React from "react";
import { connect } from "react-redux";
import "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos }) => (
  <div className="todoList">
    {todos && todos.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th className="number">#</th>
            <th className="name">Task Name</th>
            <th className="status">Status</th>
            <th className="action">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, key) => {
            return <Todo todo={todo} number={key + 1} />;
          })}
        </tbody>
      </table>
    ) : (
      <p>No task added</p>
    )}
  </div>
);

const mapStateToProps = (state) => {
  const todos = state.todos;
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
