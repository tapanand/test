import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import IQuestion from '../../models/IQuestion';
import './ResultComponent.css';
import { fetchQuestionList } from '../../store/questions/Actions';


interface IQuestionListProps extends RouteComponentProps {
    questions: IQuestion[];
    fetchQuestionList: typeof fetchQuestionList;
}
class ConnectedResultComponent extends React.PureComponent<IQuestionListProps, object> {
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

    resetAppState = () => {
        this.props.fetchQuestionList();
    }

    render() {
        const quizCount = this.defaultState.questions.length;
        this.extractFinalValues();

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
                <Link to='/quiz' className='btn btn-primary' onClick={this.resetAppState}>
                    Restart Quiz
                </Link>
            </div>
        );
    }

    extractFinalValues = (): void => {
        this.defaultState.questions.forEach((ques: IQuestion) => {
            if (ques.select_answer && ques.select_answer.length) {
                const ans = ques.select_answer.replace(/\s\n\r/g, '');
                if (ques.correct_answer.toLowerCase() === ans.toLowerCase()) {
                    this.countRight = this.countRight + 1;
                }
                else {
                    this.countWrong = this.countWrong + 1;
                }
            }
            return;
        });
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchQuestionList: () => dispatch(fetchQuestionList())
    };
}

const ResultComponent = connect(
    null,
    mapDispatchToProps
)(ConnectedResultComponent);

export default ResultComponent;
