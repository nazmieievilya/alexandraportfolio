import React from "react";
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { menuData } from "../../data/MenuData";
import { useState } from "react";

const Header = () => {
    
    const [showMenu, setShowMenu] = useState(false)
    const StyleShowMenu = {
        right: showMenu ? '0%' : '-70%',
        padding: "0",
        marginTop: "80px",
        zIndex: '300',
        position: 'fixed',
        width: '70%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '2rem',
        color: 'white',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        transition: 'all 0.5s ease'
    }
    return (
            <> 
                    <div style={StyleShowMenu} >
                    
                    <CloseButton><h1 onClick={() => setShowMenu(prevShowMenu => !prevShowMenu )} >x</h1>
                    </CloseButton>
                    <MobileMenuList>
                        {menuData.map((item, index) => (
                            <NavLinkM to={item.link} key={index} >{item.title}</NavLinkM>
                        ))}
                    </MobileMenuList>
                    
                    </div>
                
            
            <Nav>
                
                
            <NavLink  to='/'>xauqra</NavLink>
            <Bars onClick={() => setShowMenu(prevShowMenu => !prevShowMenu )} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavLink to={item.link} key={index} >{item.title}</NavLink>
                ))}
            </NavMenu>
            
             </Nav>

                
        </>
       
    )
}

export default Header

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

    

`

const NavLink = styled(Link)`

    color: #fff ;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;


`
const NavLinkM = styled(Link)`

    color: #fff ;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;


`

const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        right: 0;
        margin-right: 1rem;
        font-size: 1.8rem;
        cursor: pointer;
    }

`


const NavMenu = styled.div`

    display: flex;
    align-items: center;
    margin-right: 48px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`



const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -10px;
    padding-right: 10px;
    top: 0;
    width: 100%;

`


const MobileMenuList = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const MobileMenu = styled.div`

    position: fixed;


`
