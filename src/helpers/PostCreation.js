import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  ClickAwayListener,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function PostCreation() {
  return (
    <div
      style={{
        width: "100%",
        margin: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FormGroup>
        <InputLabel htmlFor="post-title">Title</InputLabel>
        <Input id="post-title"></Input>
        <InputLabel htmlFor="post-content">Post content</InputLabel>
        <TextareaAutosize style={{ height: "100px" }} id="post-content">
          What's on your mind
        </TextareaAutosize>
        <Button variant="contained" color="primary">
          Create
        </Button>
      </FormGroup>
    </div>
  );
}

export default PostCreation;
