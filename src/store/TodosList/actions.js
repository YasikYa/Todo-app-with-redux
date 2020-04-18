export const ADD_TODOS = 'ADD_TODOS';

export function addTodos(todos){
    return {
        type: ADD_TODOS,
        payload: todos
    }
}
