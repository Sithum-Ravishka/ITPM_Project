import "./sidebar.css";

import {
  Report,
  Store,
  ListAlt,
  LocalGroceryStore,
  Person,
  LocalShipping,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Store className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <ListAlt className="sidebarIcon" />
                Orders Management
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <LocalGroceryStore className="sidebarIcon" />
                Products Management
              </li>
            </Link>
            <Link to="/lists" className="link">
              <li className="sidebarListItem">
                <Person className="sidebarIcon" />
                Employee Management
              </li>
            </Link>
            <Link to="/deliver" className="link">
              <li className="sidebarListItem active">
                <LocalShipping className="sidebarIcon" />
                Deliver Management
              </li>
            </Link>
            <Link to="/newList" className="link">
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

