import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reducer from './Store/Store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from 'redux';


const store = createStore(reducer);
const persistor = persistStore(store);


ReactDOM.render(
  <Provider store={store}>
    {/*redux-persist를 사용함으로써 리로딩되어도 store 값이 유지가 됨.*/}
    <PersistGate persistor={persistor} />
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
