import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/:id" component={PostPage} />
    </Switch>
  );
}

export default App;
