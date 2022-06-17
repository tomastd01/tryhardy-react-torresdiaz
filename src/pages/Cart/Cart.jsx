import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../store/CartContext';
import {formatPrice} from '../../components/PriceFormater';
import "./Cart.css";
import {doc, collection, addDoc, getFirestore} from 'firebase/firestore';

function Cart() {
    const {clearCart, products, totalPrice} = useContext(CartContext);
    const db = getFirestore();

    const addOrder = (products) => {
        products.map(p => 
            addDoc(
                collection(db, 'orders'), {
                    item: {
                        name: p.title,
                        price: p.price,
                    }
                }
            )    
        )
    }

    return (
        <div className='cart__container'>
            <div className='cart'>
            
                { products.map(p => <CartItem item={p} key={p.id} />) }

                { products.length ?
                    <div className='cart__info'>
                        <div className="checkout-btn" onClick={() => addOrder(products)}>
                            <p>Terminar compra</p>
                            <span className='dot'> ● </span>
                            <span>${formatPrice(totalPrice())}</span>
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