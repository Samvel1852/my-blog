import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  ClickAwayListener,
} from "@material-ui/core";
import React from "react";

export default class LoginForm extends React.Component {
  static id = 0;

  constructor(props) {
    super(props);
    this.state = {
      name: props.username,
      password: props.password,
      posts: props.posts,
    };
  }

  handleLoginMaker = () => {
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("password", this.state.password);
    localStorage.setItem("id", LoginForm.id++);
    localStorage.setItem("isLogged", true);
  };

  render() {
    return (
      <FormControl>
        <InputLabel htmlFor="my-input">Log in</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Write Your Username</FormHelperText>
        <Input id="my-password" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Write Your Password</FormHelperText>
        <Button
          onClick={this.handleLoginMaker}
          variant="contained"
          color="primary"
        >
          Log in
        </Button>
      </FormControl>
    );
  }
}
