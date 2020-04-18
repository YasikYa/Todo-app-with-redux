import {combineReducers, createStore} from 'redux';
import { listReducer } from './TodosList/reducers';
import middleware from './middleware';
import {reducer as formReducer} from 'redux-form';

const reducer = combineReducers({
    todosList: listReducer,
    form: formReducer
});

export default createStore(reducer, middleware);