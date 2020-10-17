import React from 'react';
import IQuestion from '../../models/IQuestion';


interface IQuestionProps extends IQuestion {

}

class Question extends React.PureComponent<IQuestionProps, object> {
    constructor(props: IQuestionProps) {
        super(props);
    }
    render() {
        //This is not recommeded. Remove immediately. May cause XSS issues
        return (
            <h4 className="question" dangerouslySetInnerHTML={{ __html: this.props.question }} />
        );
    }
}

export default Question;
