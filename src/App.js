import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";
import MyPosts from "./pages/MyPosts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route exact path="/posts/:id">
            <Post />
          </Route>
          <Route exact path="/create">
            <CreatePost />
          </Route>
          <Route exact path="/my">
            <MyPosts />
          </Route>
        </Switch>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </>
  );
}

export default App;
