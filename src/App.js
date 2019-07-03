import React, { Component } from "react";

import Header from "./components/header/Header";
import Background from "./components/Background.style";

class App extends Component {
  render() {
    return (
      <Background>
        <Header />
      </Background>
    );
  }
}

export default App;
