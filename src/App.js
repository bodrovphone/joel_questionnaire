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
      this.nextQuestion = this.nextQuestion.bind(this);
    }
  nextQuestion() {
    this.setState({
      ...this.state, questionNumber: this.state.questionNumber + 1
    });
  }
  render() {
    console.log("from App:", this.state);
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
                <Question nextQuestion={this.nextQuestion} currentQuestion={this.state.questionNumber}/>
              </div>
            </div>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
