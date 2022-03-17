import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './app.scss';
import Topbar from './components/Topbar/Topbar';
import DeliverLogin from './pages/DeliverManagement/DeliverLogin/DeliverLogin';

function App() {
  return (
    <BrowserRouter>
      <div className='htopbar'>
        <Topbar />
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<DeliverLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;