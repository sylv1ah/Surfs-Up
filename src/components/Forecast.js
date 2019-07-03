import React, { Component } from 'react';

class Forecast extends Component {
    render () {
        return (
            <div>
               Temperature: {this.props.temperature}
            </div>
        );
    }
    
}

export default Forecast;