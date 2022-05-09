import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
  return (
    <div className='navBar'>
        <nav className='nav__primary'>
            <ul className='nav__list'>
                <li className='nav__item'><a className='nav__link' href="#">Comprar</a></li>
            </ul>
        </nav>
        <div className='logoWrapper'>
            <Link to="/"><p className='navLogo'>mebel</p></Link>
        </div>
        <nav className='nav__secondary'>
            <ul className='nav__list'>
                <li className='nav__item'><a className='nav__link' href="#">Galería</a></li>
                <li className='nav__item'><a className='nav__link' href="#">Nosotros</a></li>
                <CartWidget />
            </ul>
        </nav>
    </div>
  )
}
export default NavBar;