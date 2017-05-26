import { FormGroup, FormControl, Checkbox, ButtonToolbar, Button } from 'react-bootstrap';
import React, { Component } from 'react';

const q1 = () => {
      return (
      <div>
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Let's get started</h3> 
            <p>We just to grab some information of your company in order to understand your needs well, and provide you with the best solutions for you.</p>
      </div>
      );
};
q1.path = "/";

const q2 = () => {
      return (
         <div>
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Tell us about your business</h3> 
              <FormGroup bsSize="small">
                  <FormControl type="text" placeholder='Company Name' />
              </FormGroup>
              <h4>Number of imloyes including you.</h4>
               <FormGroup>
                  <Checkbox>
                    Just you
                  </Checkbox>
                  {' '}
                  <Checkbox>
                    2-9
                  </Checkbox>
                    {' '}
                  <Checkbox>
                    9-30
                  </Checkbox>
                    {' '}
                  <Checkbox>
                    3-100
                  </Checkbox>
                    {' '}
                  <Checkbox>
                    100+
                  </Checkbox>
                </FormGroup>
         </div>
         );
};
q2.path = "/business";

const q3 = () => {
      return (
      <div>
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Can you tell us breefly what does your business actuall do?</h3> 
             <FormGroup bsSize="small">
                  <FormControl type="text" placeholder='Type your answer' />
              </FormGroup>
      </div>
      );
};
q3.path = "/subject";

const q4 = () => {
      return (
      <div>
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What makes your company remarkable? unique to everone else</h3> 
             <FormGroup bsSize="small">
                  <FormControl type="text" placeholder='type your answer or select 1 or mulitple points' />
              </FormGroup>
            <ButtonToolbar bsSize="small">
                <Button bsStyle="primary">Quality</Button>
                <Button bsStyle="primary">Low Pricing</Button>
                <Button bsStyle="primary">Quick</Button>
                <Button bsStyle="primary">Customer service</Button>
                <Button bsStyle="primary">Experianced</Button>
                <Button bsStyle="primary">Stylish</Button>
                <Button bsStyle="primary">Luary</Button>
                <Button bsStyle="primary">High-End</Button>
                <Button bsStyle="primary">Affordable</Button>
                <Button bsStyle="primary">Hassel Free</Button>
                <Button bsStyle="primary">All in one</Button>
            </ButtonToolbar>
      </div>
      );
};
q4.path = "/subject";

const q5 = () => {
      return (
      <div>
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Can you tell us breefly what does your business actuall do?</h3> 
             <FormGroup bsSize="small">
                  <FormControl type="text" placeholder='Type your answer' />
              </FormGroup>
      </div>
      );
};
q5.path = "/subject";

const q6 = () => {
      return (
      <div>
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Can you tell us breefly what does your business actuall do?</h3> 
             <FormGroup bsSize="small">
                  <FormControl type="text" placeholder='Type your answer' />
              </FormGroup>
      </div>
      );
};
q6.path = "/subject";

export default [q1, q2, q3, q4, q5, q6];