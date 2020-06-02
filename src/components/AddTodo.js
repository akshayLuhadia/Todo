import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import "./AddTodo.css";
import { NavLink } from "react-router-dom";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  state = {
    name: "",
    createDate: new Date().toLocaleDateString(),
    error: false,
  };
  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.onSubmit}>
          <div className="top">
            <TextField
              name="name"
              className="nameInput"
              id="outlined-full-width"
              label="Name"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={this.onChange}
              error={this.state.error}
              helperText={this.state.error ? "Name cannot be empty" : ""}
            />
            <TextField
              name="createDate"
              id="date"
              style={{ width: "50%" }}
              label="Create date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.onChange}
            />
          </div>
          <Divider light />
          <div className="bottom">
            <NavLink to={"/"}>
              <Button variant="contained">CANCEL</Button>
            </NavLink>
            <Button variant="contained" color="primary" onClick={this.onSubmit}>
              CREATE
            </Button>
          </div>
        </form>
      </div>
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value, error: false });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.name === "") {
      this.setState({ error: true });
    } else {
      const todo = {
        name: this.state.name,
        createDate: this.state.createDate,
        status: 1,
        id: this.props.todosLength + 1,
      };
      this.props.addTodo(todo);
      this.props.history.push("/");
    }
  }
}

const mapStateToProps = (state, props) => {
  return { todosLength: state.todos.length };
};

export default connect(mapStateToProps, { addTodo })(AddTodo);
