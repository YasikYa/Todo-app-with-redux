import { ADD_TODOS } from "./actions";
import {DELETE_TODO} from '../TodoItem/actions';
import {CREATE_TODO} from '../TodoForm/actions';

const defaultState =  [{
        id: '0000',
        title: 'test',
        deadline: Date.now()
    }]

export function listReducer(state = defaultState, action){
    switch(action.type){
        case DELETE_TODO: 
            return  state.filter(todo => todo.id !== action.payload);
        
        case ADD_TODOS:
            return [...state, ...action.payload];

        case CREATE_TODO:
            return  [...state, action.payload];
    }
    return state;
}