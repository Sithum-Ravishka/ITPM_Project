import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./app.scss";
import Topbar from "./components/Topbar/Topbar";
import DeliverLogin from "./pages/DeliverManagement/DeliverLogin/DeliverLogin";
import UsingIn from "./pages/userManegment/UserSingIn/UsingIn";
import ShoppingCart from "./pages/OrderManagement/ShoppingCart/ShoppingCart";
import UserProfile from "./pages/userManegment/userProfile/UserProfile";
import AddCardDetails from "./pages/OrderManagement/ShoppingCart/AddCardDetails";
import OrderSuccess from "./pages/OrderManagement/ShoppingCart/OrderSuccess";
import MyOrders from "./pages/OrderManagement/ShoppingCart/MyOrders";
import UserRegister from "./pages/userManegment/UserRegister/UserRegister";
<<<<<<< HEAD
import { Products } from "./pages/Products/Products";
=======
import Allcart from "./pages/OrderManagement/ShoppingCart/Allcart";
import { Products } from "./pages/Products/Products";
import Edit from "./pages/OrderManagement/ShoppingCart/Edit";
>>>>>>> 927dc2b1f602fc2852adce49de62cc6ab641efca

function App() {
  return (
    <Router>
      <div className="htopbar">
        <Topbar />
      </div>
<<<<<<< HEAD
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/signin" exact element={<DeliverLogin />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/user-singin" element={<UsingIn />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/add-card-details" element={<AddCardDetails />} />
        <Route path="/Order-success" element={<OrderSuccess />} />
        <Route path="/login" exact element={<DeliverLogin />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/myOrders" element={<MyOrders />} />

        <Route path="/user-register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
=======
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/signin">
          <DeliverLogin />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart />
        </Route>
        <Route path="/user-singin">
          <UsingIn />
        </Route>
        <Route path="/user-profile">
          <UserProfile />
        </Route>
        <Route path="/add-card-details">
          <AddCardDetails />
        </Route>
        <Route path="/Order-success">
          <OrderSuccess />
        </Route>
        <Route path="/login">
          <DeliverLogin />
        </Route>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
        <Route path="/myOrders">
          <MyOrders />
        </Route>
        <Route path="/user-register">
          <UserRegister />
        </Route>
        <Route path="/all-cart">
          <Allcart />
        </Route>
        <Route path="/shoppingdata/:shoppingdataId">
          <Edit />
        </Route>
      </Switch>
    </Router>
>>>>>>> 927dc2b1f602fc2852adce49de62cc6ab641efca
  );
}

export default App;
