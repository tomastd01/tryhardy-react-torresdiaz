import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../store/CartContext';

function Cart() {
    const {clearCart, products, totalPrice, getCartQuantity} = useContext(CartContext);

    return (
        <div className='shoppingCart'>
            
            { products.map(p => <CartItem item={p} key={p.id} />) }

            { products.length ?
                <div className='total-container'>
                    <p>Precio Total: ${totalPrice()}</p>
                    <p>Hay {getCartQuantity()} items</p> 
                    <button onClick={() => clearCart()}>Vaciar carrito</button>
                    <button>Terminar mi compra</button>
                </div> 
                :   <div>
                        <p>No hay productos en el carrito</p>
                        <Link to="/">
                            <p>Volver al inicio</p>
                        </Link>
                    </div>
            }

        </div>
    )
}

export default Cart;