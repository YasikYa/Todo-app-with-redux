export const CREATE_TODO = 'CREATE_TODO';

function createWithcounter(){
    let counter = 0;
    return function(todo){
        counter++;
        return {
            type: CREATE_TODO,
            payload: {
                ...todo,
                id: counter,
                deadline: todo.deadline + counter
            }
        }
    }
}

export const createTodo = createWithcounter()