import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { UsersListScreen } from "./view/screens";
import { HeaderWidget } from "./view/widgets";

function App() {
  return (
    <Router>
      <HeaderWidget title="Another Admin Panel App" />

      <Switch>
        <Route exact path="/">
          <UsersListScreen />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
