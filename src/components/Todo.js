import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStatus } from "../redux/actions";
import Chip from "@material-ui/core/Chip";

const Todo = ({ todo, updateStatus }) => (
  <tr>
    <td className="number">{todo.id}</td>
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
          <Chip
            variant="outlined"
            size="small"
            label="Edit"
            clickable
            color="primary"
          />
        </td>
        {todo.status === 2 ? null : (
          <td onClick={() => updateStatus(todo.id)}>
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
