import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "./components/Home";
import Channels from "./components/Channels";
import Events from "./components/Events";
import "./App.css";

export default function App() {
  return (
    <Router>
      <header>
        <h2 className="logo">React app</h2>
        <nav>
          <NavLink to="/" exact className="nav" activeClassName="nav-active">
            Home
          </NavLink>
          <NavLink to="/channels" className="nav" activeClassName="nav-active">
            Channels
          </NavLink>
          <NavLink to="/events" className="nav" activeClassName="nav-active">
            Events
          </NavLink>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/channels" component={Channels} />
        <Route path="/events" render={props => <Events {...props} />} />
      </Switch>
    </Router>
  );
}
