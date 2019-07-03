import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Header from "./components/header/Header";
import Background from "./components/Background.style";

//pages
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";

class App extends Component {
  render() {
    return (
      <Background>
        <Header />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/forecast" component={Forecast} />
        </Router>
      </Background>
    );
  }
}

export default App;
