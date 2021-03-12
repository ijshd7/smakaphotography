import React from 'react';
import { Link } from "gatsby";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';

library.add(fab, faEnvelope)

const Logo = () => {
  return (
    <Link className="" to="/">
      <img className="" src={logo} alt="Samantha Maka logo"/>
    </Link>
  );
}

const Footer = () => {
    return (
      <footer className="bg-pink-200 text-white text-center italic">
        <Logo />
        <p className="">&copy; Samantha Maka Photography {new Date().getFullYear()}</p>
      </footer>
    );
}

export default Footer;