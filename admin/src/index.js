import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DeliverContextProvider } from './context/deliverContext/DeliverContext';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { DeliverAssignContextProvider } from './context/deliverAssignContext/DeliverAssignContext';
import { DeliveryUserContextProvider } from './context/deliveryUserContext/DeliveryUserContext';
import { CustomerUserContextProvider } from './context/CustomerUsersContext/CustomerUserContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DeliverContextProvider>
        <DeliverAssignContextProvider>
          <DeliveryUserContextProvider>
            <CustomerUserContextProvider>
            <App />
            </CustomerUserContextProvider>
          </DeliveryUserContextProvider>
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
