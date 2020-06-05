import React from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditTodo from "./components/EditTodo";

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
