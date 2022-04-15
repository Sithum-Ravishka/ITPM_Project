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
        <Route path="/deliveries">
          <DeliveryOrderList />
        </Route>
        <Route path="/deliver/:deliverId">
          <DeliverAssign />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
