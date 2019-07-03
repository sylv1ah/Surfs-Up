import React, { Component } from "react";

import Header from "./components/header/Header";
import Background from "./components/Background.style";
import Search from "./components/search/Search";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Background>
          <Header />
          <Search />
        </Background>
      </React.Fragment>
    );
  }
}

export default App;
