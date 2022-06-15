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
            <Link to="/"><p className='navLogo'>TRYHARDY</p></Link>
        </div>
        <nav className='nav__secondary'>
            <ul className='nav__list'>
                <li className='nav__item'><NavLink to="/category/ram">Memorias RAM</NavLink></li>
                <li className='nav__item'><NavLink to="/category/cpu">Procesadores</NavLink></li>
                <li className='nav__item'><NavLink to="/category/gpu">Placas de video</NavLink></li>
                <CartWidget />
            </ul>
        </nav>
    </div>
  )
}
export default NavBar;