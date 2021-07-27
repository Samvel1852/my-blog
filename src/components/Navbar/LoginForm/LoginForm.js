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
    ? JSON.parse(localStorage.getItem("users")).length - 1
    : 1;

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: "",
      password: "",
      // posts: props.posts,
    };
  }

  handleLoginMaker = () => {
    let allUsers = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    let registeredUser = allUsers.find(
      (user) =>
        user.name === this.state.name && user.password === this.state.password
    );

    console.log(registeredUser);

    if (registeredUser) {
      let currentUserIdArr = allUsers.map((user, index) => {
        if (Number(user.id) === Number(registeredUser.id)) {
          return user.id;
        }
      });

      let currentUserId = currentUserIdArr.filter((id) => id)[0];

      let prevUsers = JSON.parse(localStorage.getItem("users"));
      prevUsers = prevUsers.map((user) => {
        if (user.id === currentUserId) {
          return Object.assign(user, { isLogged: true });
        } else {
          return Object.assign(user, { isLogged: false });
        }
      });

      this.setState({
        users: prevUsers,
      });
      localStorage.setItem("users", JSON.stringify(prevUsers));
    } else {
      let currentUser = {
        name: this.state.name,
        password: this.state.password,
        id: LoginForm.id++,
        isLogged: true,
      };

      if (localStorage.getItem("users")) {
        let prevUsers = JSON.parse(localStorage.getItem("users"));
        prevUsers = prevUsers.map((user) =>
          Object.assign(user, { isLogged: false })
        );
        let newUsers = [...prevUsers, currentUser];
        this.setState({
          users: newUsers,
        });
        localStorage.setItem("users", JSON.stringify(newUsers));
      } else {
        localStorage.setItem("users", JSON.stringify([currentUser]));
        this.setState({
          users: [currentUser],
        });
      }
    }
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
