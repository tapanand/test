import React from 'react';
import Check from 'react-bootstrap/FormCheck';

import IQuestion from '../../models/IQuestion';


interface IBooleanProps extends IQuestion {

}

class BooleanChoice extends React.PureComponent<IBooleanProps, object> {
    constructor(props: IBooleanProps) {
        super(props);
    }
    render() {
        return (
            <>
                <Check type="radio" label={this.props.correct_answer} name="quize" value={this.props.correct_answer == 'False' ? 'false' : 'true'} key='1' />
                {
                    this.props.incorrect_answers?.map((ans, idx) => (
                        <Check type="radio" label={ans} name="quize" value={ans == 'False' ? 'false' : 'true'} key='2' />
                    ))
                }

            </>

        );
    }
}

export default BooleanChoice;
