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

let isLoggedUser = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users")).some((user) => user.isLogged)
  : false;
class PostCreation extends React.Component {
  static postId = localStorage.getItem("posts")
    ? JSON.parse(localStorage.getItem("posts")).length + 1
    : 1;

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
    let posts = this.state.posts ? this.state.posts : [];

    let currentUser = JSON.parse(localStorage.getItem("users")).filter(
      (user) => user.isLogged
    )[0];

    const post = {
      title: this.state.title,
      content: this.state.content,
      author: currentUser.name,
      authorId: currentUser.id,
      postId: PostCreation.postId++,
      date: new Date().toLocaleDateString(),
    };

    // posts.push(post);
    posts = [...posts, post];

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
          <PostContainer
            logged={isLoggedUser}
            user={this.state.user}
            posts={this.state.posts}
            date={this.state.date}
          />
        </FormGroup>
      </div>
    );
  }
}

export default PostCreation;
