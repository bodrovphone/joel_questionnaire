import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';//data import
import questions_data from '.././data/questions_data.js';

export default class Question extends Component {
//   window.onhashchange = function() {
    
// }
  render() {
// path={`/joel_questionnaire${questions_data[this.props.currentQuestion].path}`} 
console.log(questions_data[this.props.currentQuestion].path);
    return (
        <div>
          <Route path={`${questions_data[this.props.currentQuestion].path}`} component={Content(this.props)}/>
          <Link 
              to={questions_data[this.props.currentQuestion+1].path}>
              <div className="custom-question-centered">
                <Button bsStyle="primary" 
                        onClick={this.props.nextQuestion} >NEXT
                </Button>
              </div>
          </Link>
        </div>
    );
  }
}

const Content = (props) => {
    return questions_data[props.currentQuestion];
}