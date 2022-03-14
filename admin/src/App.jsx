import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/admin_home/Home';
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
import D_Home from './pages/Deliver_Management/Deliver_Home/D_Home';


function App() {
  return (
    <BrowserRouter>
    <div className='sidebar'> 
      <Sidebar />
    </div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/deliver" element={<D_Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
