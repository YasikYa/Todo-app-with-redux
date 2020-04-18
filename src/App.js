import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import TodoListContainer from './components/TodosList/TodosListContainer';
import TodoForm from './components/TodoForm/TodoForm';
import store from './store/reducers';

function App() {
  return (
    <Provider store={store}>
      <TodoForm/>
      <TodoListContainer/>
    </Provider>
  )
}

export default App;
