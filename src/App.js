import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//bootstrap components
import {  ProgressBar, Button } from 'react-bootstrap';
//Custom components
import questions_data from './data/questions_data.js';

    
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        questionNumber: 0,
        responses: []
      };
      this.nextQuestion = this.nextQuestion.bind(this);
    
    }
  
  nextQuestion(e) {
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
              <ProgressBar now={this.state.questionNumber * 5} />
            </div>  
          </div>
          <div className="block-fill-height">
            <div className="block block-all block-xs-middle">
              <div className="container">
                <Question nextQuestion={this.nextQuestion}/>
              </div>
            </div>
          </div>
        </section>
      </Router>
    );
  }
}

class Question extends Component {
  componentDidUpdate() {
    var href = window.location.href
    var sliceSinceIt = href.lastIndexOf("/");
    var final = href.slice(sliceSinceIt);
    questions_data.map((item, index) => {
      if (item.path === final) {
          console.log("number of the question", index);
      }
    });
  }
  render() {
// path={`/joel_questionnaire${questions_data[this.props.currentQuestion].path}`} 
// <Route path={questions_data[this.props.currentQuestion-1].path}} component={Content(this.props)}/>

    return (
        <div>
           {
            questions_data.map(
              (item, index) => <Route exact path={`/joel_questionnaire${item.path}`} component={item} key={item.path + index} />
            )
            }
            {
              questions_data.map(
              (item, index) => {
                if (index >= 20) return;
                return (
                <Route exact path={`/joel_questionnaire${item.path}`} render={ () => 
                  <Link 
                      to={`/joel_questionnaire${questions_data[index+1].path}`}>
                      <div className="custom-question-centered">
                        <Button bsStyle="primary" data-custom={item.path}
                                onClick={
                                  this.props.nextQuestion
                                } >NEXT
                        </Button>
                      </div>
                  </Link>
              } key={item.path + index + 1} /> 
              ) 
              }
            )
            }
          
        </div>
    );
  }
}


export default App;
