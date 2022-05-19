import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../store/CartContext';
import "./Cart.css"

function Cart() {
    const {clearCart, products, totalPrice, getCartQuantity} = useContext(CartContext);

    return (
        <div className='cart__container'>
            <div className='cart'>
            
                { products.map(p => <CartItem item={p} key={p.id} />) }

                { products.length ?
                    <div className='cart__info'>
                        <div className="checkout-btn">
                            <p>Terminar compra</p>
                            <span className='dot'> ● </span>
                            <span>${totalPrice()}</span>
                        </div>
                        <button className='clear-btn' onClick={() => clearCart()}>Vaciar carrito</button>
                    </div> 
                    :   <div className='cart__no-items'>
                            <div className='p-wrapper'><p>No hay productos en el carrito</p></div>
                            <Link to="/">
                                <div className='flex'>
                                    <div className='cart__link'>
                                        <div className='p-wrapper'>
                                            <p>Volver al inicio</p>
                                        </div>
                                        <div className='arrow-wrapper'>
                                            <span>{'>'}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                }

            </div>
        </div>
    )
}

export default Cart;