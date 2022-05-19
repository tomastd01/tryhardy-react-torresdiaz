import React, { useContext } from 'react'
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../store/CartContext';

function Cart() {
    const context = useContext(CartContext);

    return (
        <div className='shoppingCart'>
            
            {context.products.map(p => <CartItem item={p} key={p.id} />)}
            {context.products.length !== 0 ?
                <div className='total-container'>
                    <p>Precio Total: ${""}</p> 
                    <button>Terminar compra</button>
                </div> 
                :   <>
                        <h2>No hay productos en el carrito</h2>
                    </>
            }

        </div>
    )
}

export default Cart;