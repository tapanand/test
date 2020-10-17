import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import IQuestion from '../../models/IQuestion';
import './ResultComponent.css';


interface IQuestionListProps extends RouteComponentProps {
    questions: IQuestion[];
}
class ResultComponent extends React.PureComponent<IQuestionListProps, object> {
    defaultState: any = {};
    countRight = 0;
    countWrong = 0;
    finalScore = 0;
    percentage = 0;
    constructor(props: IQuestionListProps) {
        super(props);

        this.defaultState = {
            ...this.props.history.location.state
        }
    }

    render() {
        const quiz_count = this.defaultState.questions.length;

        console.log(this.defaultState.questions);
        this.defaultState.questions.map((ques: IQuestion) => {

            if (ques.select_answer && ques.select_answer.length) {
                const ans = ques.select_answer.replace(/\s\n\r/g, '');
                console.log(ans);
                if (ques.correct_answer === ans) {
                    this.countRight = this.countRight + 1;
                }
                else {
                    this.countWrong = this.countWrong + 1;
                }
            }
        });
        const quizCount = this.defaultState.questions.length;

        return (
            <div className="container" >
                <div className="row">
                    <h2> SUMMARY</h2>
                </div>
                <div className="row">
                    <div className="summary">
                        <p>Correct: {this.countRight}</p>
                        <p>Wrong: {this.countWrong}</p>
                        <p>Questions answered: {this.countRight + this.countWrong}</p>
                        <p>Final Score: {Math.floor((this.countRight + this.countWrong) * 100 / quizCount)}%</p>
                    </div>
                </div>
                <Link to='/quiz' className='btn btn-primary'>
                    Restart Quiz
                </Link>
            </div>


        );
    }
}

export default ResultComponent;
