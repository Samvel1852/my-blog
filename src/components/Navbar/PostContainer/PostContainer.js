import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostCard from "../PostCard/PostCard";

let isLoggedUser = JSON.parse(localStorage.getItem("users")).some(
  (user) => user.isLogged
);
class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: localStorage.getItem("posts")
        ? JSON.parse(localStorage.getItem("posts"))
        : [],
      currentUser: "",
    };
  }

  handlePostRemove = (postId, authorId) => {
    let deleteIndex = this.state.posts.findIndex(
      (post) => post.postId === postId && post.authorId === authorId
    );
    console.log(deleteIndex);
  };

  render() {
    if (this.state.posts.length === 0) {
      return isLoggedUser ? (
        <div>
          <b>There is no post on web-site.</b>
          <h2>
            {" "}
            <Link to="/create-post">Create a post</Link> to share your story
          </h2>
        </div>
      ) : (
        <div>
          <b>There is no post on web-site.</b>
          <h2>
            <Link to="/login">Log in</Link> and be our first story teller.
          </h2>
          {this.state.posts.map((post, index) => {
            return (
              <div key={index}>
                <p>{post.title}</p>
                <p>{post.content}</p>
                <p>{post.author}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      {
        return (
          <div>
            {this.state.posts.map((post, index) => {
              return (
                <div key={index}>
                  <PostCard
                    style={{ margin: "5px" }}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    authorId={post.authorId}
                    postId={post.postId}
                    handlePostRemove={(postId, authorId) =>
                      this.handlePostRemove(post.postId, post.authorId)
                    }
                  />
                </div>
              );
            })}
          </div>
        );
      }
    }
  }
}

export default PostContainer;
