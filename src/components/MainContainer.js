import React from "react";
import "../App.css";
import TodoList from "./TodoList";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearTasks } from "../redux/actions";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="buttonContainer">
          <div className="left">
            <NavLink to={"/AddTodo"}>
              <Button variant="contained" color="primary">
                ADD TASK
              </Button>
            </NavLink>
          </div>
          {this.props.todosCount ? (
            <div className="right">
              <Button
                variant="contained"
                color="primary"
                onClick={() => this.props.clearTasks()}
              >
                Clear done tasks
              </Button>
            </div>
          ) : null}
        </div>
        <Divider light />
        <div className="todoListContainer">
          <TodoList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todosCount: state.todos.length };
};

export default connect(mapStateToProps, { clearTasks })(MainContainer);
