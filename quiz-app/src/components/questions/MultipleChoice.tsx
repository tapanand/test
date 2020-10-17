import React from 'react';
import Check from 'react-bootstrap/FormCheck';

import IQuestion from '../../models/IQuestion';


interface IMultipleChoiceProps extends IQuestion {

}

class MultipleChoice extends React.PureComponent<IMultipleChoiceProps, object> {
    constructor(props: IMultipleChoiceProps) {
        super(props);
    }
    render() {
        return (
            <>
                <Check type="radio" label={this.props.correct_answer} name='radio' key='1' value={this.props.correct_answer} id='k1' />

                {
                    this.props.incorrect_answers?.map((ans, idx) => (
                        <Check type="radio" label={ans} name='radio' key={idx} id={`'k'${ idx + 99 }`} />
                    ))
                }
            </>

        );
    }
}

export default MultipleChoice;
