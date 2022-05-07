import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "../grid";
import logo from "./logo.png";
import "./topbar.scss";

const NavItem = styled.div`
  padding: 8px;
  font-size: 20px;
  text-align: center;
  width: max-content;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  color: white;
  ${({ active }) =>
    active ? "background-color: white;color: black;font-weight: bold;" : ""}
  :hover {
    background-color: white;
    color: black;
    font-weight: bold;
  }
`;

const BrandWrapper = styled.div`
  padding: 8px;
`;

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Cart",
    link: "/all-cart",
  },

  {
    name: "Login",
    link: "/user-singin",
  },
];

export default function Topbar() {
  const history = useHistory();
  const [activeMenu, setActiveMenu] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const navItem = navItems.find(({ link }) => link === location.pathname);
    if (navItem) setActiveMenu(navItem.name);
  }, [location.pathname, setActiveMenu]);

  return (
    <Grid gridAutoFlow="column">
      <BrandWrapper>
        <img width="150px" src={logo} alt="Logo" />
      </BrandWrapper>
      <Grid
        gridAutoFlow="column"
        justifyContent="right"
        gridGap="16px"
        alignItems="flex-end"
        mr="32px"
      >
        {navItems.map(({ name, link }) => (
          <NavItem
            active={activeMenu === name}
            key={name}
            onClick={() => {
              setActiveMenu(name);
              history(link);
            }}
          >
            {name}
          </NavItem>
        ))}
      </Grid>
    </Grid>
  );
}
