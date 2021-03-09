import React, { useState, useRef } from "react";
import styled from 'styled-components';
import { BurgerHook } from '../hooks/BurgerHook';
import introImg from '../images/IMG_0004.jpg';
import logo from '../images/logo.png';
import { Link } from 'gatsby';

const background = {
  backgroundImage: `url(${introImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  minHeight: '340px'
};


const theme = {
  primaryDark: '#0D0C1D',
  primaryLight: '#EFFFFA',
  primaryHover: '#343078',
  mobile: '576px',
}

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

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
  )
}

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

const IndexPage = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  BurgerHook(node, () => setOpen(false));
  return (
    <main className="h-screen w-full" style={background}>
      <div>
        <h1 className="text-center text-white">Hello Friend.</h1>
      </div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen}/>
      </div>
    </main>
  )
}

export default IndexPage
