import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/admin_home/Home';
import Sidebar from "./components/sidebar/Sidebar";
import './app.scss';
import DeliverHome from './pages/DeliverManagement/DeliverHome/DeliverHome';
import DeliverRegister from './pages/DeliverManagement/DeliverRegister/DeliverRegister';
import Topbar from './components/topbar/Topbar';


function App() {
  return (
    <BrowserRouter>
    <div className='sidebar'> 
      <Sidebar />
    </div>
    <div>
      <Topbar/>
    </div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/deliver" element={<DeliverHome/>} />
        <Route path="/deliver_register" element={<DeliverRegister/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
