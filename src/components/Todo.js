import React from "react";
import { connect } from "react-redux";
import { updateStatus } from "../redux/actions";
import Chip from "@material-ui/core/Chip";
import { NavLink } from "react-router-dom";
import "./Todo.css";

const Todo = ({ todo, number, updateStatus }) => (
  <tr>
    <td className="number">{number}</td>
    <td className="name">{todo.name}</td>
    <td className="status">
      {todo.status === 1 ? (
        <Chip label="Undone" color="secondary" />
      ) : (
        <Chip label="Done" style={{ backgroundColor: "lightseagreen" }} />
      )}
    </td>
    <td className="action">
      <tr className="noPadding">
        <td>
          <NavLink to={`/EditTodo/${todo.id}`}>
            <Chip
              variant="outlined"
              size="small"
              label="Edit"
              clickable
              color="primary"
            />
          </NavLink>
        </td>
        {todo.status === 2 ? null : (
          <td onClick={() => updateStatus(todo)}>
            <Chip
              variant="outlined"
              size="small"
              label="Done"
              clickable
              color="primary"
            />
          </td>
        )}
      </tr>
    </td>
  </tr>
);

export default connect(null, { updateStatus })(Todo);
