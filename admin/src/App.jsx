import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/admin_home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import DeliverHome from "./pages/DeliverManagement/DeliverHome/DeliverHome";
import DeliverRegister from "./pages/DeliverManagement/DeliverRegister/DeliverRegister";
import Topbar from "./components/topbar/Topbar";
import DeliveryOrderList from "./pages/DeliverManagement/DeliveryOrderList/DeliveryOrderList";
import DeliverAssign from "./pages/DeliverManagement/DeliverAssign/DeliverAssign";
import Categories from "./pages/category/categories";

function App() {
  return (
    <BrowserRouter>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div>
        <Topbar />
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/deliver-home" element={<DeliverHome />} />
        <Route path="/deliver-register" element={<DeliverRegister />} />
        <Route path="/delivers" element={<DeliveryOrderList />} />
        <Route path="/deliver/:deliverId" element={<DeliverAssign/>} />
        <Route path="/categories" element={<Categories />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;