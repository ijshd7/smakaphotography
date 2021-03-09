import React, { useState, useRef } from 'react';
import Burger from './Burger';
import Menu from './Menu';
import Footer from './Footer';
import { BurgerHook } from '../hooks/BurgerHook';

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    BurgerHook(node, () => setOpen(false));
    return (
        <>
            <header ref={node}>
                <Burger open={open} setOpen={setOpen}/>
                <Menu open={open} setOpen={setOpen}/>
            </header>
            {children}
            <Footer />
        </>
    );
}

export default Layout;