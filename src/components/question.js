import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
export default class Question extends Component {
  render() {
    return (
        <div className="custom-question-centered">
          <h1>Let's get started</h1>
          <Route path="/somewhere" component={Somewhere} />
          <Link to={'/somewhere'}>
            <Button onClick={function(){console.log('haha')}} bsStyle="primary">NEXT</Button>
          </Link>
        </div>
    );
  }
}

const Somewhere = () => (
        <p>We just to grab some information of your company in order to understand your needs well, and provide you with the best solutions for you.</p>
    );