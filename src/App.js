// import { AppBar } from "@material-ui/core";
import ButtonAppBar from "./components/Navbar/Navbar";
import PostContainer from "./components/Navbar/PostContainer/PostContainer";
import "./App.css";
import LoginForm from "./components/Navbar/LoginForm/LoginForm";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import PostCreation from "./components/Navbar/PostCreation";

function App() {
  let isLoggedUser = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users")).some((user) => user.isLogged)
    : false;

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <ButtonAppBar />
            <PostContainer logged={isLoggedUser} />
          </Route>
          <Route path="/login">
            <ButtonAppBar logged={false} />
            <LoginForm />
          </Route>
          <Route path="/logged">
            <ButtonAppBar logged={true} />
            <PostContainer logged={true} />
          </Route>
          <Route path="/create-post">
            <ButtonAppBar logged={isLoggedUser} />
            <PostCreation logged={isLoggedUser} />
            {/* <PostContainer logged={isLoggedUser} /> */}
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
