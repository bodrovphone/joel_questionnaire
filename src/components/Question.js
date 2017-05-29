import React, { Component } from 'react';
import Questions from '../data/questions_data';

export default class Question extends Component {
    conditionalRender() {
        return Questions.map((Question, index) => {
            if (index === this.props.questionNumber) return <Question key={index} {...this.props} />
        }); 
    }
    render() {
        return (
                <div className="block-fill-height">
                    <div className="block block-all block-xs-middle">
                        <div className="container">
                            {this.conditionalRender()}
                        </div>
                    </div>
                </div>
            );
    }
}