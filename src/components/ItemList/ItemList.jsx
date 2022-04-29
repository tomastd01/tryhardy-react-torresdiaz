import React from "react";
import "./ItemList.css"
import Item from "../Item/Item";

function ItemList ( {items} ) {
    return (
        <div className="itemList">
        {items.map(item => {
            return (
                <Item key={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} />
            )
        })}
        </div>
    )
}

export default ItemList;