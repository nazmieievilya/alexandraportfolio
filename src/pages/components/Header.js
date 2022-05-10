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
        zIndex: '300',
        position: 'fixed',
        width: '70%',
        height: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        color: 'white',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        visibility: 'visible',
        transition: 'all 0.5s ease'
    }
    return (
            <> 
            <div style={StyleShowMenu} >
               
                 <h1 onClick={() => setShowMenu(prevShowMenu => !prevShowMenu )} >X</h1>
                 <h3>пока не робе</h3>
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
