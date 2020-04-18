import { TodosList } from "./TodosList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {addTodos} from "../../store/TodosList/actions";
import React from 'react';

function TodosListContainer(props){
    return (
        <TodosList todos={props.todos} createTodo={props.createTodo}/>
    );
}

const mapState = (state) => {
    return {
        todos: state.todosList
    }
}

const mapDispatch = (dispatch) => bindActionCreators({addTodos}, dispatch);

export default connect(mapState, mapDispatch)(TodosListContainer);