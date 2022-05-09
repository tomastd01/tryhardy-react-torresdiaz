import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"

function Item({item}) {
    return (
        <>
        <Link to={'/item/' + item?.id}>
            <div className="card">
                <div className="card__content">
                    <div className="card__pictureContainer">
                        <img className="card__picture" src={item?.pictureUrl} alt="imagen" />
                    </div>
                    <div className="card__info">
                        <h5 className="card__name" href="#">{item?.title}</h5>
                        <div><p className="card__price">$ {item?.price}</p></div>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Item;