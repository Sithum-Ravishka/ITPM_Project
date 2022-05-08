import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/admin_home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import DeliverHome from "./pages/DeliverManagement/DeliverHome/DeliverHome";
import DeliverRegister from "./pages/DeliverManagement/DeliverRegister/DeliverRegister";
import Topbar from "./components/topbar/Topbar";
import DeliveryOrderList from "./pages/DeliverManagement/DeliveryOrderList/DeliveryOrderList";
import DeliverAssign from "./pages/DeliverManagement/DeliverAssign/DeliverAssign";
import Categories from "./pages/category/categories";
import Login from "./pages/login/Login";
import DeliveryAssignList from "./pages/DeliverManagement/DeliveryAssignList/DeliveryAssignList";
import DRegisterValidation from "./components/DeliverManagement/DValidation/DRegisterValidation";
import EditAssignDelivery from "./pages/DeliverManagement/EditAssignDelivery/EditAssignDelivery";
import Products from "./pages/product/products";
import UserList from "./pages/UserManagement/UserList/UserList";
import UserEditeDetails from "./pages/UserManagement/UserEditDetails/UserEditeDetails";

function App() {
  return (
    <Router>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div>
        <Topbar />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/deliver-home">
          <DeliverHome />
        </Route>
        <Route path="/deliver-register">
          <DeliverRegister />
        </Route>
        <Route path="/delivers">
          <DeliveryOrderList />
        </Route>
        <Route path="/deliver/:deliverId">
          <DeliverAssign />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/delivery-assign-List">
          <DeliveryAssignList />
        </Route>
        <Route path="/successful-register">
          <DRegisterValidation />
        </Route>
        <Route path="/deliverassign/:deliverassignId">
          <EditAssignDelivery />
        </Route>
        <Route path="/userlist">
          <UserList />
        </Route>
        <Route path="/customeruser/:customeruserId">
          <UserEditeDetails/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
