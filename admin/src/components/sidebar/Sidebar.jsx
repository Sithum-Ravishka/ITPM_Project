import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { BsFillStickiesFill } from "react-icons/bs";
import { GoDashboard } from "react-icons/go";
import { HiUsers } from "react-icons/hi";
import { MdDeliveryDining, MdInventory } from "react-icons/md";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "../grid";
import "./sidebar.scss";

const navItems = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: GoDashboard,
  },
  {
    name: "Customers",
    link: "/customers",
    icon: HiUsers,
  },
  {
    name: "Products",
    link: "/products",
    icon: MdInventory,
  },

  {
    name: "Categories",
    link: "/categories",
    icon: BiCategory,
  },
  {
    name: "Orders",
    link: "/orders",
    icon: BsFillStickiesFill,
  },
  {
    name: "Deliveries",
    link: "/deliveries",
    icon: MdDeliveryDining,
  },
];

const NavItem = styled.div`
  padding: 8px;
  font-size: 20px;
  width: inherit;
  color: white;
  cursor: pointer;
  ${({ active }) =>
    active ? "background-color: white;color: black;font-weight: bold;" : ""}
`;

export default function Sidebar() {
  const history = useHistory();
  const [activeMenu, setActiveMenu] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const navItem = navItems.find(({ link }) => link === location.pathname);
    if (navItem) setActiveMenu(navItem.name);
  }, [location.pathname, setActiveMenu]);
  return (
    <div>
      <h1 style={{ padding: 8, color: "white" }}>Grocery Store</h1>
      <Grid>
        {navItems.map(({ name, link, icon: Icon }) => {
          const active = activeMenu === name;
          return (
            <NavItem
              active={active}
              key={name}
              onClick={() => {
                setActiveMenu(name);
                history.push(link);
              }}
            >
              <Grid
                gridAutoFlow="column"
                gridGap="8px"
                justifyContent="start"
                alignItems="center"
              >
                {Icon && <Icon color={active ? "black" : "white"} />}
                {name}
              </Grid>
            </NavItem>
          );
        })}
      </Grid>
    </div>
  );
}
