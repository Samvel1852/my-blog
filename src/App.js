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
          <Route exact path="/">
            <ButtonAppBar logged={false} />
            <PostContainer logged={false} />
          </Route>
          <Route path="/login">
            <ButtonAppBar logged={false} />
            <LoginForm />
          </Route>
          <Route path="/logged">
            <ButtonAppBar logged={true} />
            <PostContainer logged={true} />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
