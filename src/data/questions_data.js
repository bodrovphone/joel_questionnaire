import { FormGroup, FormControl, Radio, ButtonToolbar, Button } from 'react-bootstrap';
import React from 'react';

const q1 = (props) => {
      return (
      <div className="custom-question-centered">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Let's get started</h3> 
            <p onClick={() => console.log(props.item)}>We just to grab some information of your company in order to understand your needs well, and provide you with the best solutions for you.</p>
      </div>
      );
};
q1.path = "/";

const q2 = () => {
      return (
            <div className="custom-question-centered">
                <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Tell us about your business</h3> 
                  <FormGroup bsSize="small">
                    <FormControl type="text" placeholder='Company Name'/>
                </FormGroup>
                <h6>Number of emloyes including you.</h6>
               <FormGroup>
                  <Radio name="radioGroup">
                    Just you
                  </Radio>
                  {' '}
                  <Radio name="radioGroup">
                    2-9
                  </Radio>
                    {' '}
                  <Radio name="radioGroup">
                    9-30
                  </Radio>
                    {' '}
                  <Radio name="radioGroup">
                    3-100
                  </Radio>
                    {' '}
                  <Radio name="radioGroup">
                    100+
                  </Radio>
                </FormGroup>
         </div>
         );
};
q2.path = "/business";

const q3 = () => {
      return (
      <div className="custom-question-centered">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Can you tell us breefly what does your business actually do?</h3> 
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
                  <div className="custom-question-centered">
                        <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What makes your company remarkable? unique to everone else</h3> 
                        <FormGroup bsSize="small">
                            <FormControl type="text" placeholder='type your answer or select 1 or mulitple points' />
                        </FormGroup>
                  </div>
                  <div className="custom-buttons-centered">
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
            </div>
      );
};
q4.path = "/remarkable";

const q5 = () => {
      return (
      <div className="custom-question-centered">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What are your main competitors?</h3> 
             <FormGroup bsSize="small">
                  <FormControl type="text" placeholder='Type your answer' />
              </FormGroup>
      </div>
      );
};
q5.path = "/competitors";

const q6 = () => {
      return (
      <div className="custom-question-centered">
            <h5 className="m-t-0 m-b-lg bl-blue-dark display-2">About your website goals</h5>
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What type of website do you need?</h3> 
            <h6>Select 1 of the options.</h6>
            <FormGroup>
                  <Radio name='radioGroup1'>
                    Informational
                  </Radio>
                    {' '}
                  <Radio name='radioGroup1'>
                    Portfolio
                  </Radio>
                    {' '}
                  <Radio name='radioGroup1'>
                    Catalog
                  </Radio>
                    {' '}
                  <Radio name='radioGroup1'>
                    Compaign
                  </Radio>
                </FormGroup>
      </div>
      );
};
q6.path = "/type";

const q7 = () => {
      return (
      <div className="custom-question-centered">
            <h5 className="m-t-0 m-b-lg bl-blue-dark display-2">About your website goals</h5>
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What is the main goal or purpose of the site?</h3> 
            <h6>Select 1 off the options</h6>
            <FormGroup>
                  <Radio name='radioGroup2'>
                    Simply Online Presence
                  </Radio>
                  {' '}
                  <Radio name='radioGroup2'>
                    Show Off
                  </Radio>
                    {' '}
                  <Radio name='radioGroup2'>
                    Inspire/Branding
                  </Radio>
                    {' '}
                  <Radio name='radioGroup2'>
                    Drive sales
                  </Radio>
                </FormGroup>
      </div>
      );
};
q7.path = "/purpose";

const q8 = () => {
      return (
            <div>
                  <div className="custom-question-centered">
                        <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Who are your target audience</h3> 
                        <FormGroup bsSize="small">
                            <FormControl type="text" placeholder='type your answer or select 1 or mulitple points' />
                        </FormGroup>
                  </div>
                  <div className="custom-buttons-centered">
                        <ButtonToolbar bsSize="small">
                            <Button bsStyle="primary">Upper class</Button>
                            <Button bsStyle="primary">Middle class</Button>
                            <Button bsStyle="primary">Lower Class</Button>
                            <Button bsStyle="primary">Enterpreneus</Button>
                            <Button bsStyle="primary">Working Class</Button>
                            <Button bsStyle="primary">Low Income</Button>
                            <Button bsStyle="primary">Local Community</Button>
                            <Button bsStyle="primary">Don't know</Button>
                        </ButtonToolbar>
                  </div>
            </div>
      );
};
q8.path = "/audience";

const q9 = () => {
      return (
            <div className="custom-question-centered">
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you currently have a website?</h3> 
                  <ButtonToolbar bsSize="small">
                      <Button bsStyle="primary">Yes</Button>
                      <Button bsStyle="primary">No</Button>
                  </ButtonToolbar>
                  <h6 className="m-t-0 m-b-lg bl-blue-dark display-2">Please type in your website address</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='http://' />
                  </FormGroup>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What DO YOU like about it?</h3> 
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='Type your answer' />
                  </FormGroup>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">And what DON'T YOU like about it?</h3> 
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='Type your answer' />
                  </FormGroup>
            </div>
      );
};
q9.path = "/website";

const q10 = () => {
      return (
            <div className="custom-question-centered">
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What will be written on the website?</h3>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">do you already have writing?</h3>
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='type your answer or select 1 or mulitple points' />
                  </FormGroup>
                  <ButtonToolbar bsSize="small">
                      <Button bsStyle="primary">Yes I have</Button>
                      <Button bsStyle="primary">From Old site</Button>
                      <Button bsStyle="primary">Please Provide me</Button>
                  </ButtonToolbar>
            </div>
      );
};
q10.path = "/writings";

const q11 = () => {
      return (
            <div className="custom-question-centered">
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Btw, Who do you think will be maintaining and updating the site?</h3>
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='type your answer or select 1 or mulitple points' />
                  </FormGroup>
                  <ButtonToolbar bsSize="small">
                      <Button bsStyle="primary">My Self</Button>
                      <Button bsStyle="primary">Employe</Button>
                      <Button bsStyle="primary">Tell me about Your Maintence and updating plans</Button>
                  </ButtonToolbar>
            </div>
      );
};
q11.path = "/support";

const q12 = () => {
      return (
            <div className="custom-question-centered">
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">List a few similar websites which you felt were well done.</h3>
                  <h6>Please type in your website address</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='htt://' />
                  </FormGroup>
                  <h6>Please type in your website address</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='htt://' />
                  </FormGroup>
                  <h6>Please type in your website address</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='htt://' />
                  </FormGroup>
                  <h6>Please type in your website address</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='htt://' />
                  </FormGroup>
            </div>
      );
};
q12.path = "/welldone";

const q13 = () => {
      return (
            <div className="custom-question-centered">
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you currently have a Domain</h3>
                  <ButtonToolbar bsSize="small">
                      <Button bsStyle="primary">Yes</Button>
                      <Button bsStyle="primary">No</Button>
                  </ButtonToolbar>
                  <h6>Please type in your domain name</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='www' />
                  </FormGroup>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Which domain client</h3>
                  <ButtonToolbar bsSize="small">
                      <Button bsStyle="primary">Go Daddy</Button>
                      <Button bsStyle="primary">Register.com</Button>
                      <Button bsStyle="primary">Other</Button>
                  </ButtonToolbar>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Please provide us your domain Log-in</h3>
                  <h6>Please type in your domain name</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='User' />
                      <FormControl type="password" placeholder='Password' />
                  </FormGroup>
            </div>
      );
};
q13.path = "/domain";

const q14 = () => {
      return (
            <div className="custom-question-centered">
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you have email with your domain</h3>
                  <ButtonToolbar bsSize="small">
                      <Button bsStyle="primary">Yes</Button>
                      <Button bsStyle="primary">No</Button>
                  </ButtonToolbar>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">How do you use your email</h3>
                  <ButtonToolbar bsSize="small">
                      <Button bsStyle="primary">Gmail</Button>
                      <Button bsStyle="primary">Outlook</Button>
                      <Button bsStyle="primary">Other</Button>
                  </ButtonToolbar>
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='Type your answer' />
                  </FormGroup>
            </div>
      );
};
q14.path = "/email";

const q15 = () => {
      return (
            <div>
                  <div className="custom-question-centered">
                        <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you have a hosting provider?</h3>
                        <ButtonToolbar bsSize="small">
                            <Button bsStyle="primary">Yes</Button>
                            <Button bsStyle="primary">No</Button>
                        </ButtonToolbar>
                        <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Which Hosting Provider?</h3>
                  </div>
                  <div className="custom-buttons-centered">
                        <ButtonToolbar bsSize="small">
                            <Button bsStyle="primary">Go Daddy</Button>
                            <Button bsStyle="primary">Blue Host</Button>
                            <Button bsStyle="primary">Host Gator</Button>
                            <Button bsStyle="primary">ix web hosting</Button>
                            <Button bsStyle="primary">1&1</Button>
                            <Button bsStyle="primary">Other</Button>
                        </ButtonToolbar>
                  </div>
                  <div className="custom-question-centered">
                        <FormGroup bsSize="small">
                            <FormControl type="text" placeholder='Type your answer' />
                        </FormGroup>
                        <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Please provide us your FTP Log-in</h3>
                        <h6>Please type in your domain name</h6>
                        <FormGroup bsSize="small">
                            <FormControl type="text" placeholder='User' />
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <FormControl type="password" placeholder='Password' />
                        </FormGroup>
                  </div>
            </div>
      );
};
q15.path = "/hosting";

const q16 = () => {
      return (
            <div className="custom-question-centered">
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Enter email you want the contact form on site to go to</h3>
                  <h6>Please type in your domain name</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="email" placeholder='Email' />
                  </FormGroup>
                  <h6>List all the other emails you want to list on the site</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="email" placeholder='Email' />
                      <FormControl type="email" placeholder='Email' />
                  </FormGroup>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Enter the phone number you want to show on the site</h3>
                  <h6>Please type in your phone number</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="tell" placeholder='Number' />
                  </FormGroup>
                  <h6>List all the other phonr numbers you want to list on the site</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="tell" placeholder='Number' />
                      <FormControl type="tell" placeholder='Number' />
                  </FormGroup>
            </div>
      );
};
q16.path = "/contacts";

const q17 = () => {
      return (
            <div className="custom-question-centered">
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Company location, Please write if you want to show on site a address</h3>
                  <h6>Optional if you want to show</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="address" placeholder='address' />
                  </FormGroup>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you have social media Twitter, facebook, Instagram, Google+?</h3>
                  <ButtonToolbar bsSize="small">
                      <Button bsStyle="primary">Yes</Button>
                      <Button bsStyle="primary">No</Button>
                  </ButtonToolbar>
                  <h6>List your social media here</h6>
                  <FormGroup bsSize="small">
                      <FormControl type="url" placeholder='Twitter' />
                      <FormControl type="url" placeholder='Facebook' />
                      <FormControl type="url" placeholder='Instagram' />
                      <FormControl type="url" placeholder='Other' />
                  </FormGroup>
            </div>
      );
};
q17.path = "/social";

const q18 = () => {
      return (
            <div className="custom-question-centered">
                  <h6>About you</h6>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What's your name</h3>
                  <FormGroup bsSize="small">
                      <FormControl type="text" placeholder='Name' />
                  </FormGroup>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What is the best email address to contact you</h3>
                  <FormGroup bsSize="small">
                      <FormControl type="email" placeholder='Email' />
                  </FormGroup>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Could we grab your phone number?</h3>
                  <FormGroup bsSize="small">
                      <FormControl type="tell" placeholder='Phone' />
                  </FormGroup>
            </div>
      );
};
q18.path = "/feedback";


const q19 = () => {
      return (
            <div className="custom-question-centered">
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you have extra information, comments or requests you would like us to consider?</h3>
                  <FormGroup controlId="formControlsTextarea">
                        <FormControl componentClass="textarea" placeholder="message" />
                  </FormGroup>
            </div>
      );
};
q19.path = "/extra";

const q20 = () => {
      return (
            <div className="custom-question-centered">
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Thanks for your coaperation! will get back to you as soon we have a Sketch of your site.</h3>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Will share with you a google drive folder where you should please upload your assets like Logo, Images, etc.</h3>
            </div>
      );
};
q20.path = "/thanks";


export default [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20 ];