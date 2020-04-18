import React from 'react';

export function TodoItem(props){
    return (
        <div className="itemContainer">
            <label>{props.title}</label>
            <label>{props.deadline}</label>
            <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
        </div>
    );
}