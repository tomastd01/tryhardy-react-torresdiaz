import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"


function ItemDetailContainer() {

    const [item, setItems] = useState([]);
    const {id} = useParams;


    const getItemsData = (id) => {
        fetch("./JSON/itemsData.json")
        .then( (res) => res.json() )
        .then( (itemsData) => setItems(itemsData[1]))
    }

    useEffect( () => {
        setTimeout(() => 
        getItemsData(), 500)
    }, [])
    

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item}></ItemDetail>
        </div>
    )
}


export default ItemDetailContainer;