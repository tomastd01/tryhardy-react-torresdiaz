import React from "react";
import "./ItemList.css"
import Item from "../Item/Item";

function ItemList ( {products} ) {
    return (
        <div className="itemList">
        {products.map(product => {
            return (
                <Item key={product.id} item={product} />
            )
        })}
        </div>
    )
}

export default ItemList;