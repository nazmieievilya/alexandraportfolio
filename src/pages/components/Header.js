import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { menuData } from "src/data/MenuData";
import { useState } from "react";
import Navigation from "src/pages/components/Navigation";
import { colors } from "data/colors";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const StyledShowMenu = styled.div`
    right: ${(props) => (props.expanded ? "0%" : "-70%")};
    transition: right 0.5s ease;
    padding: 0;
    margin-top: 80px;
    z-index: 300;
    position: fixed;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: white;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.7);
  `;
  return (
    <>
      <StyledShowMenu expanded={showMenu}>
        <CloseButton>
          <h1 onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}>
            x
          </h1>
        </CloseButton>
        <MobileMenuList>
          {menuData.map((item, index) => (
            <NavLinkM to={item.link} key={index}>
              {item.title}
            </NavLinkM>
          ))}
        </MobileMenuList>
      </StyledShowMenu>

      <Navigation setShowMenu={setShowMenu} />
    </>
  );
};

export default Header;

const NavLinkM = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -10px;
  padding-right: 10px;
  top: 0;
  width: 100%;
`;

const MobileMenuList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


