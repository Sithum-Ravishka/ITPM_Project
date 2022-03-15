import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/admin_home/Home';
import Sidebar from "./components/sidebar/Sidebar";
import './app.scss';
import DHome from './pages/DeliverManagement/DHome/DHome';


function App() {
  return (
    <BrowserRouter>
    <div className='sidebar'> 
      <Sidebar />
    </div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/deliver" element={<DHome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
