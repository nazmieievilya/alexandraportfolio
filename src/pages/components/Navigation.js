import React from "react";
import styled from "styled-components";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { menuData } from "src/data/MenuData";
import { Link } from "gatsby";
import { colors } from "data/colors";
const Navigation = ({ setShowMenu }) => {
  return (
    <Nav>
      <NavLink to="/">xauqra</NavLink>
      <Bars onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  );
};
const Nav = styled.nav`
  font-family: sans-serif;
  background: rgb(0, 0, 0, 0.7);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  position: relative;

  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
`;
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
`;
const Bars = styled(FaBars)`
  display: none;
  color: ${colors.white};

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    margin-right: 1rem;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default Navigation;
