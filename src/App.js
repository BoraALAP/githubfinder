import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";

import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/pages/User";
import NotFound from "./components/pages/NotFound";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import HomePage from "./components/pages/HomePage";

const App = () => {
  
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <header className="App-header">
              <NavBar />
              <div className="container">
                <Alert />
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/about" component={About} />
                  <Route path="/user/:login" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </header>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
