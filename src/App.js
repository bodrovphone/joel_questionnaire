import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
//bootstrap components
import {  ProgressBar } from 'react-bootstrap';
//Custom components(smarts)
import Question from './components/question';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        questionNumber: 0,
        responses: []
      };
    }
  render() {
    return (
      <Router>
        <section id="questions" className="question-box">
          <div className="container-fluid custom-header">
            <div className="custom-progress-wrapper">
              <ProgressBar now={1} />
            </div>  
          </div>
          <div className="block-fill-height">
            <div className="block block-all block-xs-middle">
              <div className="container">
                <Question />
              </div>
            </div>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
