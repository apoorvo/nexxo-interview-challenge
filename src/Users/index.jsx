import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShowUser from "./ShowUser";

import UsersList from "./UsersList";

const Users = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users/:id">
          <ShowUser />
        </Route>
        <Route path="/users">
          <UsersList />
        </Route>
      </Switch>
    </Router>
  );
};

export default Users;
