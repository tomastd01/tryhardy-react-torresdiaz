import React from "react";
import './ItemListContainer.css'

function ItemListContainer(props) {
    return (
        <div className="itemListContainer">
            {props.greeting}
        </div>
    )
}
export default ItemListContainer;