import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { HashRouter as Router, Link, Route } from 'react-router-dom';
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
    }
  
  nextQuestion(e) {
    this.setState({
      questionNumber: this.state.questionNumber + 1
    });
  }

  render() {
    return (
        <section id="questions" className="question-box">
          <Header questionNumber={this.state.questionNumber} />
          <Question questionNumber={this.state.questionNumber}
                    nextQuestion={this.nextQuestion}
           />
        </section>
    );
  }
};

export default App;

// class Question extends Component {
//   componentDidUpdate() {
//     var href = window.location.href
//     var sliceSinceIt = href.lastIndexOf("/");
//     var final = href.slice(sliceSinceIt);
//     questions_data.map((item, index) => {
//       if (item.path === final) {
//           console.log("number of the question", index);
//       }
//     });
//   }
//   render() {
// // path={`/joel_questionnaire${questions_data[this.props.currentQuestion].path}`} 
// // <Route path={questions_data[this.props.currentQuestion-1].path}} component={Content(this.props)}/>

//     return (
//         <div>
//            {
//             questions_data.map(
//               (item, index) => <Route exact path={item.path} component={item} key={item.path + index} />
//             )
//             }
//             {
//               questions_data.map(
//               (item, index) => {
//                 if (index >= 20) return;
//                 return (
//                 <Route exact path={item.path} render={ () => 
//                   <Link 
//                       to={questions_data[index+1].path}>
//                       <div className="custom-question-centered">
//                         <Button bsStyle="primary" data-custom={item.path}
//                                 onClick={
//                                   this.props.nextQuestion
//                                 } >NEXT
//                         </Button>
//                       </div>
//                   </Link>
//               } key={item.path + index + 1} /> 
//               ) 
//               }
//             )
//             }
          
//         </div>
//     );
//   }
// }