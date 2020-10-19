import React, { Component } from 'react';

import './InstructionComponent.css';
import {
    Link,
} from "react-router-dom";

class InstructionComponent extends Component<object, object> {
    render() {
        return (
            <div className="instruction">
                <p>Quiz contains a set of questions and lets the you select an answer for each one. The Quiz features three different types of questions.</p>
                <ul className="question-type">
                    <li> <span className="head"> Multiple: </span> <span className="desc">A multiple-choice question (predefined answer options)</span></li>
                    <li><span className="head">Boolean:</span> <span className="desc">A "true or false" only answer question</span></li>
                    <li><span className="head">Text:</span> <span className="desc">An open-ended text question</span></li>
                </ul>

                <p>Complexity levels are <span className="easy">EASY</span>, <span className="medium">MEDIUM</span> and <span className="hard">HARD</span></p>
                <div className="proceed">
                    <Link to='/quiz' className='btn btn-primary'>Proceed</Link>
                </div>
            </div>
        );
    }
}


export default InstructionComponent;
