import React from 'react';
import IQuestion from '../../models/IQuestion';


interface IQuestionProps extends IQuestion {

}

class Question extends React.PureComponent<IQuestionProps, object> {

    //This is the hack for escaping html symbol codes in response json.
    //React jsx doesnot support escaping of embedded special codes straight away
    createDom = (str: string) => {
        const newDiv = document.createElement("span");
        newDiv.innerHTML = str;
        return newDiv.innerText;
    }

    render() {
        return (
            <h4 className="question">{this.createDom(this.props.question)} </h4>
        );
    }
}

export default Question;
