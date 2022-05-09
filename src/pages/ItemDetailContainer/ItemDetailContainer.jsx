import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"


function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const items = 
            {id: 1, title: "Mesa de arrime", description: ".", price: 5000, pictureUrl: "../images/ma1.jpg"} /*
            {id: 2, title: "Estanteria rombo", description: ".", price: 4000, pictureUrl: "../images/est1.jpg"},
            {id: 3, title: "Estanteria carrito", description: ".", price: 9000, pictureUrl: "../images/est2.jpg"},
            {id: 4, title: "Escritorio", description: ".", price: 17000, pictureUrl: "../images/esc2.jpg"},
            {id: 5, title: "Escritorio c/ estantes", description: ".", price: 20000, pictureUrl: "../images/esc1.jpg"},
            {id: 6, title: "Mesa exterior", description: ".", price: 25000, pictureUrl: "../images/mg1.jpg"}] */;

        /* const item = items.filter(item => item.id === parseInt(id)) */

        setTimeout(() => {
            resolve(items);
        }, 0);
    });
    return myPromise
}

function ItemDetailContainer() {

    const [item, setItems] = useState([]);
    const {id} = useParams;


    useEffect(() => {
        getItem(id)
            .then(res => {
                setItems(res);
            })
            .catch(err => {
                console.log(err)
                alert("error")
            });
    },[id])
    

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item}></ItemDetail>
        </div>
    )
}


export default ItemDetailContainer;