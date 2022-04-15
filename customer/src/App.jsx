import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./app.scss";
import Topbar from "./components/Topbar/Topbar";
import DeliverLogin from "./pages/DeliverManagement/DeliverLogin/DeliverLogin";
import UsingIn from "./pages/userManegment/UserSingIn/UsingIn";
import ShoppingCart from "./pages/OrderManagement/ShoppingCart/ShoppingCart";
import UserProfile from "./pages/userManegment/userProfile/UserProfile";
import AddCardDetails from "./pages/OrderManagement/ShoppingCart/AddCardDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="htopbar">
        <Topbar />
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<DeliverLogin />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/user-singin" element={<UsingIn />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/add-card-details" element={<AddCardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
