import React from 'react';
import TodoItemContainer from '../TodoItem/TodoItemContainer';

export function TodosList(props){
    const listItems = props.todos.map((todo) =>
        <TodoItemContainer key={todo.id} id={todo.id} title={todo.title} deadline={todo.deadline}/>
    )
    return (
        <div className="todosContainer">
            {listItems}
        </div>
    );
}