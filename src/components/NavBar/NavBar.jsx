import React from 'react';
import './NavBar.css';

function NavBar(props) {
  return (
    <div className='navBar'>
        <nav className='nav__primary'>
            <ul className='nav__list'>
                <li className='nav__item'><a className='nav__link' href="#">Comprar</a></li>
            </ul>
        </nav>
        <div className='logoWrapper'>
            <a href='./index.html'><p className='navLogo'>mebel</p></a>
        </div>
        <nav className='nav__secondary'>
            <ul className='nav__list'>
                <li className='nav__item'><a className='nav__link' href="#">Galería</a></li>
                <li className='nav__item'><a className='nav__link' href="#">Nosotros</a></li>
                <li className='nav__item'><a className='nav__link' href="#"><i class="bi bi-cart"></i></a></li>
            </ul>
        </nav>
    </div>
  )
}
export default NavBar;