import { FormGroup, Radio as Radiolo, Button } from 'react-bootstrap';
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
    componentDidMount() {
      document.querySelector('input[type="text"]').focus();
    }
    
    render() {
      return (
        <div className="custom-question-centered">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Tell us about your business</h3> 
            <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
                <div className="relative">
                  <ValidatedInput
                          type='text'
                          name='company_name'
                          validate='required'
                          label='Company Name'
                          labelClassName='cd-label'
                          groupClassName="hvr-underline-from-center"
                          onFocus={(e) => {
                                    e.target.previousSibling.classList.remove('unfocus');
                                    e.target.previousSibling.classList.add('focus');
                                  }
                          }
                          onBlur={(e) => {
                            console.log(e.target.value);
                                    if (e.target.value == '') {
                                        e.target.previousSibling.classList.remove('focus');
                                        e.target.previousSibling.classList.add('unfocus');
                                      }
                                  }
                          }
                          />
                </div>
                <RadioGroup 
                        name='number_of_employes'
                        label='Number of emloyes including you.'
                        validate='required'
                        errorHelp='Please choose option.'>
                    <Radio value='Just you' label='Just you' />
                    <Radio value='2-9' label='2-9' />
                    <Radio value='9-30' label='9-30' />
                    <Radio value='30-100' label='30-100' />
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
    componentDidMount() {
      document.querySelector('input[type="text"]').focus();
    }
    render() {
      return (
        <div className="custom-question-centered">
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Can you tell us breefly what does your business actually do?</h3> 
          <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
              <div className="relative">
                <ValidatedInput
                        type='text'
                        name='about_business'
                        validate='required'
                        label='Type your answer'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                              console.log(e.target.value);
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                        />
              </div>
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
      componentDidMount() {
        document.querySelector('input[type="text"]').focus();
      }
      render() {
      return (
            <div>
                <div className="custom-question-centered">
                      <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What makes your company remarkable? unique to everyone else</h3> 
                </div>
                <Form
                    onValidSubmit={this._handleValidSubmit.bind(this)}
                    onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
                >
                <div className="custom-input-centered relative">
                      <ValidatedInput
                      type='text'
                      name='unique'
                      bsSize='small'
                      label='type your answer or select 1 or mulitple points'
                      labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                              console.log(e.target.value);
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
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
                    name='Low Pricing'
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
                    name='Customer service'
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
                    name='Hassel Free'
                    label='Hassel Free'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='All in one'
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
    componentDidMount() {
      document.querySelector('input[type="text"]').focus();
    }
      render() {
      return (
      <div className="custom-question-centered">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What are your main competitors?</h3> 
          <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
            <div className="relative">
              <ValidatedInput
                      type='text'
                      name='competitors'
                      validate='required'
                      label='type your answer'
                      labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                              console.log(e.target.value);
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
            </div>
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
                      name='website_type'
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
                    <Radio value='Simply Online Presence' label='Simply Online Presence' />
                    <Radio value='Show Off' label='Show Off' />
                    <Radio value='Inspire/Branding' label='Inspire/Branding' />
                    <Radio value='Drive sales' label='Drive sales' />
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
      componentDidMount() {
      document.querySelector('input[type="text"]').focus();
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
                  <div className="custom-input-centered relative">
                        <ValidatedInput
                        type='text'
                        name='target_audience'
                        bsSize='small'
                        label='type your answer or select 1 or mulitple points'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                              console.log(e.target.value);
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                        />
                  </div>
                  <div className="custom-buttons-centered">
                    <FormGroup>
                    <ValidatedInput
                        type='checkbox'
                        name='Upper Class'
                        label='Upper Class'
                        onClick={this.ToggleClass}
                    />
                      <ValidatedInput
                        type='checkbox'
                        name='Middle Class'
                        label='Middle Class'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='Low Class'
                        label='Low Class'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='Enterpreneus'
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
                        name='Working Class'
                        label='Working Class'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='Low Income'
                        label='Low Income'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='Local Community'
                        label='Local Community'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name="Don't know"
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
        this.props.skipQuestions({has_website: 'No', website_address: '',what_you_like: '', what_you_dislike: '' }, 1);
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
    this.props.nextQuestion({...value, has_website: "Yes"});
  }
  _handleInvalidSubmit(errors, values) {
  }
  componentDidMount() {
      document.querySelector('input[type="text"]').focus();
    }
  render() {
    return(
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
            <div className="custom-buttons-centered custom-form-centered custom-site-form">
              <h6>Please type in your website address</h6>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='website_address'
                    validate='required'
                    bsSize='small'
                    label='http://'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                              console.log(e.target.value);
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
              </div>
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What DO YOU like about it?</h3>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='what_you_like'
                    validate='required'
                    bsSize='small'
                    label='please type your answer'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                              console.log(e.target.value);
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
              </div>
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">And what DON'T YOU like about it?</h3>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='what_you_dislike'
                    validate='required'
                    bsSize='small'
                    label='please type your answer'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
              </div>
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
  componentDidMount() {
      document.querySelector('input[type="text"]').focus();
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
              <h6>type your answer or select 1 or mulitple points</h6>
              <div className="relative">
              <ValidatedInput
                  type='text'
                  name='about_writings'
                  bsSize='small'
                  label='http://'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                              console.log(e.target.value);
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
              />
              </div>
                <FormGroup>
                  <ValidatedInput
                      type='checkbox'
                      name='Yes I have'
                      label='Yes I have'
                      onClick={this.ToggleClass}
                  />
                  <ValidatedInput
                      type='checkbox'
                      name='From Old site'
                      label='From Old site'
                      onClick={this.ToggleClass}
                  />
                  <ValidatedInput
                      type='checkbox'
                      name='Please Provide me'
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
  componentDidMount() {
      document.querySelector('input[type="text"]').focus();
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
              <div className="custom-input-centered relative">
              <ValidatedInput
                  type='text'
                  name='support_service'
                  bsSize='small'
                  label='type your answer or select 1 or mulitple points'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                              console.log(e.target.value);
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
              />
              </div>
              <div className="custom-buttons-centered custom-11">
                <FormGroup>
                  <ValidatedInput
                      type='checkbox'
                      name='My Self'
                      label='My Self'
                      onClick={this.ToggleClass}
                  />
                  <ValidatedInput
                      type='checkbox'
                      name='Employe'
                      label='Employe'
                      onClick={this.ToggleClass}
                  />
                  <ValidatedInput
                      type='checkbox'
                      name='Tell me more'
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
  componentDidMount() {
      document.querySelector('input[type="text"]').focus();
    }
  render() {
      return (
        <div className="custom-question-centered custom-16">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">List a few similar websites which you felt were well done.</h3> 
            <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
            <h6>Please type in your website address</h6>
            <div className="relative">
              <ValidatedInput
                    type='text'
                    name='welldone_1'
                    validate='required'
                    bsSize='small'
                    label='http://'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
              </div>
              <h6>Please type in your website address</h6>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='welldone_2'
                    bsSize='small'
                    label='http://'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
              </div>
              <h6>Please type in your website address</h6>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='welldone_3'
                    bsSize='small'
                    label='http://'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
              </div>
              <h6>Please type in your website address</h6>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='welldone_4'
                    bsSize='small'
                    label='http://'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
              </div>
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
        this.props.skipQuestions({has_domain: 'No', domain_name: '', domain_pass: '', domain_user_name: ''}, 1);
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
    this.props.nextQuestion({...value, has_domain: 'Yes'});
  }
  _handleInvalidSubmit(errors, values) {
  }
  ToggleClass(e) {
    e.target.classList.toggle('selected')
  }
  componentDidMount() {
      document.querySelector('input[type="text"]').focus();
    }
  render() {
    return(
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
            <div className="custom-question-centered custom-question-centered-no-margin">
            <h6>Please type in your domain name</h6>
            <div className="relative">
              <ValidatedInput
                    type='text'
                    name='domain_name'
                    validate='required'
                    bsSize='small'
                    label='www...'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
                    </div>
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2 custom-h3-q13">Which domain client?</h3>
            </div>
            <div className="custom-buttons-centered custom-form-centered">
            <FormGroup>
                <ValidatedInput
                    type='checkbox'
                    name='Go Daddy'
                    label='Go Daddy'
                    onClick={this.ToggleClass}
                />
                  <ValidatedInput
                    type='checkbox'
                    name='Register.com'
                    label='Register.com'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Other'
                    label='Other'
                    onClick={this.ToggleClass}
                />
                </FormGroup>
              </div>
              <div className="custom-question-centered custom-question-centered-last-section custom-9">
                <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Please provide us your domain Log-in</h3>
                <div className="relative">
                <ValidatedInput
                      type='text'
                      name='domain_user_name'
                      validate='required'
                      bsSize='small'
                      label='User'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
                </div>
                <div className="relative">
                <ValidatedInput
                      type='text'
                      name='domain_pass'
                      validate='required'
                      bsSize='small'
                      label='Password'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
                </div>
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
        this.props.skipQuestions({has_email_as_domain: 'No', domain_email_other: ''}, 1);
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
    this.props.nextQuestion({...value, has_email_as_domain: 'Yes'});
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
                    name='Gmail'
                    label='Gmail'
                    onClick={this.ToggleClass}
                />
                  <ValidatedInput
                    type='checkbox'
                    name='Outlook'
                    label='Outlook'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Other'
                    label='Other'
                    onClick={this.ToggleClass}
                />
                </FormGroup>
              </div>
            <div className="custom-next-centered">
            <div className="relative">
                <ValidatedInput
                      type='text'
                      name='domain_email_other'
                      bsSize='small'
                      label='Type your answer'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
              </div>
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
        this.props.skipQuestions({has_hosting: 'No', hosting_other: '', ftp_user_name: '', ftp_pass: ''}, 1);
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
    this.props.nextQuestion({...value, has_hosting: 'Yes'});
  }
  _handleInvalidSubmit(errors, values) {
  }
  ToggleClass(e) {
    e.target.classList.toggle('selected')
  }
  componentDidMount() {
      document.querySelector('input[type="text"]').focus();
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
                    name='Go Daddy'
                    label='Go Daddy'
                    onClick={this.ToggleClass}
                />
                  <ValidatedInput
                    type='checkbox'
                    name='Blue Host'
                    label='Blue Host'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Host Gator'
                    label='Host Gator'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='ix web hosting'
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
                    name='Other'
                    label='Other'
                    onClick={this.ToggleClass}
                />
                </FormGroup>
              </div>
              <div className="custom-question-centered custom-question-centered-no-margin relative">

                <ValidatedInput
                      type='text'
                      name='hosting_other'
                      bsSize='small'
                      label='Type your answer'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />

              </div>
            <div className="custom-next-centered">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2 custom-h3-q13">Please provide us your FTP Log-in</h3>
            <div className="relative">
                <ValidatedInput
                      type='text'
                      name='ftp_user_name'
                      validate='required'
                      bsSize='small'
                      label='Please type in your ftp username'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
            </div>
            <div className="relative">
                <ValidatedInput
                      type='text'
                      name='ftp_pass'
                      validate='required'
                      bsSize='small'
                      label='Please type in your ftp password'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
              </div>
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
  componentDidMount() {
      document.querySelector('input[type="text"]').focus();
    }
  render() {
      return (
        <div className="custom-question-centered custom-13 custom-16">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Enter email you want the contact form on site to go to</h3> 
            <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
            <div className="relative">
              <ValidatedInput
                    type='text'
                    name='public_email_1'
                    validate='required,isEmail'
                    bsSize='small'
                    label='Please type in your public email'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
              </div>
              <h6>List all the other emails you want to list on the site</h6>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='public_email_2'
                    bsSize='small'
                    validate='isEmail'
                    label='email@'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
              </div>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='public_email_3'
                    validate='isEmail'
                    bsSize='small'
                     label='email@'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
              </div>
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2 custom-h3-q13">Enter the phone number you want to show on the site</h3>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='public_tel_1'
                    bsSize='small'
                    validate={v => /^\d+$/.test(v)}
                    label='tel.:'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                    />
              </div>
              <h6>List all the other phones you want to list on the site</h6>
              <div className="relative">
                <ValidatedInput
                      type='text'
                      name='public_tel_2'
                      bsSize='small'
                      validate={v => /^\d+$/.test(v)}
                      label='tel.:'
                          labelClassName='cd-label'
                          groupClassName="hvr-underline-from-center"
                          onFocus={(e) => {
                                        e.target.previousSibling.classList.remove('unfocus');
                                        e.target.previousSibling.classList.add('focus');
                                      }
                              }
                              onBlur={(e) => {
                                        if (e.target.value == '') {
                                            e.target.previousSibling.classList.remove('focus');
                                            e.target.previousSibling.classList.add('unfocus');
                                          }
                                      }
                              }
                      />
              </div>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='public_tel_3'
                    bsSize='small'
                    validate={v => /^\d+$/.test(v)}
                    label='tel.:'
                          labelClassName='cd-label'
                          groupClassName="hvr-underline-from-center"
                          onFocus={(e) => {
                                        e.target.previousSibling.classList.remove('unfocus');
                                        e.target.previousSibling.classList.add('focus');
                                      }
                              }
                              onBlur={(e) => {
                                        if (e.target.value == '') {
                                            e.target.previousSibling.classList.remove('focus');
                                            e.target.previousSibling.classList.add('unfocus');
                                          }
                                      }
                              }
                    />
              </div>
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
  componentDidMount() {
      document.querySelector('input[type="text"]').focus();
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
            <div className="relative">
                <ValidatedInput
                      type='text'
                      name='company_location'
                      bsSize='small'
                      label='Optional if you want to show'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
            </div>
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
        this.props.skipQuestions({has_social: 'No', twitter: '', facebook: '', instegram: '', other_social: ''}, 1);
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
    this.props.nextQuestion({...value,has_social: 'Yes'});
  }
  _handleInvalidSubmit(errors, values) {
  }
  componentDidMount() {
      document.querySelector('input[type="text"]').focus();
    }
  render() {
    return(
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
            <div className="custom-question-centered custom-question-centered-no-margin">
            <h6>List all of your social pages</h6>
            <div className="relative">
              <ValidatedInput
                      type='text'
                      name='twitter'
                      bsSize='small'
                      label='Twitter'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
              </div>
              <div className="relative">
              <ValidatedInput
                      type='text'
                      name='facebook'
                      bsSize='small'
                      label='Facebook'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
              </div>
              <div className="relative">
              <ValidatedInput
                      type='text'
                      name='instegram'
                      bsSize='small'
                      label='Instegram'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
              </div>
              <div className="relative">
              <ValidatedInput
                      type='text'
                      name='other_social'
                      bsSize='small'
                      label='Other'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
              </div>
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
    componentDidMount() {
      document.querySelector('input[type="text"]').focus();
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
          <div className="relative">
            <ValidatedInput
                      type='text'
                      name='contact_name'
                      bsSize='small'
                      label='Name'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
          </div>
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What is the best email address to contact you</h3>
          <div className="relative">
            <ValidatedInput
                      type='text'
                      name='contact_email'
                      validate='isEmail'
                      bsSize='small'
                      label='Email'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
            </div>
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Could we grab your phone number?</h3>
          <div className="relative">
            <ValidatedInput
                      type='text'
                      validate={v => /^\d+$/.test(v)}
                      name='contact_tel'
                      bsSize='small'
                      label='Phone'
                        labelClassName='cd-label'
                        groupClassName="hvr-underline-from-center"
                        onFocus={(e) => {
                                      e.target.previousSibling.classList.remove('unfocus');
                                      e.target.previousSibling.classList.add('focus');
                                    }
                            }
                            onBlur={(e) => {
                                      if (e.target.value == '') {
                                          e.target.previousSibling.classList.remove('focus');
                                          e.target.previousSibling.classList.add('unfocus');
                                        }
                                    }
                            }
                      />
            </div>
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
    componentDidMount() {
      document.querySelector('textarea').focus();
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
    componentDidMount() {
      this.props.saveResponse();
    }
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