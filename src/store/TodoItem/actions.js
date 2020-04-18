export const DELETE_TODO = 'DELETE_TODO';


export function deleteTodo(id){
    return{
        type: DELETE_TODO,
        payload: id
    }
}