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
                      name='website_goals'
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
        this.props.skipQuestions({has_website: 'no'}, 1);
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
            <div className="custom-buttons-centered custom-form-centered custom-site-form">
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


class Q12 extends Component {
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
      return (
        <div className="custom-question-centered custom-16">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">List a few similar websites which you felt were well done.</h3> 
            <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
              <ValidatedInput
                    type='text'
                    name='welldone_1'
                    validate='required'
                    bsSize='small'
                    label='Please type in your website address'
                    placeholder='http://'
                    />
              <ValidatedInput
                    type='text'
                    name='welldone_2'
                    bsSize='small'
                    label='Please type in your website address'
                    placeholder='http://'
                    />
              <ValidatedInput
                    type='text'
                    name='welldone_3'
                    bsSize='small'
                    label='Please type in your website address'
                    placeholder='http://'
                    />
              <ValidatedInput
                    type='text'
                    name='welldone_4'
                    bsSize='small'
                    label='Please type in your website address'
                    placeholder='http://'
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

class Q13 extends Component {
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
        this.props.skipQuestions({has_domain: 'no'}, 1);
      }
      renderForm(has) {
        return has ? <DomainForm {...this.props} /> : '' ;
      }

      render() {
        return (
          <div>
          <div className="custom-question-centered custom-9 custom-13">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you currently have a Domain?</h3> 
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
          </div>
              {this.renderForm(this.state.has)}
          </div>
        );
    }
};

class DomainForm extends Component {
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
    e.target.classList.toggle('selected')
  }
  render() {
    return(
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
            <div className="custom-question-centered custom-question-centered-no-margin">
              <ValidatedInput
                    type='text'
                    name='domain_name'
                    validate='required'
                    bsSize='small'
                    label='Please type in your domain name'
                    placeholder='www...'
                    />
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2 custom-h3-q13">Which domain client?</h3>
            </div>
            <div className="custom-buttons-centered custom-form-centered">
            <FormGroup>
                <ValidatedInput
                    type='checkbox'
                    name='go_daddy'
                    label='Go Daddy'
                    onClick={this.ToggleClass}
                />
                  <ValidatedInput
                    type='checkbox'
                    name='register.com'
                    label='Register.com'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='other_domain'
                    label='Other'
                    onClick={this.ToggleClass}
                />
                </FormGroup>
              </div>
              <div className="custom-question-centered custom-question-centered-last-section custom-9">
                <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Please provide us your domain Log-in</h3>
                <ValidatedInput
                      type='text'
                      name='domain_user_name'
                      validate='required'
                      bsSize='small'
                      placeholder='User'
                      />
                <ValidatedInput
                      type='text'
                      name='domain_pass'
                      validate='required'
                      bsSize='small'
                      placeholder='Password'
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

class Q14 extends Component {
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
        this.props.skipQuestions({has_email_as_domain: 'no'}, 1);
      }
      renderForm(has) {
        return has ? <DomainEmail {...this.props} /> : '' ;
      }

      render() {
        return (
          <div>
          <div className="custom-question-centered custom-9 custom-13">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you have email with your domain</h3> 
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
          </div>
              {this.renderForm(this.state.has)}
          </div>
        );
    }
};

class DomainEmail extends Component {
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
    e.target.classList.toggle('selected')
  }
  render() {
    return(
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
            <div className="custom-question-centered custom-question-centered-no-margin">
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2 custom-h3-q13">How do you use your email?</h3>
            </div>
            <div className="custom-buttons-centered custom-form-centered">
            <FormGroup>
                <ValidatedInput
                    type='checkbox'
                    name='gmail'
                    label='Gmail'
                    onClick={this.ToggleClass}
                />
                  <ValidatedInput
                    type='checkbox'
                    name='outlook'
                    label='Outlook'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='other_email'
                    label='Other'
                    onClick={this.ToggleClass}
                />
                </FormGroup>
              </div>
            <div className="custom-next-centered">
                <ValidatedInput
                      type='text'
                      name='domain_email_other'
                      bsSize='small'
                      placeholder='Type your answer'
                      />
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

class Q15 extends Component {
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
        this.props.skipQuestions({has_hosting: 'no'}, 1);
      }
      renderForm(has) {
        return has ? <HostingForm {...this.props} /> : '' ;
      }

      render() {
        return (
          <div>
          <div className="custom-question-centered custom-9 custom-13">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you have a hosting provider?</h3> 
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
          </div>
              {this.renderForm(this.state.has)}
          </div>
        );
    }
};

class HostingForm extends Component {
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
    e.target.classList.toggle('selected')
  }
  render() {
    return(
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
            <div className="custom-question-centered custom-question-centered-no-margin">
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2 custom-h3-q13">Which Hosting Provider?</h3>
            </div>
            <div className="custom-buttons-centered custom-form-centered">
            <FormGroup>
                <ValidatedInput
                    type='checkbox'
                    name='go_daddy_hosting'
                    label='Go Daddy'
                    onClick={this.ToggleClass}
                />
                  <ValidatedInput
                    type='checkbox'
                    name='blue_host'
                    label='Blue Host'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='host_gator'
                    label='Host Gator'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='ix_hosting'
                    label='ix web hosting'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='1&1'
                    label='1&1'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='other'
                    label='Other'
                    onClick={this.ToggleClass}
                />
                </FormGroup>
              </div>
              <div className="custom-question-centered custom-question-centered-no-margin">

                <ValidatedInput
                      type='text'
                      name='hosting_other'
                      bsSize='small'
                      placeholder='Type your answer'
                      />

              </div>
            <div className="custom-next-centered">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2 custom-h3-q13">Please provide us your FTP Log-in</h3>
                <ValidatedInput
                      type='text'
                      name='ftp_user_name'
                      validate='required'
                      bsSize='small'
                      placeholder='User'
                      label="Please type in your ftp credentials"
                      />
                <ValidatedInput
                      type='text'
                      name='ftp_pass'
                      validate='required'
                      bsSize='small'
                      placeholder='Password'
                      />
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
class Q16 extends Component {
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
      return (
        <div className="custom-question-centered custom-13 custom-16">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Enter email you want the contact form on site to go to</h3> 
            <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
              <ValidatedInput
                    type='text'
                    name='public_email_1'
                    validate='required'
                    bsSize='small'
                    label='Please type in your public email'
                    placeholder='http://'
                    />
              <ValidatedInput
                    type='text'
                    name='public_email_2'
                    bsSize='small'
                    label='List all the other emails you want to list on the site'
                    placeholder='http://'
                    />
              <ValidatedInput
                    type='text'
                    name='public_email_3'
                    bsSize='small'
                    placeholder='http://'
                    />
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2 custom-h3-q13">Enter the phone number you want to show on the site</h3>
              <ValidatedInput
                    type='text'
                    name='public_tel_1'
                    bsSize='small'
                    label='Please type in your public telephone'
                    placeholder='Phone'
                    />
              <ValidatedInput
                    type='text'
                    name='public_tel_2'
                    bsSize='small'
                    label='List all the other phones you want to list on the site'
                    placeholder='Phone'
                    />
              <ValidatedInput
                    type='text'
                    name='contact_tel_3'
                    bsSize='small'
                    placeholder='Phone'
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
class Q17 extends Component {
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
            <div className="custom-question-centered custom-question-centered-no-margin">
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2 custom-h3-q13">Company location, Please write if you want to show on site a address</h3>
            </div>
            <div className="custom-next-centered">
                <ValidatedInput
                      type='text'
                      name='domain_email_other'
                      bsSize='small'
                      placeholder='addres'
                      label='Optional if you want to show'
                      />
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

class Q18 extends Component {
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
        this.props.skipQuestions({has_hosting: 'no'}, 1);
      }
      renderForm(has) {
        return has ? <SocialForm {...this.props} /> : '' ;
      }

      render() {
        return (
          <div>
          <div className="custom-question-centered custom-9 custom-13">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you have social media Twitter, facebook, Instegram, Google+?</h3> 
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
          </div>
              {this.renderForm(this.state.has)}
          </div>
        );
    }
};

class SocialForm extends Component {
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
            <div className="custom-question-centered custom-question-centered-no-margin">
              <ValidatedInput
                      type='text'
                      name='twitter'
                      bsSize='small'
                      placeholder='Twitter'
                      label='List all of your social pages'
                      />
              <ValidatedInput
                      type='text'
                      name='facebook'
                      bsSize='small'
                      placeholder='Facebook'
                      />
              <ValidatedInput
                      type='text'
                      name='instegram'
                      bsSize='small'
                      placeholder='Instegram'
                      />

              <ValidatedInput
                      type='text'
                      name='other_social'
                      bsSize='small'
                      placeholder='Other'
                      />
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

class Q19 extends Component {
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
      return (
        <div className="custom-question-centered custom-9 custom-13">
          <h5 className="m-t-0 m-b-lg bl-blue-dark display-2">About you</h5>
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
          >
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Whats your name</h3>
            <ValidatedInput
                      type='text'
                      name='contact_name'
                      bsSize='small'
                      placeholder='Name'
                      />
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What is the best email address to contact you</h3>
            <ValidatedInput
                      type='text'
                      name='contact_email'
                      bsSize='small'
                      placeholder='Email'
                      />
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Could we grab your phone number?</h3>
            <ValidatedInput
                      type='text'
                      name='contact_tel'
                      bsSize='small'
                      placeholder='Phone'
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

class Q20 extends Component {
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
      return (
        <div className="custom-question-centered custom-9 custom-13">
          <h5 className="m-t-0 m-b-lg bl-blue-dark display-2">About you</h5>
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
          >
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you have extra information, comments or requests you would like us to consider?</h3>
            <ValidatedInput
                      type='textarea'
                      name='additional_requests'
                      bsSize='small'
                      placeholder='message'
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

class Q21 extends Component {
    render() {
      return (
        <div className="custom-question-centered custom-9 custom-13">
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Thanks for your coaperation! will get back to you as soon we have a Sketch of your site.</h3>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Will share with you a google drive folder where you should please upload your assets like Logo, Images, etc.</h3>
        </div>
      );
    }
};


export default [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21];