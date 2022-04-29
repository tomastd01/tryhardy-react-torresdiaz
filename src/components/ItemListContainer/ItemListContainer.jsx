import React, { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";

import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.css';

function ItemListContainer(props) {

    const [items, setItems] = useState([])

    const getItemsData = () => {
        fetch("./JSON/itemsData.json")
        .then( (res) => res.json() )
        .then( (itemsData) => setItems(itemsData))
    }

    useEffect( () => {
        setTimeout(() => 
        getItemsData(), 3000)
    }, [])


    function msg() {
        console.log("producto añadido al carrito")
    }

    return (
        <div className="itemListContainer">
            <ItemList items = {items} />
            <ItemCount stock={10} initial={0} onAdd={msg} />
        </div>
    )
    
}
export default ItemListContainer;