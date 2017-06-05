import { FormGroup, Radio as Radiolo, FormControl, ButtonToolbar, Button, ButtonInput, Checkbox } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Form, ValidatedInput, Radio, RadioGroup } from 'react-bootstrap-validation';

class Q1 extends Component {
    render() {
      return (
        <div className="custom-question-centered">
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Let's get started</h3> 
              <p>We just to grab some information of your company in order to understand your needs well, and provide you with the best solutions for you.</p>
              <Button bsStyle="primary"
                      onClick={this.props.nextQuestion}
                      >
                NEXT
              </Button>
        </div>
      );
    }
};


class Q2 extends Component {
    constructor(props) {
      super(props);
      this._handleValidSubmit = this._handleValidSubmit.bind(this);
    }
    _handleValidSubmit(value) {
        this.props.nextQuestion(value);
    }
 
    _handleInvalidSubmit(errors, values) {
        // Errors is an array containing input names 
        // that failed to validate 
    }
    
    render() {
      return (
        <div className="custom-question-centered">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Tell us about your business</h3> 
            <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
                <ValidatedInput
                        type='text'
                        name='company_name'
                        validate='required'
                        placeholder='Company Name'
                        errorHelp={'Please enter your company name'}
                        />
                <RadioGroup 
                        name='number_of_employes'
                        label='Number of emloyes including you.'
                        validate='required'
                        errorHelp='Please choose option.'>
                    <Radio value='Just you' label='Just you' />
                    <Radio value='2-9' label='2-9' />
                    <Radio value='9-30' label='9-30' />
                    <Radio value='3-100' label='3-100' />
                    <Radio value='100+' label='100+' />
                </RadioGroup>
                <Button 
                    type="submit"
                    bsStyle="primary">
                    NEXT
                </Button>
            </Form>
      </div>
      );
      }
};

class Q3 extends Component {
    constructor(props) {
      super(props);
      this._handleValidSubmit = this._handleValidSubmit.bind(this);
    }
    _handleValidSubmit(value) {
        this.props.nextQuestion(value);
    }
 
    _handleInvalidSubmit(errors, values) {
        // Errors is an array containing input names 
        // that failed to validate 
    }
    render() {
      return (
        <div className="custom-question-centered">
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Can you tell us breefly what does your business actually do?</h3> 
          <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
              <ValidatedInput
                      type='text'
                      name='about_business'
                      validate='required'
                      placeholder='Type your answer'
                      errorHelp={'Please enter your answer'}
                      />
              <Button 
                  type="submit"
                  bsStyle="primary">
                  NEXT
              </Button>
          </Form>
        </div>
       );
    }
};

class Q4 extends Component {
      constructor(props) {
      super(props);
      this._handleValidSubmit = this._handleValidSubmit.bind(this);
      this.ToggleClass = this.ToggleClass.bind(this);
      }
      _handleValidSubmit(value) {
          this.props.nextQuestion(value);
      }
   
      _handleInvalidSubmit(errors, values) {
          // Errors is an array containing input names 
          // that failed to validate 
      }
      ToggleClass(e) {
        e.target.classList.toggle('selected')
      }
      render() {
      return (
            <div>
                <div className="custom-question-centered">
                      <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What makes your company remarkable? unique to everone else</h3> 
                </div>
                <Form
                    onValidSubmit={this._handleValidSubmit.bind(this)}
                    onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
                >
                <div className="custom-input-centered">
                      <ValidatedInput
                      type='text'
                      name='about_business'
                      bsSize='small'
                      placeholder='type your answer or select 1 or mulitple points'
                      />
                </div>
                <div className="custom-buttons-centered">
                <FormGroup>
                <ValidatedInput
                    type='checkbox'
                    name='Quality'
                    label='Quality'
                    onClick={this.ToggleClass}
                />
                  <ValidatedInput
                    type='checkbox'
                    name='Low_Pricing'
                    label='Low Pricing'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Quick'
                    label='Quick'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Customer_service'
                    label='Customer service'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Experianced'
                    label='Experianced'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Stylish'
                    label='Stylish'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Luxary'
                    label='Luxary'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='High-End'
                    label='High-End'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Affordable'
                    label='Affordable'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Hassel_Free'
                    label='Hassel Free'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='All_in_one'
                    label='All in one'
                    onClick={this.ToggleClass}
                />
                </FormGroup>
                </div>
                <div className="custom-next-centered">
                  <Button 
                    type="submit"
                    bsStyle="primary">
                    NEXT
                  </Button>
                </div>
                </Form>
            </div>
      );
    }
};

class Q5 extends Component {
    constructor(props) {
      super(props);
      this._handleValidSubmit = this._handleValidSubmit.bind(this);
    }
    _handleValidSubmit(value) {
        this.props.nextQuestion(value);
    }
 
    _handleInvalidSubmit(errors, values) {
        // Errors is an array containing input names 
        // that failed to validate 
    }
      render() {
      return (
      <div className="custom-question-centered">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What are your main competitors?</h3> 
          <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
              <ValidatedInput
                      type='text'
                      name='competitors'
                      validate='required'
                      placeholder='Type your answer'
                      errorHelp={'Please enter your answer'}
                      />
              <Button 
                  type="submit"
                  bsStyle="primary">
                  NEXT
              </Button>
          </Form>
      </div>
      );
    }
};

class Q6 extends Component {
    constructor(props) {
      super(props);
      this._handleValidSubmit = this._handleValidSubmit.bind(this);
    }
    _handleValidSubmit(value) {
        this.props.nextQuestion(value);
    }
 
    _handleInvalidSubmit(errors, values) {
        // Errors is an array containing input names 
        // that failed to validate 
    }
    render() {
      return (
        <div className="custom-question-centered">
          <h5 className="m-t-0 m-b-lg bl-blue-dark display-2">About your website goals</h5>
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What type of website do you need?</h3> 
          
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
          >
            <RadioGroup 
                      name='number_of_employes'
                      label='Select 1 of the options.'
                      validate='required'
                      errorHelp='Please choose option.'>
                  <Radio value='Informational' label='Informational' />
                  <Radio value='Portfolio' label='Portfolio' />
                  <Radio value='Catalog' label='Catalog' />
                  <Radio value='Compaign' label='Compaign' />
              </RadioGroup>
            <Button 
                type="submit"
                bsStyle="primary">
                NEXT
            </Button>
          </Form>
        </div>
      );
    }
};

class Q7 extends Component {
    constructor(props) {
      super(props);
      this._handleValidSubmit = this._handleValidSubmit.bind(this);
    }
    _handleValidSubmit(value) {
        this.props.nextQuestion(value);
    }
 
    _handleInvalidSubmit(errors, values) {
        // Errors is an array containing input names 
        // that failed to validate 
    }
    render() {
      return (
        <div className="custom-question-centered">
            <h5 className="m-t-0 m-b-lg bl-blue-dark display-2">About your website goals</h5>
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What is the main goal or purpose of the site?</h3> 
            <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
              <RadioGroup 
                        name='site_purpose'
                        label='Select 1 of the options.'
                        validate='required'
                        errorHelp='Please choose option.'>
                    <Radio value='online_presence' label='Simply Online Presence' />
                    <Radio value='show_off' label='Show Off' />
                    <Radio value='branding' label='Inspire/Branding' />
                    <Radio value='drive_sales' label='Drive sales' />
                </RadioGroup>
              <Button 
                  type="submit"
                  bsStyle="primary">
                  NEXT
              </Button>
            </Form>
        </div>
      );
    }
};

class Q8 extends Component {
      constructor(props) {
      super(props);
      this._handleValidSubmit = this._handleValidSubmit.bind(this);
      this.ToggleClass = this.ToggleClass.bind(this);
      }
      _handleValidSubmit(value) {
          this.props.nextQuestion(value);
      }
   
      _handleInvalidSubmit(errors, values) {
          // Errors is an array containing input names 
          // that failed to validate 
      }
      ToggleClass(e) {
        e.target.classList.toggle('selected')
      }
      render() {
        return (
          <div>
              <div className="custom-question-centered">
                    <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Who are your target audience?</h3> 
              </div>
              <Form
                  onValidSubmit={this._handleValidSubmit.bind(this)}
                  onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
              >
                  <div className="custom-input-centered">
                        <ValidatedInput
                        type='text'
                        name='about_business'
                        bsSize='small'
                        placeholder='type your answer or select 1 or mulitple points'
                        />
                  </div>
                  <div className="custom-buttons-centered">
                    <FormGroup>
                    <ValidatedInput
                        type='checkbox'
                        name='upper_class'
                        label='Upper Class'
                        onClick={this.ToggleClass}
                    />
                      <ValidatedInput
                        type='checkbox'
                        name='middle_class'
                        label='Middle Class'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='low_class'
                        label='Low Class'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='enterpreneus'
                        label='Enterpreneus'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='Experianced'
                        label='Experianced'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='working_class'
                        label='Working Class'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='low_income'
                        label='Low Income'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='local-community'
                        label='Local Community'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='not_sure'
                        label="Don't know"
                        onClick={this.ToggleClass}
                    />
                  </FormGroup>
                </div>
                <div className="custom-next-centered">
                  <Button 
                    type="submit"
                    bsStyle="primary">
                    NEXT
                  </Button>
                </div>
              </Form>
          </div>
        );
    }
};


class Q9 extends Component {
      constructor(props) {
        super(props);
        this.state = {
          has: false
        };
        this.ToggleForm = this.ToggleForm.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.skipQuestions = this.skipQuestions.bind(this);
      }

      ToggleForm(e) {
        if(document.querySelectorAll('.selected').length !== 0) {
            document.querySelectorAll('.selected')[0].classList.remove('selected');
        }
        e.target.parentNode.classList.add('selected');
        this.setState({
          has: true
        });
      }

      skipQuestions() {
        this.props.skipQuestions({has_website: 'no'}, 2);
      }
      renderForm(has) {
        return has ? <SiteForm {...this.props} /> : '' ;
      }

      render() {
        return (
          <div className="custom-question-centered custom-9">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you currently have a website?</h3> 
            <FormGroup>
              <Radiolo 
                      name="radioGroup"
                      inline
                      onClick={this.ToggleForm}
                      >Yes
              </Radiolo>
              <Radiolo 
                      name="radioGroup"
                      inline
                      onClick={this.skipQuestions}
                      >No
              </Radiolo>
            </FormGroup>
              {this.renderForm(this.state.has)}
          </div>
        );
    }
};

class SiteForm extends Component {
  constructor(props) {
    super(props);
    this._handleValidSubmit = this._handleValidSubmit.bind(this);
  }
  _handleValidSubmit(value) {
    this.props.nextQuestion(value);
  }
  _handleInvalidSubmit(errors, values) {
  }
  render() {
    return(
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
            <div className="custom-buttons-centered custom-form-centered">
              <ValidatedInput
                    type='text'
                    name='website_address'
                    validate='required'
                    bsSize='small'
                    label='Please type in your website address'
                    placeholder='http://'
                    />
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What DO YOU like about it?</h3>
              <ValidatedInput
                    type='text'
                    name='what_you_like'
                    validate='required'
                    bsSize='small'
                    placeholder='Please type answer'
                    />
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">And what DON'T YOU like about it?</h3>
              <ValidatedInput
                    type='text'
                    name='what_you_dislike'
                    validate='required'
                    bsSize='small'
                    placeholder='Please type answer'
                    />
            </div>
            <div className="custom-next-centered">
              <Button 
                type="submit"
                bsStyle="primary">
                NEXT
              </Button>
            </div>
          </Form>
          );
  }
}

class Q10 extends Component {
  constructor(props) {
        super(props);
        this._handleValidSubmit = this._handleValidSubmit.bind(this);
        this.ToggleClass = this.ToggleClass.bind(this);
      }
  _handleValidSubmit(value) {
    this.props.nextQuestion(value);
  }
  _handleInvalidSubmit(errors, values) {
  }
  ToggleClass(e) {
    if(e.target.nodeName === 'LABEL') {
      e.target.classList.toggle('selected')
    }
  }

  render() {
      return (
          <div className="custom-question-centered custom-10">
              <div className="custom-h3">
                <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What will be written on the website?</h3>
                <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">do you already have writing?</h3>
              </div>
              <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
              >
              <ValidatedInput
                  type='text'
                  name='about_writings'
                  bsSize='small'
                  placeholder='type your answer or select 1 or mulitple points'
              />
                <FormGroup>
                  <ValidatedInput
                      type='checkbox'
                      name='has_writings'
                      label='Yes I have'
                      onClick={this.ToggleClass}
                  />
                  <ValidatedInput
                      type='checkbox'
                      name='old_writings'
                      label='From Old site'
                      onClick={this.ToggleClass}
                  />
                  <ValidatedInput
                      type='checkbox'
                      name='provide_me'
                      label='Please Provide me'
                      onClick={this.ToggleClass}
                  />
                </FormGroup>
              <div className="custom-next-centered">
                <Button 
                  type="submit"
                  bsStyle="primary">
                  NEXT
                </Button>
              </div>
              </Form>
          </div>
      );
  }
};

class Q11 extends Component {
  constructor(props) {
        super(props);
        this._handleValidSubmit = this._handleValidSubmit.bind(this);
        this.ToggleClass = this.ToggleClass.bind(this);
      }
  _handleValidSubmit(value) {
    this.props.nextQuestion(value);
  }
  _handleInvalidSubmit(errors, values) {
  }
  ToggleClass(e) {
    if(e.target.nodeName === 'LABEL') {
      e.target.classList.toggle('selected')
    }
  }

  render() {
      return (
        <div>
          <div className="custom-question-centered">
              <div className="custom-h3">
                <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Btw, Who do you think will be maintaining and updating the site?</h3>
              </div>
          </div>
              <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
              >
              <div className="custom-input-centered">
              <ValidatedInput
                  type='text'
                  name='support_service'
                  bsSize='small'
                  placeholder='type your answer or select 1 or mulitple points'
              />
              </div>
              <div className="custom-buttons-centered custom-11">
                <FormGroup>
                  <ValidatedInput
                      type='checkbox'
                      name='myself'
                      label='My Self'
                      onClick={this.ToggleClass}
                  />
                  <ValidatedInput
                      type='checkbox'
                      name='employe'
                      label='Employe'
                      onClick={this.ToggleClass}
                  />
                  <ValidatedInput
                      type='checkbox'
                      name='updating_plans'
                      label='Tell me about Your Maintence and updating plans'
                      onClick={this.ToggleClass}
                  />
                </FormGroup>
                </div>
              <div className="custom-next-centered">
                <Button 
                  type="submit"
                  bsStyle="primary">
                  NEXT
                </Button>
              </div>
              </Form>
          </div>

      );
  }
};


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


export default [Q11, Q2, Q3, Q4, Q5];