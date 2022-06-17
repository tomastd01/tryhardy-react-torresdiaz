import { useState, createContext } from "react";

const CartContext = createContext({
    products: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    getCartQuantity: () => {},
})

export const CartContextProvider = ({children}) => {
    const [productList, setProductList] = useState([]);

    const addItem = (product) => {
        const repeatedItemIndex = productList.findIndex(item => item.id === product.id);
        if (repeatedItemIndex !== -1) {
            setProductList(productList.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity} : p))
        } else {
            setProductList([product, ...productList])
        }
    }


    const removeItem = (id) => {
        const indexToRemove = productList.findIndex(item => item.id === id);
        if (productList[indexToRemove].quantity === 1) {
            setProductList(productList.filter(i => i.id !== id))
        } else {
            setProductList(productList.map(p => p.id === id ? {...p, quantity: p.quantity -1} : p))
        }
    }

    const clearCart = () => {
        setProductList([])
    }

    const getCartQuantity = () => {
        return productList.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    }

    const totalPrice = () => {
        return productList.reduce((total, value) => {
            return total + value.price * value.quantity
        }, 0)
    }

    return (
        <CartContext.Provider value={{ products: productList, addItem, totalPrice, removeItem, clearCart, getCartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
