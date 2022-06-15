import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../../components/ItemList/ItemList";
import './ItemListContainer.css';
import {collection, getDocs, getFirestore, query,where} from 'firebase/firestore';

function getProducts(category) {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');

    const q = category && query(
        itemsCollection,
        where("category", "==", category)
    );
    return getDocs(q || itemsCollection);
}

function ItemListContainer() {

    const [products, setProducts] = useState([])
    const {categoryId} = useParams();

    useEffect(() => {

    getProducts(categoryId)
            .then(res => {
               setProducts(res.docs.map(doc => {
                   return {...doc.data(), id: doc.id}
                })); 
            }).catch(err => {
                alert(err)
            });

    },[categoryId])

    return (
        <>
            <div className="itemListContainer">
                <ItemList products = {products} />
            </div>
        </>
    )
    
}
export default ItemListContainer;