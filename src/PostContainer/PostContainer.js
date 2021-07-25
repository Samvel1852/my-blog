import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
        <div>
          <b>There is no post on web-site.</b>
          <h2>
            {" "}
            <Link to="/login">Log in</Link> and be our first story teller.
          </h2>
        </div>
      </Router>
    );
  }
}

export default PostContainer;
