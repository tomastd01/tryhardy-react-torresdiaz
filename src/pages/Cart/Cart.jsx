import { useCartContext } from '../../context/contextProvider';
import CartItem from '../../components/CartItem/CartItem';

function Cart() {
    const {cartList, clearCart} = useCartContext();

    return (
        <div className='shoppingCart'>
            {cartList.map(item => 
                <CartItem key={item.id} item={item} />
            )}
            <button onClick={() => clearCart()}>Vaciar cart</button>
        </div>
    )
}

export default Cart;