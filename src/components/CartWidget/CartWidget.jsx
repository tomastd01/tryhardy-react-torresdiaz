import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import "./CartWidget.css";

function CartWidget() {
    const {getCartQuantity} = useContext(CartContext);

    return (
        <>
            <Link to="/cart">
                    { getCartQuantity() ?
                        <li className="nav__item cart-widget orange-hl">
                            <i className="bi bi-cart"></i>
                            <span>{getCartQuantity()}</span>
                        </li> :
                        <li className="nav__item cart-widget">
                            <i className="bi bi-cart"></i>
                        </li> 
                    }
            </Link>
        </>
    );
}

export default CartWidget;