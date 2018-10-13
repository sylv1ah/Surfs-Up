import React, { Component } from 'react';

import './App.css';
import Form from './components/Form';
import Forecast from './components/Forecast';

const API_KEY = "a947667ccfc59e4400c2e6cf121bbecd";

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=" + API_KEY  + "&units=metric";
    const api_call = await fetch(url);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <h1>Surfs Up</h1>
        <Form weatherForecast={this.getWeather}/>
        <br/>
        <Forecast/>
      </div>
    );
  }
}

export default App;
