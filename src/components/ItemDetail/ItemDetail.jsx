import React, { useContext} from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail( { item } ) {

    const context = useContext(CartContext);

    function addHandler(quantityToAdd) {
        context.addItem({quantity: quantityToAdd, ...item})
    }
    

    return (
            <div className="detail">
                <h2 className="detailTitle">{item?.title}</h2>
                <div className="detailImage">
                    <img src={item?.pictureUrl} alt="" />
                </div>
                <div>
                    <p className="detailPrice">$ {item?.price}</p>
                </div>
                <div className="countContainer">
                    <ItemCount initial={1} stock={10} onAdd={addHandler} />
                    {context.products.length &&
                        <button onClick={() => console.log(context)}>
                            <Link to='/cart'>
                                Terminar mi compra
                            </Link>
                        </button>
                    }
                </div>
            </div>
    )
}

export default ItemDetail;