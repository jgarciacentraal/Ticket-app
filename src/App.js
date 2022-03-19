import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login/Login";
import Ticket from "./pages/Ticket/Ticket";

import { Nav } from "components/Nav/Nav";

export default function App() {
  return (
    <>
      <Nav />

      <Router>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/ticket" component={Ticket} />
          <Route exact path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </>
  );
}
