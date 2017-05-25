import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';//data import
import questions_data from '.././data/questions_data.js';

export default class Question extends Component {
  render() {
    return (
        <div className="custom-question-centered">
          <h1>Let's get started</h1>
          <Route 
                path={questions_data[0].path} 
                component={Content} />
            <Link 
                to={questions_data[this.props.currentQuestion+1].path}>
                <Button bsStyle="primary" 
                        onClick={this.props.next} >NEXT
                </Button>
            </Link>
        </div>
    );
  }
}

const Content = () => {
    return (
        <p>{questions_data[0].path}</p>)
    };