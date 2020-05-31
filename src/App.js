import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import AddTodo from "./components/TodoForm";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <div className="AppContainer">
        <Route exact path="/" component={MainContainer} />
        <Route path="/AddTodo" component={AddTodo} />
      </div>
    </Router>
    </div>
  );
}

function MainContainer(){
  return (<div>
        <div className="buttonContainer">
        <NavLink to={"/AddTodo"}>
          <Button variant="contained" color="primary">ADD TASK</Button>
        </NavLink>
        </div>
        <Divider light />
        <div className="todoListContainer">
          <TodoList />
        </div>
      </div>)
}

export default App;
