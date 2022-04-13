import {
  Report,
  Store,
  ListAlt,
  LocalGroceryStore,
  Person,
  LocalShipping,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import logo from "./logo.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <div className="sidebarListlogo">
                <img
                  component={Link}
                  to="/"
                  src={logo}
                  alt="Logo"
                  className="logo"
                />
              </div>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Store className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <ListAlt className="sidebarIcon" />
                Customer Management
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LocalGroceryStore className="sidebarIcon" />
                Products Management
              </li>
            </Link>
            <Link to="/categories" className="link">
              <li className="sidebarListItem">
                <LocalGroceryStore className="sidebarIcon" />
                Category Management
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Person className="sidebarIcon" />
                Order Management
              </li>
            </Link>
            <Link to="/deliver" className="link">
              <li className="sidebarListItem active">
                <LocalShipping className="sidebarIcon" />
                Deliver Management
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
