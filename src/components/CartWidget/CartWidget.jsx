import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';

function CartWidget() {
    const {getCartQuantity} = useContext(CartContext);

    return (
        <>
            <Link to="/cart">
                    { getCartQuantity() !== 0 ?
                        <li className="nav__item">
                            <i className="bi bi-cart"></i>
                            <span>{getCartQuantity()}</span>
                        </li> :
                        <li className="nav__item">
                            <i className="bi bi-cart"></i>
                        </li> }
            </Link>
        </>
    );
}

export default CartWidget;