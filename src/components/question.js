import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
export default class Question extends Component {
  render() {
    return (
        <div className="custom-question-centered">
          <h1>Let's get started</h1>
          <p>We just to grab some information of your company in order to understand your needs well, and provide you with the best solutions for you.</p>
          <Button onClick={function(){console.log('haha')}} bsStyle="primary">NEXT</Button>
        </div>
    );
  }
}
