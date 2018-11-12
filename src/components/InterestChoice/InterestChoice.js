import React, { Component } from 'react';
import './InterestChoice.css';

class InterestChoice extends Component {
    state = {
        interest : [
            { id: 1, text: 'Music' },
            { id: 2, text: 'Social'},
            { id: 3, text: 'Game'},
            { id: 4, text: 'Fashion'},
            { id: 5, text: 'Fitness'},
            { id: 6, text: 'Education'},
            { id: 7, text: 'Construction'},
            { id: 8, text: 'Inconvenience solution'},
            { id: 9, text: 'Mechanical Engineering'},
            { id: 10, text: 'Economy'},
            { id: 11, text: 'Image processing'},
        ]
    }

    render() {
        const { interest } = this.state;
        const interestList = interest.map(
            ({id, text}) => (
                <button id={id}> {text} </button>
            )
        )

        return (
            <div className="frame">
                {interestList}
            </div>
        );
    }
}

export default InterestChoice;