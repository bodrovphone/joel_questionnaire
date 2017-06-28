import { FormGroup, Radio as Radiolo, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Form, ValidatedInput, Radio, RadioGroup } from 'react-bootstrap-validation';

class Q1 extends Component {
    render() {
      return (
        <div className="custom-question-centered">
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Let's get started</h3> 
              <p>To identify your true needs and deliver the solution that works for you,
we need to gather some information about your business</p>
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
      setTimeout(function(){ document.querySelector('input[type="text"]').focus(); }, 3000);
    }
    
    render() {
      return (
        <div className="custom-question-centered">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Tell us about your business</h3>
            <h5>What is the name of your company?</h5>
            <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
                <div className="relative">
                  <ValidatedInput
                          type='text'
                          name='company_name'
                          validate='required'
                          label='company name'
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
                <RadioGroup 
                        name='number_of_employes'
                        label='How many people are on staff (including yourself)?'
                        validate='required'
                        errorHelp='Please choose option.'>
                    <Radio value='Just you' label='Just you' />
                    <Radio value='2-9' label='2-10' />
                    <Radio value='9-30' label='10-30' />
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
      setTimeout(function(){ document.querySelector('input[type="text"]').focus(); }, 3000);
    }
    render() {
      return (
        <div className="custom-question-centered">
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What exactly do you do?</h3> 
          <h5>Let us know all about the products or ideas you are selling</h5>
          <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
              <div className="relative">
                <ValidatedInput
                        type='text'
                        name='about_business'
                        validate='required'
                        label='Your answer'
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
                      <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What is unique about your company?</h3> 
                </div>
                <Form
                    onValidSubmit={this._handleValidSubmit.bind(this)}
                    onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
                >
                <div className="custom-input-centered relative">
                      <ValidatedInput
                      type='textarea'
                      name='unique'
                      bsSize='small'
                      placeholder='please type your answer'
                      labelClassName='cd-label'
                      groupClassName="hvr-underline-from-center"
                      />
                </div>
                <div className="custom-next-centered">
                  <h5>Which qualities best describe your company?</h5>
                    <h6>(check all that apply)</h6>
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
                    label='Price'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Quick'
                    label='Speed'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Customer service'
                    label='Service'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Experianced'
                    label='Experience'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Stylish'
                    label='Trend'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Luxary'
                    label='Luxury'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='High-End'
                    label='Ease'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Affordable'
                    label='Expertise'
                    onClick={this.ToggleClass}
                />
                <ValidatedInput
                    type='checkbox'
                    name='Hassel Free'
                    label='Not sure'
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
      setTimeout(function(){ document.querySelector('input[type="text"]').focus(); }, 3000);
    }
      render() {
      return (
      <div className="custom-question-centered">
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Who are your main competitors?</h3> 
          <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
            <div className="relative">
              <ValidatedInput
                      type='text'
                      name='competitors'
                      label='type your answer'
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
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Which best describes the type of website you need?</h3> 
          
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
          >
            <RadioGroup
                      name='website_type'
                      label='Select 1 of the options.'>
                  <Radio value='Informational' label='Informational' />
                  <Radio value='Portfolio' label='Portfolio' />
                  <Radio value='Catalog' label='Catalog' />
                  <Radio value='Compaign' label='Campaign' />
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
            <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Which best describes your goal in launching this website?</h3> 
            <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
            >
              <RadioGroup 
                        name='site_purpose'
                        label='Select 1 of the options.'
                        errorHelp='Please choose option.'>
                    <Radio value='Simply Online Presence' label='Establish an online presence' />
                    <Radio value='Show Off' label='Showcase what I have to offer' />
                    <Radio value='Inspire/Branding' label='Inspire my audience with ideas' />
                    <Radio value='Drive sales' label='Drive traffic and sales' />
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
                    <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Who would you say is your target audience?</h3> 
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
                        label='Upper class'
                        onClick={this.ToggleClass}
                    />
                      <ValidatedInput
                        type='checkbox'
                        name='Middle Class'
                        label='Middle class'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='Low Class'
                        label='Lower class'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='Enterpreneus'
                        label='Entrepreneurs'
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
                        label='Working class'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='Low Income'
                        label='Everyone'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name='Local Community'
                        label='Local community'
                        onClick={this.ToggleClass}
                    />
                    <ValidatedInput
                        type='checkbox'
                        name="Don't know"
                        label="Not sure"
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
    this.state = {url: 'http://'};
  }
  _handleValidSubmit(value) {
    this.props.nextQuestion({...value, has_website: "Yes"});
  }
  _handleInvalidSubmit(errors, values) {
  }
  componentDidMount() {
      setTimeout(function(){ document.querySelector('input[type="text"]').focus(); }, 3000);
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
                    value={this.state.url}
                    labelClassName='cd-label'
                    groupClassName="hvr-underline-from-center"
                    onChange={e => this.setState({url: e.target.value})}
                    />
              </div>
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What DO YOU like about it?</h3>
              <div className="relative">
              <ValidatedInput
                    type='textarea'
                    name='what_you_like'
                    bsSize='small'
                    placeholder='please type your answer'
                    labelClassName='cd-label'
                    groupClassName="hvr-underline-from-center"
                    />
              </div>
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">And what DON'T YOU like about it?</h3>
              <div className="relative">
              <ValidatedInput
                    type='textarea'
                    name='what_you_dislike'
                    bsSize='small'
                    placeholder='please type your answer'
                    labelClassName='cd-label'
                    groupClassName="hvr-underline-from-center"
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
  render() {
      return (
          <div className="custom-question-centered custom-10">
              <div className="custom-h3">
                <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">What will be written on the website?</h3>
                <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">do you already have writings?</h3>
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
                  label='your content'
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
    this.state = {url1: 'http://', url2: 'http://', url3: 'http://', url4: 'http://'};
  }
  _handleValidSubmit(value) {
    this.props.nextQuestion(value);
  }
  _handleInvalidSubmit(errors, values) {
  }
  componentDidMount() {
      setTimeout(function(){ document.querySelector('input[type="text"]').focus(); }, 3000);
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
                    bsSize='small'
                    value={this.state.url1}
                    labelClassName='cd-label'
                    groupClassName="hvr-underline-from-center"
                    onChange={e => this.setState({url1: e.target.value})}
                    />
              </div>
              <h6>Please type in your website address</h6>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='welldone_2'
                    bsSize='small'
                    value={this.state.url2}
                    labelClassName='cd-label'
                    groupClassName="hvr-underline-from-center"
                    onChange={e => this.setState({url2: e.target.value})}
                    />
              </div>
              <h6>Please type in your website address</h6>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='welldone_3'
                    bsSize='small'
                    value={this.state.url3}
                    labelClassName='cd-label'
                    groupClassName="hvr-underline-from-center"
                    onChange={e => this.setState({url3: e.target.value})}
                    />
              </div>
              <h6>Please type in your website address</h6>
              <div className="relative">
              <ValidatedInput
                    type='text'
                    name='welldone_4'
                    bsSize='small'
                    value={this.state.url4}
                    labelClassName='cd-label'
                    groupClassName="hvr-underline-from-center"
                    onChange={e => this.setState({url4: e.target.value})}
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
              <h3 className="m-t-0 m-b-lg bl-blue-dark display-2 custom-h3-q13">Under which domain client?</h3>
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
                    label='Google'
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
      setTimeout(function(){ document.querySelector('input[type="text"]').focus(); }, 3000);
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
                    validate='isEmail'
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
      setTimeout(function(){ document.querySelector('input[type="text"]').focus(); }, 3000);
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
      setTimeout(function(){ document.querySelector('input[type="text"]').focus(); }, 3000);
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
      setTimeout(function(){ document.querySelector('input[type="text"]').focus(); }, 3000);
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
    render() {
      return (
        <div className="custom-question-centered custom-9 custom-13">
          <h5 className="m-t-0 m-b-lg bl-blue-dark display-2">About you</h5>
          <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
          >
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Do you have any information, comments or requests you would like us to consider?</h3>
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
          <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">Thank you for your responses!</h3>
                  <h3 className="m-t-0 m-b-lg bl-blue-dark display-2">The Blue Label team is now hard at work planning your perfect site.
Stay tuned for an email update from one of our creative professionals</h3>
        </div>
      );
    }
};


export default [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21];