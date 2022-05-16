import { createContext, useContext, useState} from "React";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

function CartContextProvider( {children} ) {

    const [cartList, setCartList] = useState([])

    const isInCart = (id) => {
        return cartList.some(item => item.id === id)
    };

    const addItem = (item, quantity) => {

        if (isInCart(item.id)) {
            return setCartList(
                cartList.map(product => 
                    product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
                )
            )
        };

        setCartList([...cartList, {...item, quantity}])
    };

    const clearCart = () => {
        setCartList([])
    };

    const removeItem = (itemId) => {
        setCartList(cartList.filter( item =>
            item.id !== itemId
        ))
    };

    const totalPrice = () => {
        return cartList.reduce((total, {quantity, price}) =>
            total + quantity * price
        )
    }

    return (
        <CartContext.Provider value={{cartList, addItem, clearCart, removeItem, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;