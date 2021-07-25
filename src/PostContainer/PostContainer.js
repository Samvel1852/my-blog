import React from "react";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: localStorage.getItem("posts")
        ? JSON.parse(localStorage.getItem("posts"))
        : [],
    };
  }

  render() {
    return (
      <div>
        <b>There is no post on web-site.</b>
        <h2>Log in and be our first story teller.</h2>
      </div>
    );
  }
}

export default PostContainer;
