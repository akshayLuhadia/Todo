import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList"
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <div className="buttonContainer">
          <Button variant="contained" color="primary">Primary</Button>
        </div>
        <Divider light />
        <div className="todoListContainer">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
