import React, { Component } from 'react';
//bootstrap components
import {  ProgressBar } from 'react-bootstrap';

export default class Header extends Component {
    
    currentProgress(number) {
        return (number === 0) ? 1 : (number * 5);
    }

    render() {
        return (
                <div className="container-fluid custom-header">
                    <div className="custom-progress-wrapper">
                        <ProgressBar now={this.currentProgress(this.props.questionNumber)} />
                    </div>
                </div>
            );
    }
}