import React from "react";
import styled from 'styled-components';
import logo from '../images/logo.png';
import { Link } from 'gatsby';

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${theme.primaryLight};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    opacity: 0.5;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    
    @media (max-width: ${theme.mobile}) {
      width: 100%;
    }
  
    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 1rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${theme.primaryDark};
      text-decoration: none;
      transition: color 0.3s linear;
      
      @media (max-width: ${theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
      }
  
      &:hover {
        color: ${theme.primaryHover};
      }
    }
`;
  
const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <img className="" alt="logo" src={logo}/>
        <Link to="/">
          <span role="img" aria-label="home"></span>
          Home
        </Link>
        <Link to="/">
          <span role="img" aria-label="portfolio"></span>
          Portfolio
        </Link>
        <Link to="/">
          <span role="img" aria-label="pricing"></span>
          Pricing
        </Link>
        <Link to="/">
          <span role="img" aria-label="schedule"></span>
          Schedule
        </Link>
        <Link to="/">
          <span role="img" aria-label="contact"></span>
          Contact
        </Link>
      </StyledMenu>
    );
}

export default Menu;