import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DeliverContextProvider } from './context/deliverContext/DeliverContext';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { DeliverAssignContextProvider } from './context/deliverAssignContext/DeliverAssignContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DeliverContextProvider>
        <DeliverAssignContextProvider>
          <App />
        </DeliverAssignContextProvider>
      </DeliverContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
