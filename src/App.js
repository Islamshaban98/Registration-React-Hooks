import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUpIndex from "../src/pages/SignUp/SignUpIndex";
import SignInIndex from "../src/pages/SignIn/SignInIndex";
import Welcome from "../src/pages/Welcome";
import PrivateRoute from "../src/Components/PrivateRoute";
class App extends React.Component {
  state = {
    isAuthenticated: false,
  };

  handelLogin = () => {
    this.setState({ isAuthenticated: true });
  };
  handelLogout = () => {
    this.setState({ isAuthenticated: false });
  };
  render() {
    const { isAuthenticated } = this.state;
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/SignInIndex">
              <SignInIndex handelLogin={this.handelLogin} />
            </Route>
            <Route exact path="/">
              <SignUpIndex handelLogin={this.handelLogin} />
            </Route>
            <PrivateRoute isAuthenticated={isAuthenticated} exact path="/Home">
              <Welcome handelLogout={this.handelLogout} />
            </PrivateRoute>
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/SignInIndex"
            >
              <SignInIndex />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
