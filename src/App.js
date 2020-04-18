import React from 'react';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      
    </Provider>
  )
}

export default App;
