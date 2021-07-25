// import { AppBar } from "@material-ui/core";
import ButtonAppBar from "./Navbar/Navbar";
import PostContainer from "./PostContainer/PostContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <PostContainer />
    </div>
  );
}

export default App;
