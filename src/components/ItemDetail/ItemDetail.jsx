import React, {useState} from "react";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

function ItemDetail({item}) {

    const [itemQuantity, setItemQuantity] = useState(null);

    const addHandler = (quantityToAdd) => setItemQuantity(quantityToAdd);

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
                    {
                        itemQuantity ? <Link to="/cart"><button>Buy {itemQuantity} products now</button></Link> 
                        : <ItemCount initial={1} stock={10} onAdd={addHandler} />
                    }
                </div>
            </div>
    )
}

export default ItemDetail;