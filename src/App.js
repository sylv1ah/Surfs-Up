import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Surfs up</h1>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Enter Location..."/>
          <FormControl.Feedback />
          <Button>Search</Button>
        </FormGroup>
        
      </div>
    );
  }
}

export default App;
