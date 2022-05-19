import React, {useContext} from "react";
import CartContext from "../../store/CartContext";
import "./CartItem.css"

function CartItem( {item} ) {
    const {removeItem} = useContext(CartContext)

    return (
        <div className="cart-item">
            <div className="cart-item__picture">
                <img className="cart-item__img" src={item?.pictureUrl} alt="" />
            </div>
            <div className="cart-item__content">
                <div className="cart-item__col1">
                    <h6 className="cart-item__title">{item?.title}</h6>
                </div>
                <div className="cart-item__col2">
                    <span className="cart-item__price">${item?.price}</span>
                    <button className="remove-btn" onClick={() => removeItem(item?.id)}>Quitar producto (x)</button>
                </div>
            </div>
        </div>
    )
};

export default CartItem;