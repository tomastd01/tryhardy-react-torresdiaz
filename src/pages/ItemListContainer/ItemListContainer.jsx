import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../../components/ItemList/ItemList";

// import ItemCount from "../../components/ItemCount/ItemCount";
import './ItemListContainer.css';


function getProducts(category) {
    const myPromise = new Promise((resolve, reject) => {
        const products = [ 
            {id: 1, category: "mesas", title: "Mesa de arrime", description: ".", price: 5000, pictureUrl: "../images/ma1.jpg"},
            {id: 2, category: "estanterias", title: "Estanteria rombo", description: ".", price: 4000, pictureUrl: "../images/est1.jpg"},
            {id: 3, category: "estanterias", title: "Estanteria carrito", description: ".", price: 9000, pictureUrl: "../images/est2.jpg"},
            {id: 4, category: "escritorios", title: "Escritorio", description: ".", price: 17000, pictureUrl: "../images/esc2.jpg"},
            {id: 5, category: "escritorios", title: "Escritorio c/ estantes", description: ".", price: 20000, pictureUrl: "../images/esc1.jpg"},
            {id: 6, category: "mesas", title: "Mesa exterior", description: ".", price: 25000, pictureUrl: "../images/mg1.jpg"}];

        /* const product = items.filter(item => item.id == id) */

        const productsFiltered = category ? products.filter(product => product.category === category) : products;
        setTimeout(() => {
            resolve(productsFiltered);
        }, 500);
    });
    return myPromise
}

function ItemListContainer() {

    const [products, setProducts] = useState([])
    const {categoryId} = useParams();

    useEffect(() => {
        getProducts(categoryId)
            .then(res => {
                setProducts(res);
            })
            .catch(err => {
                console.log(err)
                alert("error")
            });
    },[categoryId])

    return (
        <>
            <div className="itemListContainer">
                <ItemList products = {products} />
                {/* <ItemCount stock={10} initial={0} onAdd={msg} /> */}
            </div>
        </>
    )
    
}
export default ItemListContainer;