import React, { Component } from 'react';

class Form extends Component {
    render () {
        return (

                <form onSubmit={this.props.weatherForecast}>
                    {/* <input type="text" name="city" placeholder="Enter City..."/>
                    <input type="text" name="country" placeholder="Enter Country..."/> 
                    <input type="text" name="location" placeholder="Enter Location..."/> */}
                    <select id="choose-location">
                        <option value="">Choose Location...</option>
                        <option value="Cornwall, UK">Cornwall, UK</option>
                        <option value="Canggu, Indonesia">Canggu, Indonesia</option>
                    </select>
                    <button>Search</button>
                </form>
            
        );
    }
}

export default Form;