import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"


function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const items = [ 
            {id: 1, category: "mesas", title: "Mesa de arrime", description: ".", price: 5000, pictureUrl: "../images/ma1.jpg"},
            {id: 2, category: "estanterias", title: "Estanteria rombo", description: ".", price: 4000, pictureUrl: "../images/est1.jpg"},
            {id: 3, category: "estanterias", title: "Estanteria carrito", description: ".", price: 9000, pictureUrl: "../images/est2.jpg"},
            {id: 4, category: "escritorios", title: "Escritorio", description: ".", price: 17000, pictureUrl: "../images/esc2.jpg"},
            {id: 5, category: "escritorios", title: "Escritorio c/ estantes", description: ".", price: 20000, pictureUrl: "../images/esc1.jpg"},
            {id: 6, category: "mesas", title: "Mesa exterior", description: ".", price: 25000, pictureUrl: "../images/mg1.jpg"}];

        const itemFil = items.filter(item => item.id === parseInt(id))

        setTimeout(() => {
            resolve(itemFil[0]);
        }, 0);
    });
    return myPromise
}

function ItemDetailContainer() {

    const [item, setItem] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
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