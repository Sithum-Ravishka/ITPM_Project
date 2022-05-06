import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShoppingDataContextProvider } from './context/shoppingDataContext/ShoppingDataContext';
import { CardDataContextProvider } from './context/cardDataContext/CardDataContext';
import { CustomerUserContextProvider } from './context/CustomerUsersContext/CustomerUserContext';


ReactDOM.render(
  <React.StrictMode>
    <ShoppingDataContextProvider>
      <CardDataContextProvider>
        <CustomerUserContextProvider>
        <App />
        </CustomerUserContextProvider>
      </CardDataContextProvider>
    </ShoppingDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
