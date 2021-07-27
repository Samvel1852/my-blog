import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostCard from "../PostCard/PostCard";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      posts: localStorage.getItem("posts")
        ? JSON.parse(localStorage.getItem("posts"))
        : [],
      currentUser: "",
    };
  }

  // componentDidMount() {
  //   const posts = JSON.parse(localStorage.getItem("posts"));
  //   console.log(this.state.posts);
  // }

  componentDidUpdate() {
    return (
      <div>
        {this.state.posts.map((post, index) => {
          return (
            <div key={index}>
              <PostCard
                style={{ margin: "5px" }}
                title={post.title}
                content={post.content}
                user={"user"}
              />
            </div>
          );
        })}
      </div>
    );
  }

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
                  <PostCard
                    style={{ margin: "5px" }}
                    title={post.title}
                    content={post.content}
                    user={"user"}
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
