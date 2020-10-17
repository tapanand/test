import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store
} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import questionsReducer from './questions/Reducer';
import { IAppState } from "./app/IAppState";
import { Action } from "./questions/Actions";

const rootStore = combineReducers({
    questions: questionsReducer
});

export const createAppStore = (): Store<IAppState, Action> => {
    return applyMiddleware(thunk, logger)(createStore)(rootStore);
};
