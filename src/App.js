import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import home from "./pages/home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Switch>
              <Route path="/" component={home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
