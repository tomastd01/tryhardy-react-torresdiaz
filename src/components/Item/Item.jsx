import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../PriceFormater";
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
                        <h4 className="card__name">{item?.title}</h4>
                        <div><p className="card__price">$ {formatPrice(item?.price)}</p></div>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Item;