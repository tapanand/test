import IQuestion from '../../models/IQuestion';
import fetchQuestions from '../../services/QuestionsApi';

export enum actionTypes {
    LOAD_QUIZ = 'LOAD_QUIZ',
    CLEAR_CURRENT_QUIZ = 'CLEAR_CURRENT_QUIZ',
    LOAD_NEXT_QUESTION = 'LOAD_NEXT_QUESTION',
    SAVE_CURRENT_QUESTION = 'SAVE_CURRENT_QUESTION',
    UPDATE_INDEX = 'UPDATE_INDEX',
    TOGGLE_ANSWERED = 'TOGGLE_ANSWERED'
}

type PromiseAction = Promise<ILoadQuestionsAction>
type ThunkAction = (dispatch: Dispatch) => any
type Dispatch = (action:
    ILoadQuestionsAction |
    IUpdateIndexAction |
    IToggleAnswerAction |
    ThunkAction |
    PromiseAction
) => any

export type Action =
    | ILoadQuestionsAction
    | IUpdateIndexAction
    | IToggleAnswerAction;

interface ILoadQuestionsAction {
    type: actionTypes.LOAD_QUIZ;
    payload: IQuestion[];
}

const createLoadQuestionsAction = (questions: IQuestion[]): Action => {
    return {
        type: actionTypes.LOAD_QUIZ,
        payload: questions
    }
};

export function fetchQuestionList(): ThunkAction {
    return (dispatch: Dispatch) => {
        fetchQuestions().then((data: IQuestion[]) => {
            dispatch(createLoadQuestionsAction(data));
        });
    }
}

interface IUpdateIndexAction {
    type: actionTypes.UPDATE_INDEX;
}

const updateIndexAction = (): Action => {
    return {
        type: actionTypes.UPDATE_INDEX
    }
};

export function updateIndex(): ThunkAction {
    return (dispatch: Dispatch) => {
        dispatch(updateIndexAction());
    }
}

interface IToggleAnswerAction {
    type: actionTypes.TOGGLE_ANSWERED;
}
const toggleAnswerAction = (): Action => {
    return {
        type: actionTypes.TOGGLE_ANSWERED,
    }
};

export function toggleAnswer(): ThunkAction {
    return (dispatch: Dispatch) => {
        dispatch(toggleAnswerAction());
    }
}






