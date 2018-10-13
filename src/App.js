import React, { Component } from 'react';

import './App.css';
import Form from './components/Form';
import Forecast from './components/Forecast';

//const API_KEY = "a947667ccfc59e4400c2e6cf121bbecd";

class App extends Component {

  getWeather =  (e) => {
    e.preventDefault();
    // const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    // const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=" + API_KEY  + "&units=metric";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://magicseaweed.com/api/6fe0916bc3411e1c9976784176394115/forecast/?spot_id=1&fields=timestamp,swell.*,wind.*,condition.temperature";
    const api_call =  fetch(proxyurl + url)
    .then(response => response.json())
    .then(contents => console.log(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    .catch(err => console.log('Fetch error :', err));
    //const data = api_call.json();
    console.log(api_call);
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
