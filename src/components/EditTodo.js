import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { updateTodo } from "../redux/actions";
import "./AddTodo.css";
import { NavLink } from "react-router-dom";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  state = {
    name: this.props.name,
    createDate: this.props.createDate,
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
              defaultValue={this.state.name}
              onChange={this.onChange}
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
              defaultValue={new Date(this.state.createDate)}
            />
          </div>
          <Divider light />
          <div className="bottom">
            <NavLink to={"/"}>
              <Button variant="contained">CANCEL</Button>
            </NavLink>
            <Button variant="contained" color="primary" onClick={this.onSubmit}>
              UPDATE
            </Button>
          </div>
        </form>
      </div>
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const todo = {
      name: this.state.name,
      createDate: this.state.createDate,
      status: 1,
      id: this.props.id,
    };
    this.props.updateTodo(todo);
    this.props.history.push("/");
  }
}

const mapStateToProps = (state, props) => {
  console.log(props);
  let id = Number(props.match.params.id);
  let itemArr = state.todos.filter((item) => {
    return id === item.id;
  });
  let item = {
    name: "",
    createDate: new Date().toLocaleDateString(),
    status: 1,
    id: state.todos.length + 1,
  };
  return itemArr.length > 0 ? itemArr[0] : item;
};

export default connect(mapStateToProps, { updateTodo })(EditTodo);
