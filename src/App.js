import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route exact path="/:id">
            <Post />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
