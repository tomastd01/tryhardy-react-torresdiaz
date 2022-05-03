import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"


function ItemDetailContainer() {

    const [item, setItems] = useState([])

    const getItemsData = () => {
        fetch("./JSON/itemsData.json")
        .then( (res) => res.json() )
        .then( (itemsData) => setItems(itemsData[3]))
    }

    useEffect( () => {
        setTimeout(() => 
        getItemsData(), 3000)
    }, [])


    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item}></ItemDetail>
        </div>
    )
}


export default ItemDetailContainer;