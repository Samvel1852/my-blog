import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class PostContainer extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      posts: localStorage.getItem("posts")
        ? JSON.parse(localStorage.getItem("posts"))
        : [],
    };
  }

  // componentDidMount() {
  //   const posts = JSON.parse(localStorage.getItem("posts"));
  //   console.log(this.state.posts);
  // }

  render() {
    const { logged } = this.props;
    // console.log(this.props);
    if (this.state.posts.length === 0) {
      return logged ? (
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
                  <p>{post.title}</p>
                  <p>{post.content}</p>
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
