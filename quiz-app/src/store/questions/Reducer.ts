import IQuestionsState from "./IQuestionsState";

import { Reducer } from 'redux';
import { Action, actionTypes } from "./Actions";

const defaultState: IQuestionsState = {
    questions: [],
    currentQuestion: null,
    currentQuestionIndex: 0,
    currentQuestionAnswer: '',
    isLastQuestion: 0,
    isAnswered: false
};

const questionsReducer: Reducer<IQuestionsState, Action> = (
    state: IQuestionsState = defaultState,
    action: Action
) => {
    switch (action.type) {
        case actionTypes.LOAD_QUIZ:
            return {
                ...state,
                questions: action.payload,
                currentQuestion: null,
                currentQuestionIndex: 0,
                currentQuestionAnswer: '',
                isLastQuestion: 0,
                isAnswered: false
            }
        case actionTypes.UPDATE_INDEX:
            const len = state.questions.length - 1;
            const idx = state.currentQuestionIndex;
            return {
                ...state,
                isLastQuestion: (len === idx + 1) ? 1 : 0,
                currentQuestionIndex: (len > idx) ? idx + 1 : idx
            }
        default:
            return state;
    }
};

export default questionsReducer;

