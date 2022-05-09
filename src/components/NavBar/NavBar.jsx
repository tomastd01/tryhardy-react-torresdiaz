import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './NavBar.css';

import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
  return (
    <div className='navBar'>
        <nav className='nav__primary'>
            <ul className='nav__list'>
                <li className='nav__item'><NavLink to="/">Comprar</NavLink></li>
            </ul>
        </nav>
        <div className='logoWrapper'>
            <Link to="/"><p className='navLogo'>mebel</p></Link>
        </div>
        <nav className='nav__secondary'>
            <ul className='nav__list'>
                <li className='nav__item'><NavLink to="/category/escritorios">Escritorios</NavLink></li>
                <li className='nav__item'><NavLink to="/category/mesas">Mesas</NavLink></li>
                <li className='nav__item'><NavLink to="/category/estanterias">Estanterías</NavLink></li>
                <CartWidget />
            </ul>
        </nav>
    </div>
  )
}
export default NavBar;