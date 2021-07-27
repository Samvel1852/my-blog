import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostCard from "../PostCard/PostCard";

let isLoggedUser = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users")).some((user) => user.isLogged)
  : false;
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
    let loggedUser = [{ id: -6 }];
    if (localStorage.getItem("users")) {
      loggedUser = JSON.parse(localStorage.getItem("users")).filter(
        (user) => user.isLogged
      ).length
        ? JSON.parse(localStorage.getItem("users")).filter(
            (user) => user.isLogged
          )
        : [{ id: -6 }];
    }

    let postsAfterDelete = [...this.state.posts];
    if (loggedUser[0].id === authorId) {
      let deleteIndex = this.state.posts.findIndex(
        (post) => post.postId === postId && post.authorId === authorId
      );

      postsAfterDelete.splice(deleteIndex, 1);
    }
    this.setState({
      posts: postsAfterDelete,
    });
    localStorage.setItem("posts", JSON.stringify(postsAfterDelete));
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
                    date={post.date}
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
