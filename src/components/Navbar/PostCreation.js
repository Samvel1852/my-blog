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
import PostContainer from "./PostContainer/PostContainer";

class PostCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      posts: [],
      user: this.props.user,
    };
  }

  componentDidMount() {
    const posts = JSON.parse(localStorage.getItem("posts"));
    this.setState({
      posts,
    });
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleContentChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  sharePost = () => {
    const posts = this.state.posts ? this.state.posts : [];

    const post = {
      title: this.state.title,
      content: this.state.content,
    };

    posts.push(post);

    this.setState({
      posts,
    });

    localStorage.setItem("posts", JSON.stringify(posts));
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          margin: 10,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormGroup>
          <InputLabel htmlFor="post-title">Title</InputLabel>
          <Input
            onChange={(e) => this.handleTitleChange(e)}
            id="post-title"
          ></Input>
          <InputLabel htmlFor="post-content">Post content</InputLabel>
          <TextareaAutosize
            style={{ height: "200px", width: "500px" }}
            id="post-content"
            onChange={(e) => this.handleContentChange(e)}
          ></TextareaAutosize>
          <Button onClick={this.sharePost} variant="contained" color="primary">
            Create
          </Button>
          <PostContainer user={this.state.user} posts={this.state.posts} />
        </FormGroup>
      </div>
    );
  }
}

export default PostCreation;
