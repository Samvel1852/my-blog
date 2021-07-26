// import { AppBar } from "@material-ui/core";
import ButtonAppBar from "./components/Navbar/Navbar";
import PostContainer from "./components/Navbar/PostContainer/PostContainer";
import "./App.css";
import LoginForm from "./components/Navbar/LoginForm/LoginForm";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <ButtonAppBar />
          <Route exact path="/">
            <PostContainer />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
