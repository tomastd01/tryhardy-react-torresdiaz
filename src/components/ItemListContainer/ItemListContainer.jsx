import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.css'

function ItemListContainer(props) {

    function msg() {
        console.log("producto añadido al carrito")
    }

    return (
        <div className="itemListContainer">
            <ItemCount stock={10} initial={0} onAdd={msg} />
        </div>
    )
    
}
export default ItemListContainer;