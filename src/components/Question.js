import React, { Component } from 'react';
import Questions from '../data/questions_data';

import { Button } from 'react-bootstrap';

export default class Question extends Component {

    render() {
        return (
                <div className="block-fill-height">
                    <div className="block block-all block-xs-middle">
                        <div className="container">
                            {Questions[this.props.questionNumber](this.props)}
                            <div className="custom-question-centered custom-buttom-centered">
                                <Button bsStyle="primary"
                                        onClick={this.props.nextQuestion}
                                >
                                    NEXT
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}