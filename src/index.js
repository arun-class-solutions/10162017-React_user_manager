import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import UserList from "./UserList";
import EditUser from "./EditUser";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={UserList} />
      <Route exact path="/edit/:id" component={EditUser} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
