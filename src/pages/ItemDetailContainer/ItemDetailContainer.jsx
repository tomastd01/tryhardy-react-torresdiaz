import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import {getDoc, getFirestore, doc} from 'firebase/firestore';
import "./ItemDetailContainer.css"


function getItem(id) {
    const db = getFirestore();
    const itemReference = doc( db, "items", id);

    return getDoc(itemReference);
}

function ItemDetailContainer() {

    const [item, setItem] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem({...res.data(), id: res.id});
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