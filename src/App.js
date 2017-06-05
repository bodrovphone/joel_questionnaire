import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Question from './components/Question';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        questionNumber: 0,
        responses: []
      };

      this.nextQuestion = this.nextQuestion.bind(this);
      this.saveResponse = this.saveResponse.bind(this);
      this.skipQuestions = this.skipQuestions.bind(this);
    }
  
  nextQuestion(value) {
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      responses: [...this.state.responses, value]
    });
  }

  saveResponse(value) {
    
  }
  skipQuestions(value, num) {
    this.setState({
      questionNumber: this.state.questionNumber + num,
      responses: [...this.state.responses, value]
    });
  }
  render() {

    console.log('responses', this.state.responses);
    return (
        <section id="questions" className="question-box">
          <Header questionNumber={this.state.questionNumber} />
          <Question questionNumber={this.state.questionNumber}
                    nextQuestion={this.nextQuestion}
                    saveResponse={this.saveResponse}
                    skipQuestions={this.skipQuestions}
           />
        </section>
    );
  }
};

export default App;