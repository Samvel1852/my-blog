import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  ClickAwayListener,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
  static id = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users")).length
    : 0;

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      name: "",
      password: "",
      posts: props.posts,
    };
  }

  handleLoginMaker = () => {
    if (localStorage.getItem("users")) {
      console.log(JSON.parse(localStorage.getItem("users")));
      const prevUsers = JSON.parse(localStorage.getItem("users"));
      const newUsers = prevUsers;
      newUsers.push({
        name: this.state.name,
        password: this.state.password,
        id: LoginForm.id++,
        isLogged: true,
      });

      localStorage.setItem("users", JSON.stringify(newUsers));
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            name: this.state.name,
            password: this.state.password,
            id: LoginForm.id++,
            isLogged: true,
          },
        ])
      );
    }
    // localStorage.setItem("name", this.state.name);
    // localStorage.setItem("password", this.state.password);
    // localStorage.setItem("id", LoginForm.id++);
    // localStorage.setItem("isLogged", true);
  };

  handleNameValue = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handlePasswordValue = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <FormGroup>
        <InputLabel htmlFor="my-input">Log in</InputLabel>
        <Input
          onChange={(e) => this.handleNameValue(e)}
          id="my-input"
          aria-describedby="my-helper-text"
        />
        <FormHelperText id="my-helper-text">Write Your Username</FormHelperText>
        <Input
          type="password"
          onChange={(e) => this.handlePasswordValue(e)}
          id="my-password"
          aria-describedby="my-helper-text"
        />
        <FormHelperText id="my-helper-text">Write Your Password</FormHelperText>
        <Link to="/logged">
          <Button
            onClick={this.handleLoginMaker}
            variant="contained"
            color="primary"
          >
            Log in
          </Button>
        </Link>
      </FormGroup>
    );
  }
}
