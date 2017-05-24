import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Custom components
import Question from './components/question';

class App extends Component {
  render() {
    return (
      <section id="questions" class="question-box">
        <div class="block-fill-height">
          <div class="block block-all block-xs-middle">
            <div class="container">
              <Question />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
