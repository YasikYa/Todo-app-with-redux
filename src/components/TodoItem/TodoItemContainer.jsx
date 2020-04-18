import React from 'react';
import { TodoItem } from './TodoItem';
import { connect } from 'react-redux';
import {deleteTodo} from '../../store/TodoItem/actions'
import { bindActionCreators } from 'redux';

function TodoItemContainer(props){
    return (
        <TodoItem deleteTodo={props.deleteTodo} id={props.id} title={props.title} deadline={props.deadline}/>
    )
}

const mapDispatch = (dispatch) => bindActionCreators({deleteTodo}, dispatch);

export default connect(null, mapDispatch)(TodoItemContainer);