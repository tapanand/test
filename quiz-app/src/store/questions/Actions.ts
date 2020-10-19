import IQuestion from '../../models/IQuestion';
import fetchQuestions from '../../services/QuestionsApi';

export enum actionTypes {
    LOAD_QUIZ = 'LOAD_QUIZ',
    RESET_QUIZ = 'RESET_QUIZ',
    UPDATE_INDEX = 'UPDATE_INDEX'
}

type PromiseAction = Promise<ILoadQuestionsAction>
type ThunkAction = (dispatch: Dispatch) => any
type Dispatch = (action:
    ILoadQuestionsAction |
    IUpdateIndexAction |
    ThunkAction |
    PromiseAction
) => any

export type Action =
    | ILoadQuestionsAction
    | IUpdateIndexAction;

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





