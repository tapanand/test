import React, { PureComponent, FormEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import Check from 'react-bootstrap/FormCheck';
import { connect } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';

import IQuestion from "../../models/IQuestion";
import { IAppState } from "../../store/app/IAppState";
import { fetchQuestionList, updateIndex } from "../../store/questions/Actions";
import { shuffleOptions } from "../../GenerateRandoms";

import Question from '../questions/Question';
import './QuizComponent.css';

interface IQuestionListProps extends RouteComponentProps {
    questions: IQuestion[];
    fetchQuestionList: typeof fetchQuestionList;
    currentQuestionIndex: number;
    updateIndex: typeof updateIndex;
    isLastQuestion: number;
    isAnswered: boolean;
}


class ConnectedQuizComponent extends PureComponent<IQuestionListProps, object> {
    constructor(props: IQuestionListProps) {
        super(props);
        this.handleNextQuestion = this.handleNextQuestion.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    public componentDidMount() {
        this.props.fetchQuestionList();
    }

    handleNextQuestion(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const reachedLast = this.props.isLastQuestion;

        if (reachedLast === 0) {
            this.props.updateIndex();
        }

        if (reachedLast === 1) {
            this.props.history.push('result', { questions: this.props.questions });
        }

    }

    handleOnchange(e: FormEvent<HTMLInputElement>) {
        this.props.questions[this.props.currentQuestionIndex].select_answer = e.currentTarget.value;
        console.log(this.props);
    }

    renderSwitch(question: IQuestion) {
        switch (question.type) {
            case 'multiple':
            case 'boolean':
                return (
                    <>
                        {
                            shuffleOptions([...question.incorrect_answers, question.correct_answer]).map((item, idx) => (
                                <Check type="radio" label={item} name='radio' key={idx} value={item.toString()} onChange={this.handleOnchange} id={`k${ idx }`} />
                            ))
                        }
                    </>);
            case 'text':
                return (
                    <>
                        <label htmlFor="" key='2'>
                            <input type="text" name="quize" placeholder='Answer..' id='k1' onChange={this.handleOnchange} />
                        </label>

                    </>

                );
        }
    }

    renderButton() {
        const reachedLast = this.props.isLastQuestion;
        if (reachedLast === 0) {
            return (
                <Button variant="primary" type="submit" >
                    Next
                </Button>
            )
        }
        else {
            return (
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            )
        }
    }



    render() {
        const { questions, currentQuestionIndex } = this.props;
        const question: IQuestion = questions[currentQuestionIndex];
        return (

            <div className="quiz-container">
                <Form className={`quiz ${ question && question.difficulty }`} key={currentQuestionIndex} onSubmit={this.handleNextQuestion} name='quizeForm' id='quizeForm'>
                    <div className="quiz-meta">
                        <span><h1>Question</h1></span>
                        <span className="badge badge-primary"> {this.props.currentQuestionIndex + 1} of {this.props.questions.length}</span>
                    </div>
                    <Form.Group>
                        <Form.Text className="text-muted">
                            {question && <Question {...question} />}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        {question && this.renderSwitch(question)}
                    </Form.Group>
                    <div className='submit-btn-div'>
                        {
                            this.renderButton()
                        }
                    </div>
                </Form>
            </div >
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        questions: state.questions.questions,
        currentQuestionIndex: state.questions.currentQuestionIndex,
        currentQuestion: state.questions.currentQuestion,
        currentQuestionAnswer: state.questions.currentQuestionAnswer,
        isLastQuestion: state.questions.isLastQuestion
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchQuestionList: () => dispatch(fetchQuestionList()),
        updateIndex: () => dispatch(updateIndex()),
    };
}

const QuizComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedQuizComponent);

export default QuizComponent;
