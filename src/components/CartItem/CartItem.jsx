import React, {useContext} from "react";
import CartContext from "../../store/CartContext";

function CartItem( {item} ) {
    const {removeItem, isInCart} = useContext(CartContext)

    return (
        <div>
            <img src={item?.pictureUrl} alt="" />
            <h1>{item?.title}</h1>
            <button onClick={() => removeItem(item?.id)}>X</button>
            <span>{item?.price}</span>
        </div>
    )
};

export default CartItem;