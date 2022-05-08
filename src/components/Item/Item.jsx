import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"

function Item({key, title, pictureUrl, price}) {
    return (
        <>
        <Link to={'/item/' + key}>
            <div className="card">
                <div className="card__content">
                    <div className="card__pictureContainer">
                        <img className="card__picture" src={pictureUrl} />
                    </div>
                    <div className="card__info">
                        <a className="card__name" href="#">{title}</a>
                        <div><p className="card__price">$ {price}</p></div>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Item;