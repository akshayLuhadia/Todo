import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import MainContainer from "./components/MainContainer";
import AddTodo from "./components/AddTodo";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import EditTodo from "./components/EditTodo";
import { connect } from "react-redux";
import { clearTasks } from "./redux/actions";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="AppContainer">
          <Route exact path="/" component={MainContainer} />
          <Route path="/AddTodo" component={AddTodo} />
          <Route path="/EditTodo/:id" component={EditTodo} />
        </div>
      </Router>
    </div>
  );
}

export default App;
