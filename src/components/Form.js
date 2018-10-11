import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

class Form extends Component {
    render () {
        return (
            <form>
                <FormGroup>
                    <FormControl
                    type="text"
                    placeholder="Enter Location..."/>
                    <FormControl.Feedback />
                    <Button onClick={this.props.weatherForecast}>Search</Button>
                </FormGroup>
            </form>
            
        );
    }
}

export default Form;