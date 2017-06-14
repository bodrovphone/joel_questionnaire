import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Question from './components/Question';
import axios from 'axios';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        questionNumber: 0,
        responses: []
      };

      this.nextQuestion = this.nextQuestion.bind(this);
      this.saveResponse = this.saveResponse.bind(this);
      this.skipQuestions = this.skipQuestions.bind(this);
      this.filterOptions = this.filterOptions.bind(this);
    }
  
  nextQuestion(value = undefined) {
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      responses: [...this.state.responses, value]
    });
  }

  saveResponse() {
    const state = this.state.responses;
    const formURL = 'https://docs.google.com/a/bluelabelweb.com/forms/d/e/1FAIpQLScq9NTms8MS7bBofBSrFZaKJjaUl1YOnTdm_QLCRlMMjS6ysQ/formResponse';
    const data = `entry.1786555285=${encodeURIComponent(state[1].company_name)}&entry.1321904361=${encodeURIComponent(state[1].number_of_employes)}&entry.1253993391=${encodeURIComponent(state[2].about_business)}&entry.1458268927=${encodeURIComponent(state[3].unique)}${this.filterOptions(state[3], 'entry.1066774901')}&entry.831446907=${encodeURIComponent(state[4].competitors)}&entry.1786305114=${encodeURIComponent(state[5].website_type)}&entry.1293470535=${encodeURIComponent(state[6].site_purpose)}&entry.400530999=${encodeURIComponent(state[7].target_audience)}${this.filterOptions(state[7], 'entry.1913925543')}&entry.2117124053=${encodeURIComponent(state[8].has_website)}&entry.2011832805=${encodeURIComponent(state[8].website_address)}&entry.1864833407=${encodeURIComponent(state[8].what_you_like)}&entry.1110266555=${encodeURIComponent(state[8].what_you_dislike)}&entry.626387263=${encodeURIComponent(state[9].about_writings)}${this.filterOptions(state[9], 'entry.1984545902')}&entry.569695937=${encodeURIComponent(state[10].support_service)}${this.filterOptions(state[10], 'entry.1614244431')}&entry.1799207904=${encodeURIComponent(state[11].welldone_1)} ${encodeURIComponent(state[11].welldone_2)} ${encodeURIComponent(state[11].welldone_3)} ${encodeURIComponent(state[11].welldone_4)}&entry.675792895=${encodeURIComponent(state[12].has_domain)}&entry.1246867300=${encodeURIComponent(state[12].domain_name)}${this.filterOptions(state[12], 'entry.29984370')}&entry.71105528=${encodeURIComponent(state[12].domain_user_name)} , ${encodeURIComponent(state[12].domain_pass)}&entry.1343135980=${encodeURIComponent(state[13].has_email_as_domain)}${this.filterOptions(state[13], 'entry.1896562524')}&entry.1219864198=${encodeURIComponent(state[13].domain_email_other)}&entry.599367263=${encodeURIComponent(state[14].has_hosting)}&entry.288947955=${encodeURIComponent(state[14].hosting_other)}${this.filterOptions(state[14], 'entry.1271781615')}&entry.1909757086=${encodeURIComponent(state[14].ftp_user_name)} , ${encodeURIComponent(state[14].ftp_pass)}&entry.861297342=${encodeURIComponent(state[15].public_email_1)} ${encodeURIComponent(state[15].public_email_2)} ${encodeURIComponent(state[15].public_email_3)}&entry.503826252=${encodeURIComponent(state[15].public_tel_1)} ${encodeURIComponent(state[15].public_tel_2)} ${encodeURIComponent(state[15].public_tel_3)}&entry.2051555964=${encodeURIComponent(state[16].company_location)}&entry.494429277=${encodeURIComponent(state[17].has_social)}&entry.1531209084=${encodeURIComponent(state[17].facebook)} ${encodeURIComponent(state[17].instegram)} ${encodeURIComponent(state[17].twitter)} ${encodeURIComponent(state[17].other_social)}&entry.1510609435=${encodeURIComponent(state[18].contact_name)}&entry.876428319=${encodeURIComponent(state[18].contact_email)}&entry.1372131745=${encodeURIComponent(state[18].contact_tel)}&entry.616775555=${encodeURIComponent(state[19].additional_requests)}`;
    axios.post(formURL, data).then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  // config mode: 
  /* 
  const data = `entry.1786555285=${encodeURIComponent(state[1].company_name)}
    &entry.1321904361=${encodeURIComponent(state[1].number_of_employes)}
    &entry.1253993391=${encodeURIComponent(state[2].about_business)}
    &entry.1458268927=${encodeURIComponent(state[3].unique)}
    ${this.filterOptions(state[3], 'entry.1066774901')}
    &entry.831446907=${encodeURIComponent(state[4].competitors)}
    &entry.1786305114=${encodeURIComponent(state[5].website_type)}
    &entry.1293470535=${encodeURIComponent(state[6].site_purpose)}
    &entry.400530999=${encodeURIComponent(state[7].target_audience)}
    ${this.filterOptions(state[7], 'entry.1913925543')}
    &entry.2117124053=${encodeURIComponent(state[8].has_website)}
    &entry.2011832805=${encodeURIComponent(state[8].website_address)}
    &entry.1864833407=${encodeURIComponent(state[8].what_you_like)}
    &entry.1110266555=${encodeURIComponent(state[8].what_you_dislike)}
    &entry.626387263=${encodeURIComponent(state[9].about_writings)}
    ${this.filterOptions(state[9], 'entry.1984545902')}
    &entry.569695937=${encodeURIComponent(state[10].support_service)}
    ${this.filterOptions(state[10], 'entry.1614244431')}
    &entry.1799207904=${encodeURIComponent(state[11].welldone_1)} ${encodeURIComponent(state[11].welldone_2)} ${encodeURIComponent(state[11].welldone_3)} ${encodeURIComponent(state[11].welldone_4)}
    &entry.675792895=${encodeURIComponent(state[12].has_domain)}
    &entry.1246867300=${encodeURIComponent(state[12].domain_name)}
    ${this.filterOptions(state[12], 'entry.29984370')}
    &entry.71105528=${encodeURIComponent(state[12].domain_user_name)} , ${encodeURIComponent(state[12].domain_pass)}
    &entry.1343135980=${encodeURIComponent(state[13].has_email_as_domain)}
    ${this.filterOptions(state[13], 'entry.1896562524')}
    &entry.1219864198=${encodeURIComponent(state[13].domain_email_other)}
    &entry.599367263=${encodeURIComponent(state[14].has_hosting)}
    &entry.288947955=${encodeURIComponent(state[14].hosting_other)}
    ${this.filterOptions(state[14], 'entry.1271781615')}
    &entry.1909757086=${encodeURIComponent(state[14].ftp_user_name)} , ${encodeURIComponent(state[14].ftp_pass)}
    &entry.861297342=${encodeURIComponent(state[15].public_email_1)} ${encodeURIComponent(state[15].public_email_2)} ${encodeURIComponent(state[15].public_email_3)}
    &entry.503826252=${encodeURIComponent(state[15].public_tel_1)} ${encodeURIComponent(state[15].public_tel_2)} ${encodeURIComponent(state[15].public_tel_3)}
    &entry.2051555964=${encodeURIComponent(state[16].company_location)}
    &entry.494429277=${encodeURIComponent(state[17].has_social)}
    &entry.1531209084=${encodeURIComponent(state[17].facebook)} ${encodeURIComponent(state[17].instegram)} ${encodeURIComponent(state[17].twitter)} ${encodeURIComponent(state[17].other_social)}
    entry.1510609435=${encodeURIComponent(state[18].contact_name)}
    &entry.876428319=${encodeURIComponent(state[18].contact_email)}
    &entry.1372131745=${encodeURIComponent(state[18].contact_tel)}
    &entry.616775555=${encodeURIComponent(state[19].additional_requests)}
`;
   */
    console.log(data);
  }

  filterOptions(obj ,entry) {
    var result = '';
    for (let key in obj) {
      if (obj[key] === true) {
        result += `&${entry}=${encodeURIComponent(key)}`
      }
    }
    return result;
  }

  skipQuestions(value, num) {
    this.setState({
      questionNumber: this.state.questionNumber + num,
      responses: [...this.state.responses, value]
    });
  }
  componentWillUpdate(nextProps, nextState) {
    document.getElementById('questions').classList.add('loading');
    setTimeout(function(){ document.getElementById('questions').classList.remove('loading'); }, 700);
  }
  render() {

    console.log('responses', this.state.responses);
    return (
        <section id="questions" className="question-box">
          <div className="loading-progress"></div>
          <Header questionNumber={this.state.questionNumber} />
          <Question questionNumber={this.state.questionNumber}
                    nextQuestion={this.nextQuestion}
                    saveResponse={this.saveResponse}
                    skipQuestions={this.skipQuestions}
           />
        </section>
    );
  }
};

export default App;